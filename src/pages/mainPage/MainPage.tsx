import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";

interface Props {}
function MainPage({}: Props) {
  return (
    <div className="grid max-h-screen grid-cols-[auto_1fr] justify-center gap-0 overflow-hidden">
      <SideBar />
      <div className="h-screen flex flex-col">
        <Header />
        <div className="overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
