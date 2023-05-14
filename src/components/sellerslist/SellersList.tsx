import { useEffect, useMemo, useState } from "react";
import { AvatarComponent } from "../avatar/avatar";
import * as SellerJson from "../../../public/sellers_list.json";
const SellersList = ({ setActive }: any) => {
  const [sellers, setSellers] = useState([]);

  const getSellersData = async () => {
    const dt: any = SellerJson.sellers;
    setSellers(dt);
  };
  useEffect(() => {
    getSellersData();
  }, []);

  function getRandomColor(colors: string[]) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const List = useMemo(() => {
    return sellers.map((item: any, index: any) => (
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
    ));
  }, [sellers]);

  return <ul className="p-2 flex flex-col gap-2 overflow-auto">{List}</ul>;
};

export default SellersList;
