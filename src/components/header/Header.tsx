import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AvatarComponent } from "../avatar/avatar";
import { SelectComponent } from "../select/select";
import { UnderScore } from "../underScore/UnderScore";
type Props = {};

const Variant = () =>
  UnderScore({
    className: "absolute h-1 w-20 bottom-0 bg-black",
    style: { borderRadius: 9999 },
    layoutId: "bubble",
  });

const headerTabs: any = {
  investment: 1,
  sales: 2,
  sellers: 3,
};

const options = [
  { value: 1, lable: "Investment" },
  { value: 2, lable: "Sales" },
  { value: 3, lable: "Sellers" },
];
const Header = ({}: Props) => {
  const url = useLocation();
  const navigation = useNavigate();
  const img =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  const urlSplit = url.pathname.split("/");
  const tab = headerTabs[urlSplit[urlSplit.length - 1]];
  const [active, setActive] = useState(tab ? tab : 1);

  const navigate = (e: any) => {
    const temp = Object.entries(headerTabs).filter(([_, a]) => a == e)[0][0];
    setActive(e);
    navigation(`/dashboard/${temp}`);
  };

  return (
    <div className="h-16 shadow-md flex items-center md:pl-4 px-4 pl-10 w-full">
      <div className=" gap-6 h-full items-center relative hidden xsm:flex">
        {options.map((a, idx) => (
          <div
            className="w-20 flex justify-center cursor-pointer"
            onClick={() => navigate(idx + 1)}
          >
            {a.lable}
            {active == idx + 1 && <Variant />}
          </div>
        ))}
      </div>
      <div className="flex xsm:hidden">
        <SelectComponent value={active} options={options} onChange={navigate} />
      </div>
      <div
        className="ml-auto flex gap-4 items-center py-2 cursor-pointer"
        onClick={() => navigation("/account")}
      >
        <AvatarComponent link={img} fallBack={"CN"} alt={"Image"} />
        <div className="flex-col gap-0 hidden md:flex">
          <div className="font-semibold">Jhon Doe</div>
          <div className="">Associate software dev</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
