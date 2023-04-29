import { SearchIcon } from "lucide-react";
import { AvatarComponent } from "../avatar/avatar";

type Props = {};

const Table = ({}: Props) => {
  const get = async () => {
    const d = await fetch("https://api.unsplash.com/photos");
    const r = await d.json();
    console.log(r);
  };
  get();

  const headers = [
    {
      lable: "Profile",
    },
    {
      lable: "Name",
      class: "font-medium text-gray-900 whitespace-nowrap dark:text-white",
    },
    { lable: "Age" },
    { lable: "Address" },
    { lable: "Education" },
  ];
  let options = [
    {
      Profile: (
        <AvatarComponent
          className="border-[2px] border-gray-600 w-[2.5rem] h-[2.5rem]"
          fallBack="RA"
          link={
            "https://images.unsplash.com/photo-1681958758179-207ff9bd9362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          }
          alt={"Profile"}
        />
      ),
      Name: "Rahil",
      Age: 23,
      Address: "bg-white border  border-gray-300",
      Education: "absolute left-0 m-2 text-gray-400",
    },
    {
      Profile: (
        <AvatarComponent
          className="border-[2px] border-gray-600 w-[2.5rem] h-[2.5rem]"
          fallBack="RA"
          link={""}
          alt={"Profile"}
        />
      ),
      Name: "Rahil",
      Age: 23,
      Address: "bg-white border  border-gray-300",
      Education: "absolute left-0 m-2 text-gray-400",
    },
    {
      Profile: (
        <AvatarComponent
          className="border-[2px] border-gray-600 w-[2.5rem] h-[2.5rem]"
          fallBack="EA"
          link={""}
          alt={"Profile"}
        />
      ),
      Name: "Eshan",
      Age: 23,
      Address: "bg-white border  border-gray-300",
      Education: "absolute left-0 m-2 text-gray-400",
    },
  ];
  options = [...options, ...options, ...options, ...options];
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className=" p-4 bg-white shadow shadow-slate-400 rounded">
        <div className="relative flex items-center w-[25%]">
          <SearchIcon className="absolute left-0 m-2 text-gray-400" />
          <input
            type="text"
            id="first_name"
            className="bg-white border  border-gray-300 text-gray-900 text-sm
             rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"
            placeholder="Search Customer"
            required
          />
        </div>
      </div>

      <div className="relative h-[70vh] overflow-auto no-scrollbar bg-white shadow shadow-slate-400 rounded">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="sticky top-0 z-10  text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border-b-2 border-grey-700">
              {headers.map((a) => (
                <th scope="col" className="px-6 py-4" key={a.lable}>
                  {a.lable}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {options.map((item: any) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {headers.map((key) => (
                  <td className={`px-6 py-4 ${key.class ?? ""}`}>
                    {item[key.lable]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
