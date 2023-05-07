import { useEffect, useRef, useState } from "react";
import { Product, useProductGenerator } from "../../hooks/useGeneratedMockData";
import { PaginationFooter } from "./PaginationFooter";

const categoryColors: any = {
  Smartphones: "bg-pink-500 text-white",
  Tablets: "bg-blue-500 text-white",
  Wearables: "bg-green-500 text-white",
  Accessories: "bg-purple-500 text-white",
  Laptops: "bg-red-500 text-white",
  Desktops: "bg-yellow-500 text-gray-900",
  Monitors: "bg-indigo-500 text-white",
};
const stockColors = {
  low: "bg-red-500",
  medium: "bg-yellow-500",
  high: "bg-green-500",
};
function getStockAvailability(stock: any) {
  if (stock < 30) {
    return stockColors.low;
  } else if (stock < 50) {
    return stockColors.medium;
  } else {
    return stockColors.high;
  }
}

type Props = {};

const Table = ({}: Props) => {
  const [data] = useProductGenerator();
  const [items, setItems] = useState<Product[]>([]);
  const ref = useRef({ current: 1, pageSize: 10 });
  console.log(data);
  const [pageNo, setPageNo] = useState(1);
  const paginate = (items: any, pageSize: any, currentPage: any) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = items.slice(startIndex, endIndex);
    console.log(paginatedItems);
    setItems(paginatedItems);
  };
  useEffect(() => {
    paginate(data, ref.current.pageSize, pageNo);
  }, [pageNo, ref.current.pageSize, data]);

  const selectAll = (state: boolean) => {
    const temp: any = [...items];
    for (let i of temp) {
      i.selected = state;
    }
    setItems(temp);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <h5>
                <span className="text-gray-500">All Products:</span>
                <span className="dark:text-white">123456</span>
              </h5>
              <h5>
                <span className="text-gray-500">Total sales:</span>
                <span className="dark:text-white">$88.4k</span>
              </h5>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onChange={(e) => {
                          selectAll(e.target.checked);
                        }}
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Sales/Day
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Sales/Month
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Rating
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Sales
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Revenue
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Last Update
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item: any, idx) => (
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          checked={item["selected"]}
                          onChange={(e) => {
                            const itemTemp = item;
                            itemTemp.selected = e.target.checked;
                            const temp = [...items];
                            temp[idx] = itemTemp;
                            setItems(temp);
                          }}
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      {item.model}
                    </th>
                    <td className="px-4 py-2">
                      <span
                        className={`${
                          categoryColors[item.category]
                        } text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300`}
                      >
                        {item.category}
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div
                          className={`inline-block w-4 h-4 mr-2 ${getStockAvailability(
                            item.stockDetail
                          )} rounded-full`}
                        ></div>
                        {item.stockDetail}
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.salePerDay}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.salePerMonth}
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        {"12345".split("").map((_, index) => (
                          <svg
                            aria-hidden="true"
                            className={`w-5 h-5 ${
                              Math.round(item.rating) >= index + 1
                                ? "text-yellow-400"
                                : "text-gray-400"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-gray-500 dark:text-gray-400">
                          {Math.round(item.rating)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        {item.salePerDay * item.salePerMonth}
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      $
                      {`${
                        item.salePerDay * item.salePerMonth * item.price
                      }`.slice(0, 2)}
                      M
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.lastUpdated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white mx-2">
                {ref.current.current}-
                {ref.current.current + ref.current.pageSize - 1}
              </span>
              of
              <span className="mx-2 font-semibold text-gray-900 dark:text-white">
                {data.length}
              </span>
            </span>

            <PaginationFooter
              setPage={setPageNo}
              totalPages={Math.ceil(data.length / ref.current.pageSize)}
              currentPage={pageNo}
              siblingsCount={2}
              boundaries={2}
            />
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Table;
