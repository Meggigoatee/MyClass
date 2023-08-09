import { Outlet } from "react-router-dom";
import Mainbar from "./teachermainbar";

const Teacherlayout = () => {
  const isTeacher = window.localStorage.getItem("isTeacher");
  const isLogin = window.localStorage.getItem("isLogin");
  const email = window.localStorage.getItem("email");
  console.log(isTeacher, email, isLogin);

  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2 vh-100 bg-dark p-0" style={{position: "fixed"}}>
          <Mainbar />
        </div>
        <div className="col bg-light">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Teacherlayout;
