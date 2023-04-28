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
  company: 2,
  candidates: 3,
};

const options = [
  { value: 1, lable: "Investment" },
  { value: 2, lable: "Company" },
  { value: 3, lable: "Candidates" },
];
const Header = ({}: Props) => {
  const url = useLocation();
  const navigation = useNavigate();
  console.log(url.pathname.split("/"));
  const urlSplit = url.pathname.split("/");
  const tab = headerTabs[urlSplit[urlSplit.length - 1]];
  const [active, setActive] = useState(tab ? tab : 1);

  const navigate = (e: any) => {
    const temp = Object.entries(headerTabs).filter(([_, a]) => a == e)[0][0];
    setActive(e);
    navigation(`/dashboard/${temp}`);
  };

  return (
    <div className="h-16 shadow-md flex items-center md:pl-4 px-4 pl-10">
      <div className=" gap-6 h-full items-center relative hidden xsm:flex">
        {options.map((a, idx) => (
          <div
            className="w-20 flex justify-center"
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
      <div className="ml-auto flex gap-4 items-center py-2 cursor-pointer">
        <AvatarComponent
          link={
            "data:image/jpeg;base64,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"
          }
          fallBack={"CN"}
          alt={"Image"}
        />
        <div className="flex-col gap-0 hidden md:flex">
          <div className="font-semibold">Jhon Doe</div>
          <div className="">Associate software dev</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
