import { Route, Routes } from "react-router-dom";
import Frontpage from "./components/login/frontpage";
import "./App.css";
import Loginform from "./components/login/loginform";
import Joinselect from "./components/login/joinselect";
import Problem from "./components/teacher/problems/problem";
import Myclassroom from "./components/student/myclassroom/myclassroom";
import Schedule from "./components/student/schedule/schedule";
import Avatar from "./components/student/avatar/avatar";
import Room from "./components/student/myclassroom/room";
import Studentlayout from "./components/student/layout/studentlayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Joinform from "./components/login/joinform";

function App() {
  return (
    <div className="App vh-100">
      <Routes>
        <Route path="frontpage" element={<Frontpage />} />
        <Route path="loginform" element={<Loginform />} />
        <Route path="joinselect" element={<Joinselect />} />
        <Route path="joinform" element={<Joinform />} />
        <Route path="stu" element={<Studentlayout />}>
          <Route path="problem" element={<Problem />} />
          <Route path="myclassroom" element={<Myclassroom />}>
            <Route path="room/:roomNum" element={<Room />} />
          </Route>
          <Route path="schedule" element={<Schedule />} />
          <Route path="avatar" element={<Avatar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
