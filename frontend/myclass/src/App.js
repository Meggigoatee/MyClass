import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Frontpage from "./components/login/frontpage";
import "./App.css";
import Loginform from "./components/login/loginform";
import Joinselect from "./components/login/joinselect";
import Problem from "./components/teacher/problems/problems";
import Myclassroom from "./components/student/myclassroom/myclassroom";
import Schedule from "./components/student/schedule/schedule";
import Avatar from "./components/student/avatar/avatar";
import Room from "./components/student/myclassroom/room";
import Studentlayout from "./components/student/layout/studentlayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Joinform from "./components/login/joinform";
import PrivateRoute from "./functions/privateRoute";
import Teacherlayout from "./components/teacher/layout/teacherlayout";
import Teacherclassroom from "./components/teacher/myclassroom/teacherclassroom";
import TeacherRoom from "./components/teacher/myclassroom/teacherRoom";
import NewClassForm from "./components/teacher/myclassroom/newclassform";
import TeacherSchedule from "./components/teacher/schedule/teacherschedule";
import Problems from "./components/teacher/problems/problems";
import ProblemForm from "./components/teacher/problems/problemform";
import EditClassForm from "./components/teacher/myclassroom/editclassform";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid vh-100 p-0">
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
          <Route path="tea" element={<Teacherlayout />}>
            <Route path="newclass" element={<NewClassForm />} />
            <Route path="editclass/:roomNum" element={<EditClassForm />} />
            <Route path="myclassroom" element={<Teacherclassroom />} />
            <Route path="room/:roomNum" element={<TeacherRoom />} />
            <Route path="schedule" element={<TeacherSchedule />} />
            <Route path="problems" element={<Problems />}/>
            <Route path="problemform" element={<ProblemForm />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
