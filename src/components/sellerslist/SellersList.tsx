import React, { useEffect, useRef, useState } from "react";
import { AvatarComponent } from "../avatar/avatar";

type Props = {};

const SellersList = ({ setActive }: any) => {
  const [sellers, setSellers] = useState([]);
  const [items, setItems] = useState([]);
  const ref = useRef({ current: 1, pageSize: 10 });

  const [pageNo, setPageNo] = useState(1);
  const paginate = (items: any, pageSize: any, currentPage: any) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = items.slice(startIndex, endIndex);
    console.log(paginatedItems);
    setItems(paginatedItems);
  };

  const getSellersData = async () => {
    const res = await fetch(
      import.meta.env.DEV
        ? "../../sellers_list.json"
        : "../../React-cms-website-v1/sellers_list.json"
    );
    const data = await res.json();

    setSellers(data);
  };
  useEffect(() => {
    getSellersData();
  }, []);
  useEffect(() => {
    paginate(sellers, ref.current.pageSize, pageNo);
  }, [pageNo, ref.current.pageSize, sellers]);
  function getRandomColor(colors: string[]) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <ul className="p-2 flex flex-col gap-2 overflow-auto">
      {sellers.map((item: any, index: any) => (
        <li
          onClick={() => setActive(index)}
          className="cursor-pointer p-2 flex items-center gap-4 bg-white rounded-[0.75rem] shadow-md hover:bg-slate-300 transition"
        >
          <AvatarComponent
            link={""}
            fallBack={item.shortName}
            className={getRandomColor([
              "bg-blue-300",
              "bg-red-300",
              "bg-yellow-300",
              "bg-green-300",
            ])}
            alt={"img"}
          />
          <div className="flex flex-col justify-between">
            <div>{item.name}</div>
            <div className="text-slate-700">ID - {item.shortName}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SellersList;
