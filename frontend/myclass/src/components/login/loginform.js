import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { logIn } from "../../redux/loginAction";

const Loginform = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const { email, password } = input;

  // const { isLoggedIn, user_email, isTeacher } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const handleLogin = (email, isTeacher) => {
  //   dispatch(logIn(user_email, isTeacher));
  // };

  // input 이벤트 핸들러
  const handleValueChange = (e) => {
    e.preventDefault();
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const Loginsubmit = async (e) => {
    e.preventDefault();

    const loginData = new FormData();
    loginData.append("email", email);
    loginData.append("password", password);

    try {
      await axios.post("http://localhost:8088/login", loginData, {
        withCredentials: true,
      });
      //쿠키를 확인하는 코드
      const cookieValue = Cookies.get("JSESSIONID");
      if (cookieValue) {
        const loginDataResponse = await axios.post(
          `http://localhost:8088/chkisteacher/${email}`
        );
        let isTeacher = loginDataResponse.data;
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("isLogin", true);
        window.localStorage.setItem("isTeacher", isTeacher);
        if (isTeacher === "T") {
          window.location.href = "/tea";
        } else {
          window.location.href = "/stu";
        }
      } else {
        window.alert("로그인 실패");
      }

      // response를 확인하고, 필요한 경우 토큰 등을 저장하세요.
    } catch (error) {
      window.alert("로그인 실패! 입력을 다시 확인하세요.");
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div
        id="loginform"
        className="container-md h-100 text-center justify-content-center d-flex align-items-center bg-light"
      >
        <div className="m-auto p-5 border border-warning rounded-2 bg-white col-6">
          <h3>로그인</h3>
          <form>
            <div className="align-self-center row">
              <label htmlFor="email" className="text-center">
                이메일
                <input
                  id="email"
                  className="form-control"
                  name="email"
                  type="text"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={handleValueChange}
                />
              </label>
            </div>
            <br />
            <div className="align-self-center row">
              <label htmlFor="password" className="text-center">
                비밀번호
                <input
                  id="password"
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={handleValueChange}
                />
              </label>
            </div>
            <br />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={Loginsubmit}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginform;
