import axios from "axios";
import { useState } from "react";
import "./loginform.css";

const Loginform = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const { email, password } = input;

  const [error, setError] = useState({});

  const Loginsubmit = async (e) => {
    e.preventDefault();
    const loginData = new FormData();
    loginData.append("email", email);
    loginData.append("password", password);

    const response = await axios.post(
      "http://localhost:8080/loginreq",
      loginData
    );

    console.log(response);
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
              />
              {error.username && (
                <p style={{ color: "red" }}>입력된 값을 확인하세요!</p>
              )}
            </div>
            <div className="align-self-center">
              <p>비밀번호</p>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
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
