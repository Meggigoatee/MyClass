import axios from "axios";
import { useState } from "react";

const NewClassForm = () => {
  // 가입 폼에 대한 입력 설정
  const [input, setInput] = useState({
    name: "",
    subject: "",
    discription: "",
  });

  const { name, subject, discription } = input;

  const [isInputDisabled, setInputDisabled] = useState(true);

  // input 이벤트 핸들러
  const handleValueChange = (e) => {
    e.preventDefault();
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // 과목 이벤트 핸들러
  const handleSubjectControl = (e) => {
    const value = e.target.getAttribute("data-value");

    if (value === "직접 입력하세요") {
      setInputDisabled(false);
    } else {
      setInputDisabled(true);
    }

    setInput((prev) => {
      return { ...prev, subject: value };
    });
  };

  const setInputReset = () => {
    setInput({
      classname: "",
      subject: "",
      discription: "",
    });
  };

  // 에러 메시지
  const [error, setError] = useState({});

  // 새 클래스 전송
  const saveClass = async (e) => {
    e.preventDefault();
    let email = localStorage.getItem("email");
    console.log(email);
    const newClass = new FormData();
    newClass.append("className", name);
    newClass.append("subject", subject);
    newClass.append("discription", discription);

    const response = await axios.post(
      `http://localhost:8088/saveclass/${email}`,
      newClass
    );
    let errorList = response.data;
    console.log(errorList);
    if (JSON.stringify(errorList) !== "{}") {
      setError(errorList);
    } else {
      setInputReset();
      window.alert("클래스 생성 성공");
      window.location.href = "/tea/myclassroom";
    }
  };

  return (
    <div className="row bg-light h-100 text-center justify-content-md-center justify-content-center d-flex align-items-center">
      <form>
        <div className="m-auto border border-warning rounded-2 bg-white p-5 col-md-5 ">
          <h2>새 클래스 만들기</h2>
          <br />
          <div className="row mb-3">
            <label
              htmlFor="name"
              className="text-start col-sm-4 col-form-label"
            >
              클래스 이름
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
              htmlFor="subject"
              className="text-start col-sm-4 col-form-label"
            >
              과목
            </label>
            <div className="col-sm-8">
              <div className="dropdown">
                <button
                  className="btn btn-warning dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  과목선택
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li
                    className="dropdown-item"
                    data-value="국어"
                    onClick={handleSubjectControl}
                  >
                    국어
                  </li>
                  <li
                    className="dropdown-item"
                    data-value="과학"
                    onClick={handleSubjectControl}
                  >
                    과학
                  </li>
                  <li
                    className="dropdown-item"
                    data-value="수학"
                    onClick={handleSubjectControl}
                  >
                    수학
                  </li>
                  <li
                    className="dropdown-item"
                    data-value="사회"
                    onClick={handleSubjectControl}
                  >
                    사회
                  </li>
                  <li
                    className="dropdown-item"
                    data-value="영어"
                    onClick={handleSubjectControl}
                  >
                    영어
                  </li>
                  <li
                    className="dropdown-item"
                    data-value="기타"
                    onClick={handleSubjectControl}
                  >
                    기타
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li
                    className="dropdown-item"
                    data-value="직접 입력하세요"
                    onClick={handleSubjectControl}
                  >
                    직접입력
                  </li>
                </ul>
              </div>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={subject}
                onChange={handleValueChange}
                disabled={isInputDisabled}
              />
              {error.subject && (
                <p style={{ color: "red" }}>{error.subject.defaultMessage}</p>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="discription"
              className="text-start col-sm-4 col-form-label"
            >
              클래스 설명
            </label>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                id="discription"
                name="discription"
                value={discription}
                onChange={handleValueChange}
              />
              {/* {error.passwordchk && (
                <p style={{ color: "red" }}>
                  {error.passwordchk.defaultMessage}
                </p>
              )} */}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-warning"
            onClick={saveClass}
          >
            만들기
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewClassForm;
