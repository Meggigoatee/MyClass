import { Outlet } from "react-router-dom";
import Mainbar from "./studentmainbar";
import "./studentlayout.css";

const Studentlayout = () => {
  return (
    <>
      <div className="container text-center">
          <Mainbar />
          <Outlet />
      </div>
    </>
  );
};

export default Studentlayout;
