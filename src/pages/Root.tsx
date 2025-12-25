import { Outlet } from "react-router";
import Navbar from "@/components/Navbar/Navbar";
const Root = () => {
  return (
    <div className="px-10 py-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
