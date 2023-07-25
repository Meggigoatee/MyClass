import { Outlet } from "react-router-dom";
import Mainbar from "./studentmainbar";
import "./studentlayout.css";

const Studentlayout = () => {
  return (
    <>
      <div id="student_layout" style={{ position: "relative" }}>
        <Mainbar />
        <Outlet />
      </div>
    </>
  );
};

export default Studentlayout;
