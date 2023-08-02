import { Outlet } from "react-router-dom";
import Mainbar from "./studentmainbar";
import "./studentlayout.css";

const Studentlayout = () => {
  return (
    <>
      <div className="row">
        <div className="col-2 vh-100 bg-secondary p-0">
          <Mainbar />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Studentlayout;
