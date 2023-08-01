import axios from "axios";
import { useState } from "react";
import "./loginform.css";
import Cookies from "js-cookie";

const Loginform = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const { email, password } = input;

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
      const response = await axios.post(
        "http://localhost:8080/login",
        loginData,
        { withCredentials: true }
      );
      console.log(response);
      //쿠키를 확인하는 코드
      const cookieValue = Cookies.get("Cookieeee");
      if (cookieValue) {
        window.location.href = "/stu";
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
        <div className="m-auto p-5 border border-warning rounded-2 bg-white">
          <h3>로그인</h3>
          <form>
            <div className="align-self-center">
              <p>이메일</p>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={handleValueChange}
              />
            </div>
            <div className="align-self-center">
              <p>비밀번호</p>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={handleValueChange}
              />
              <p>유효성 검사</p>
            </div>
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
