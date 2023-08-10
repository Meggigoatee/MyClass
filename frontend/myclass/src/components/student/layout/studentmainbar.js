import { NavLink } from "react-router-dom";
import menulogo from "./../../../img/svg/icons8-menu-64.svg";
import { useState } from "react";
import axios from "axios";

const Mainbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const showDropdown = () => {
    setIsToggle(!isToggle);
  };

  const [hover, setHover] = useState(false);

  const hoverStyles = hover
    ? { backgroundColor: "#b02826" }
    : { backgroundColor: "#6c757d" };

  const Logout = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8088/logout");
    localStorage.removeItem("email");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("isTeacher");
    window.location.href = "/frontpage";
  };

  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div className="text-center">
        <NavLink
          to="/stu"
          className="fw-bold fst-italic my-2 fs-1 text-decoration-none text-warning"
        >
          My Class
        </NavLink>
      </div>
      <hr />
      <ul className="nav flex-column nav-pills nav-fill fs-4">
        <li className="nav-item">
          <NavLink
            to="/stu/myclassroom"
            className="nav-link py-2 rounded-0 text-white"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#FFC107" : "#6c757d",
            })}
          >
            나의 클래스
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/stu/schedule"
            className="nav-link py-2 rounded-0 text-white"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#FFC107" : "#6c757d",
            })}
          >
            일정표
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/stu/avatar"
            className="nav-link py-2 rounded-0 text-white "
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#FFC107" : "#6c757d",
            })}
          >
            아바타
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="mt-auto mb-3">
        {isToggle ? (
          <ul className="nav flex-column nav-pills nav-fill fs-5">
            <li className="nav-item">
              <NavLink
                to="/stu/my"
                className="nav-link py-2 rounded-0 text-white"
              >
                내 정보 수정
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/stu/config"
                className="nav-link py-2 rounded-0 text-white"
              >
                설정
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <button
                className="nav-link py-2 rounded-0 text-white navlink-style"
                style={hoverStyles}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={Logout}
              >
                로그아웃
              </button>
            </li>
          </ul>
        ) : (
          ""
        )}
        <div className="justify-content-center text-center">
          <img src={menulogo} alt="menu_icon" onClick={showDropdown}></img>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
