import { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardHeader from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
let rerners = 1;
interface Props {}
const headers: any = {
  "/": DashboardHeader,
  dashboard: DashboardHeader,
};
function DashboardMainPage({}: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    rerners = rerners + 1;
    console.log(rerners);
  });

  const Temp = useMemo(() => {
    if (headers[pathname]) {
      return headers[pathname];
    }
    if (headers[pathname.split("/")[1]]) {
      return headers[pathname.split("/")[1]];
    }
    return () => <></>;
  }, [pathname]);
  return (
    <div className="flex max-h-screen w-full gap-0 ">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <div className="h-screen flex flex-col ">
          <Temp />
          <div className="overflow-auto h-full w-full ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMainPage;
