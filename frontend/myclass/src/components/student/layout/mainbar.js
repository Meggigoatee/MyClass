import { useState } from "react";
import { Link } from "react-router-dom";
import "./mainbar.css";

const Mainbar = () => {
  const [selected, setSelected] = useState(false);

  const handleItemClick = (itemId) => {
    setSelected(itemId);
  };

  return (
    <>
      <div id="main_bar">
        <ul>
          <li
            id="myclassroom"
            className={`mainbar_button ${
              selected === "myclassroom" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("myclassroom")}
          >
            <Link to="/myclassroom">나의 클래스</Link>
          </li>
          <li
            id="schedule"
            className={`mainbar_button ${
              selected === "schedule" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("schedule")}
          >
            <Link to="/schedule">일정표</Link>
          </li>
          <li
            id="avatar"
            className={`mainbar_button ${
              selected === "avatar" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("avatar")}
          >
            <Link to="avatar">아바타</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mainbar;
