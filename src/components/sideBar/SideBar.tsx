import {
  SidebarCloseIcon,
  SidebarOpenIcon,
  LayoutDashboardIcon,
  HeartHandshakeIcon,
  Cog,
  Bell,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UnderScore } from "../underScore/UnderScore";

type Props = {};
const Variant = () =>
  UnderScore({
    layoutId: "sidebar-pill",
    className: "left-0 absolute -z-10 bg-slate-900 h-full w-full rounded",
    style: {},
  });
const sidebarlist = [
  { icon: <LayoutDashboardIcon />, lable: "Dashboard", link: "/dashboard" },
  { icon: <HeartHandshakeIcon />, lable: "Customer", link: "/customers" },
  { icon: <Bell />, lable: "Notification", link: "/notifications" },
  { icon: <Cog />, lable: "Setting", link: "/setting" },
  { icon: <UsersIcon />, lable: "Account", link: "/account" },
];
const SideBar = ({}: Props) => {
  const { pathname } = useLocation();
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const acitveTbIndx = sidebarlist.findIndex((a) => pathname.includes(a.link));
  const [acitveTb, setActiveTab] = useState(acitveTbIndx ?? 0);
  const router = useNavigate();
  const sideBarClick = (tabIdx: number) => {
    console.log(location);
    router(sidebarlist[tabIdx].link);
    setActiveTab(tabIdx);
  };

  return (
    <>
      <div
        className={`flex h-[calc(100vh)] z-50   absolute md:visible md:translate-x-0 md:relative md:w-40 p-4  flex-col items-center justify-start py-6 transition-all duration-1000 ease-in-out ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full "
        }`}
        style={{ backgroundColor: "var(--black)" }}
      >
        <span
          className="absolute visible md:invisible right-0 border-r-emerald-600 translate-x-full px-2 r py-2  text-white cursor-pointer  text-sm font-bold"
          onClick={() => setIsSidebarOpen(!isSideBarOpen)}
          style={{ backgroundColor: "var(--black)" }}
        >
          {isSideBarOpen ? <SidebarCloseIcon /> : <SidebarOpenIcon />}
        </span>
        <div
          className={` md:visible md:relative md:w-full flex-col  flex items-center justify-center `}
        >
          <div className="text-white text-xl md:text-2xl ">Dashify</div>
          <div className="h-1 bg-white"></div>
          <div className="mt-10">
            <ul className="flex flex-col gap-6">
              {sidebarlist.map((a, idx) => (
                <li
                  onClick={() => sideBarClick(idx)}
                  className="text-white items-center flex relative gap-2 hover:bg-slate-900 px-4 py-2 rounded w-full"
                >
                  {a.icon}
                  {a.lable}
                  {acitveTb == idx && <Variant />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
