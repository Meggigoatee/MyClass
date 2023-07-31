import { useState } from "react";
import { Link } from "react-router-dom";
import "./studentmainbar.css";

const Mainbar = () => {
  const [selected, setSelected] = useState(false);

  const handleItemClick = (itemId) => {
    setSelected(itemId);
  };
  {/* <div id="main_bar">
    <ul>
      <li
        id="myclassroom"
        className={`mainbar_button ${
          selected === "myclassroom" ? "selected" : ""
        }`}
        onClick={() => handleItemClick("myclassroom")}
      >
        <Link to="/stu/myclassroom">나의 클래스</Link>
      </li>
      <li
        id="schedule"
        className={`mainbar_button ${
          selected === "schedule" ? "selected" : ""
        }`}
        onClick={() => handleItemClick("schedule")}
      >
        <Link to="/stu/schedule">일정표</Link>
      </li>
      <li
        id="avatar"
        className={`mainbar_button ${
          selected === "avatar" ? "selected" : ""
        }`}
        onClick={() => handleItemClick("avatar")}
      >
        <Link to="/stu/avatar">아바타</Link>
      </li>
    </ul>
  </div> */}

  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-secondary" style={{width:280}}>
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32">
          {/* <use xlink:href="#bootstrap"></use> */}
          </svg>
        <span class="fs-4">My Class</span>
      </a>
      <hr/>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <svg class="bi me-2" width="16" height="16">
              {/* <use xlink:href="#home"></use> */}
              </svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16">
              {/* <use xlink:href="#speedometer2"></use> */}
              </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16">
              {/* <use xlink:href="#table"></use> */}
              </svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16">
              {/* <use xlink:href="#grid"></use> */}
              </svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16">
              {/* <use xlink:href="#people-circle"></use> */}
              </svg>
            Customers
          </a>
        </li>
      </ul>
      <hr/>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Mainbar;
