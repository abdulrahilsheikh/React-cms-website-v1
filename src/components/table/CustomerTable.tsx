import { useGenerateRandoListFromJson } from "../../hooks/useGeneratedMockData";
import { AvatarComponent } from "../avatar/avatar";
import * as Customers from "../../../public/clients_list.json";
import Modal from "../modal/Modal";
import AddNewClient from "../forms/AddNewClient";
import { useState } from "react";

type Props = {};
const taskTypes = ["Done", "Unpaid", "Completed", "Paid"];

interface IClientData {
  name: string;
  product: string;
  dueDate: string;
  price: number;
  paymentStatus: string;
  status: string;
  createdAt: string;
  profilePic: string;
}

const colorList: any = {
  Completed: "text-green-700 bg-green-100",
  Incomplete: "text-red-700 bg-red-100",
  Pending: "text-green-700 bg-green-100",
  Paid: "text-red-700 bg-red-100",
};
const CustomerTable = ({}: Props) => {
  const [data] = useGenerateRandoListFromJson(Customers);
  console.log(data);
  const [isModalOpen, setIsmodalOpen] = useState(false);
  return (
    <div className="sm:px-6 w-full h-full flex flex-col">
      <Modal
        element={<AddNewClient />}
        isOpen={isModalOpen}
        onClose={() => setIsmodalOpen(false)}
      />
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center justify-between">
          <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Customers
          </p>
          <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
            <p>Sort By:</p>
            <select
              aria-label="select"
              className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
            >
              <option className="text-indigo-800  py-3 px-4 flex items-center text-sm font-medium leading-none">
                Latest
              </option>
              <option className="text-indigo-800  py-3 px-4 flex items-center text-sm font-medium leading-none">
                Oldest
              </option>
              <option className="text-indigo-800  py-3 px-4 flex items-center text-sm font-medium leading-none">
                Latest
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 flex-1 h-40 flex flex-col">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center gap-4 flex-wrap">
            {taskTypes.map((item) => (
              <button className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>{item}</p>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsmodalOpen(true)}
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
          >
            <p className="text-sm font-medium leading-none text-white">
              Add Client
            </p>
          </button>
        </div>
        <div className="mt-7 overflow-auto flex-1">
          <table className="w-full whitespace-nowrap border-none border-0 relative">
            <thead className="sticky -top-1 bg-white z-10 border-none border-0">
              <tr
                tabIndex={0}
                className="focus:outline-none h-16 border border-gray-100 rounded"
              >
                <th>
                  <div className="ml-5">
                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                      <input
                        placeholder="checkbox"
                        type="checkbox"
                        className="focus:opacity-100 checkbox absolute cursor-pointer w-full h-full"
                      />
                    </div>
                  </div>
                </th>
                <th className="">
                  <div className="flex items-center pl-5">
                    <h2 className="text-base  leading-none text-gray-700 mr-2">
                      Client
                    </h2>
                  </div>
                </th>
                <th className="pl-5">
                  <div className="flex items-center">
                    <h2 className="text-base  leading-none text-gray-700 mr-2">
                      Order
                    </h2>
                  </div>
                </th>
                <th className="pl-5">
                  <div className="flex items-center">
                    <h2 className="text-base  leading-none text-gray-700 mr-2">
                      Due Date
                    </h2>
                  </div>
                </th>
                <th className="pl-4">
                  <div className="flex items-center">
                    <h2 className="text-base  leading-none text-gray-700 mr-2">
                      Price
                    </h2>
                  </div>
                </th>
                <th className="pl-4">
                  <div className="flex items-center">
                    <h2 className="text-base  leading-none text-gray-700 mr-2">
                      Payment
                    </h2>
                  </div>
                </th>
                <th className="pl-4">
                  <div className="flex items-center">
                    <h2 className="text-base  leading-none text-gray-700 mr-2">
                      Status
                    </h2>
                  </div>
                </th>
                <th className="pl-4">
                  <div className="flex items-center">
                    <h2 className="text-base  leading-none text-gray-700 mr-2">
                      Action
                    </h2>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {(data as IClientData[]).slice(0, 20).map((item) => (
                <tr
                  tabIndex={0}
                  className="focus:outline-none h-16 border border-gray-100 rounded"
                >
                  <td>
                    <div className="ml-5">
                      <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input
                          placeholder="checkbox"
                          type="checkbox"
                          className="focus:opacity-100 checkbox absolute cursor-pointer w-full h-full"
                        />
                      </div>
                    </div>
                  </td>

                  <td className="">
                    <div className="flex gap-2 items-center pl-5">
                      <AvatarComponent
                        link={item.profilePic}
                        fallBack={""}
                        alt={"img"}
                      />
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-5">
                    <div className="flex items-center">{item.createdAt}</div>
                  </td>
                  <td className="pl-5">
                    <div
                      className={`py-3 px-3 flex items-center justify-center text-sm focus:outline-none leading-none rounded ${
                        colorList[item.paymentStatus]
                      }`}
                    >
                      {item.dueDate}
                    </div>
                  </td>
                  <td className="pl-5">
                    <div className="flex items-center">${item.price}</div>
                  </td>
                  <td className="pl-5">
                    <div
                      className={`py-3 px-3 flex items-center justify-center text-sm focus:outline-none leading-none rounded ${
                        colorList[item.paymentStatus]
                      }`}
                    >
                      {item.paymentStatus}
                    </div>
                  </td>
                  <td className="pl-5">
                    <div
                      className={`py-3 px-3 flex items-center justify-center text-sm focus:outline-none leading-none rounded ${
                        colorList[item.status]
                      }`}
                    >
                      {item.status}
                    </div>
                  </td>
                  <td className="pl-4">
                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
