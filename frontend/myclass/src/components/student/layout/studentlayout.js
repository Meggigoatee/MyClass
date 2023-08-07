import { Outlet } from "react-router-dom";
import Mainbar from "./studentmainbar";

const Studentlayout = () => {
  const isTeacher = window.localStorage.getItem("isTeacher");
  const isLogin = window.localStorage.getItem("isLogin");
  const email = window.localStorage.getItem("email");
  console.log(isTeacher, email, isLogin);

  return (
    <>
      <div className="row">
        <div className="col-2 vh-100 bg-secondary p-0">
          <Mainbar />
        </div>
        <div className="col bg-light">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Studentlayout;
