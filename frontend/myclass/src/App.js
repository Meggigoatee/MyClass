import { Route, Routes } from "react-router-dom";
import Frontpage from "./components/login/frontpage";
import "./App.css";
import Loginform from "./components/login/loginform";
import Joinselect from "./components/login/joinselect";
import Problem from "./components/problems/problem";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="frontpage" element={<Frontpage />} />
        <Route path="loginform" element={<Loginform />} />
        <Route path="joinselect" element={<Joinselect />} />
        <Route path="problem" element={<Problem />} />
      </Routes>
    </div>
  );
}

export default App;
