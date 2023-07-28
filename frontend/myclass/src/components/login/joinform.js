import axios from "axios";
import { useEffect, useState } from "react";

const Joinform = () => {
  // 가입 폼에 대한 입력 설정
  const [input, setInput] = useState({
    email: "",
    password: "",
    passwordchk: "",
    name: "",
    nick: "",
  });

  const { email, password, passwordchk, name, nick, isteacher } = input;

  // radio 버튼 이벤트
  const [ischecked, setIschecked] = useState(false);

  const handleRadioChange = (e) => {
    setIschecked(e.target.value); // e.target.value 값을 그대로 사용
    setInput({ ...input, isteacher: e.target.value }); // 업데이트된 상태를 setInput으로 설정
    console.log(e.target.value); // 업데이트된 값 출력
    console.log("isteacher:" + isteacher);
  };

  // input 이벤트 핸들러
  const handleValueChange = (e) => {
    e.preventDefault();
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const setInputReset = () => {
    setInput({
      email: "",
      password: "",
      passwordchk: "",
      name: "",
      nick: "",
      isteacher: "",
    });
  };
  // 에러 메시지
  const [error, setError] = useState({});

  // 회원가입 이벤트
  const JoinSubmit = async (e) => {
    console.log("실시");
    console.log(isteacher);
    e.preventDefault();
    const user = new FormData();
    user.append("email", email);
    user.append("password", password);
    user.append("passwordchk", passwordchk);
    user.append("name", name);
    user.append("nick", nick);

    if (isteacher === null) {
      user.append("isteacher", null);
    }

    user.append("isteacher", isteacher);
    console.log(user.isteacher);

    const response = await axios.post(`http://localhost:8080/register`, user);

    console.log(response);
    // if (response.status >= 200 && response.status < 300) {
    //   setInputReset();
    // } else {
    //   // 로그인 실패 - 서버로부터 받은 오류 메시지를 상태에 저장
    //   console.log(response.data);
    //   setError(response.data.errors || {});
    // }
    let errorList = response.data;
    if (errorList.length !== 0) {
      setError(errorList);
    }

    //useEffect
    // useEffect(() => {}, []);
  };

  return (
    <>
      <div className="row bg-light h-100 text-center justify-content-md-center justify-content-center d-flex align-items-center">
        <form>
          <div className="m-auto border border-warning rounded-2 bg-white p-5 col-md-5 ">
            <h2>회원가입</h2>
            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isteacher"
                  id="studentRadio"
                  value="stu"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="studentRadio">
                  학생 회원
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isteacher"
                  id="teacherRadio"
                  value="tea"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="teacherRadio">
                  교사 회원
                </label>
              </div>
              {error.isteacher && (
                <p style={{ color: "red" }}>{error.isteacher.defaultMessage}</p>
              )}
            </div>
            <div className="row mb-3">
              <label
                htmlFor="email"
                className="text-start col-sm-4 col-form-label"
              >
                이메일
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleValueChange}
                />
                {error.email && (
                  <p style={{ color: "red" }}>{error.email.defaultMessage}</p>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="password"
                className="text-start col-sm-4 col-form-label"
              >
                비밀번호
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleValueChange}
                />
                {error.password && (
                  <p style={{ color: "red" }}>
                    {error.password.defaultMessage}
                  </p>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="passwordchk"
                className="text-start col-sm-4 col-form-label"
              >
                비밀번호 확인
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="passwordchk"
                  name="passwordchk"
                  value={passwordchk}
                  onChange={handleValueChange}
                />
                {error.passwordchk && (
                  <p style={{ color: "red" }}>
                    {error.passwordchk.defaultMessage}
                  </p>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="name"
                className="text-start col-sm-4 col-form-label"
              >
                이름
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleValueChange}
                />
                {error.name && (
                  <p style={{ color: "red" }}>{error.name.defaultMessage}</p>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="nick"
                className="text-start col-sm-4 col-form-label"
              >
                닉네임
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="nick"
                  name="nick"
                  value={nick}
                  onChange={handleValueChange}
                />
                {error.nick && (
                  <p style={{ color: "red" }}>{error.nick.defaultMessage}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-warning"
              onClick={JoinSubmit}
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Joinform;
