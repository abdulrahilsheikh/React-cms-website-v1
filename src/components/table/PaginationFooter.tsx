import { useEffect, useState } from "react";

const Item = ({ data, active, clickHandler }: any) => (
  <li onClick={clickHandler}>
    <a
      href="#"
      className={`flex items-center justify-center px-3 py-2 text-sm leading-tight ${
        active ? "text-blue-500 bg-blue-200" : "text-gray-500 bg-white"
      } border border-gray-300 hover:bg-blue-200 hover:text-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
    >
      {/* ... */}
      {data}
    </a>
  </li>
);

export const PaginationFooter = ({
  totalPages,
  currentPage,
  siblingsCount = 1,
  setPage,

  boundaries,
}: any) => {
  console.log(currentPage);
  const [List, setList] = useState<any>([]);

  const generateList = () => {
    const temp = [];
    for (let i = 1; i < totalPages + 1; i++) {
      temp.push(i);
    }
    const List: any = [];
    if (boundaries * 2 + siblingsCount * 2 + 1 >= totalPages) {
      setList(temp);
      return;
    }
    if (totalPages < 10) {
      setList(temp);
      return List;
    }
    for (let i of temp.slice(0, boundaries)) {
      List.push(i);
    }
    // check left

    const leftCount = currentPage - siblingsCount - boundaries;
    const rightCount =
      totalPages - (currentPage + siblingsCount + boundaries - 1);
    if (leftCount <= 0) {
      for (let i of temp.slice(boundaries, boundaries + siblingsCount + 1)) {
        List.push(i);
      }
    } else {
      List.push("...");
    }
    if (leftCount > 0 && rightCount > 0) {
      for (let i of temp.slice(
        currentPage - siblingsCount,
        currentPage + siblingsCount - 1
      )) {
        List.push(i);
      }
    }
    if (rightCount <= 0) {
      for (let i of temp.slice(-boundaries - siblingsCount - 1, -boundaries)) {
        List.push(i);
      }
    } else {
      List.push("...");
    }
    for (let i of temp.slice(-boundaries)) {
      List.push(i);
    }
    setList(List);
  };
  const handlePaginate = (direction: number) => {
    if (direction > 0) {
      if (currentPage == totalPages) {
        setPage(1);
      } else {
        setPage(currentPage + direction);
      }
    } else {
      if (currentPage == 1) {
        setPage(totalPages);
      } else {
        setPage(currentPage + direction);
      }
    }
  };
  useEffect(() => {
    generateList();
  }, [totalPages, currentPage]);
  return (
    <ul className="inline-flex items-stretch -space-x-px">
      <li onClick={() => handlePaginate(-1)}>
        <span className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </li>
      {List.map((item: any) => (
        <Item
          data={item}
          clickHandler={() => item != "..." && setPage(item)}
          active={item == currentPage}
        />
      ))}
      <li onClick={() => handlePaginate(1)}>
        <span className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </li>
    </ul>
  );
};
