import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditClassForm = () => {
  const { roomNum } = useParams();

  // 가입 폼에 대한 입력 설정
  const [input, setInput] = useState({
    classId: roomNum,
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
      classId: roomNum,
      classname: "",
      subject: "",
      discription: "",
    });
  };

  // 에러 메시지
  const [error, setError] = useState({});

  const classInfo = async () => {
    const response = await axios.get(
      `http://localhost:8080/myclassroom/${roomNum}`
    );
    const Data = response.data.classData[0];
    const getname = Data.className;
    const getsubject = Data.subject;
    const getdiscription = Data.discription;
    setInput({
      ...input,
      name: getname,
      subject: getsubject,
      discription: getdiscription,
    });
  };

  // 새 클래스 전송
  const saveClass = async (e) => {
    e.preventDefault();
    const editClass = new FormData();
    editClass.append("classId", roomNum);
    editClass.append("className", name);
    editClass.append("subject", subject);
    editClass.append("discription", discription);

    const response = await axios.post(
      `http://localhost:8080/editclass`,
      editClass
    );
    let errorList = response.data;
    console.log(errorList);
    if (JSON.stringify(errorList) !== "{}") {
      setError(errorList);
    } else {
      setInputReset();
      window.alert("클래스 수정 성공");
      window.location.href = `/tea/room/${roomNum}`;
    }
  };

  const deleteClass = async (e) => {
    e.preventDefault();
    if (window.confirm("클래스와 일정이 삭제됩니다. 계속하시겠습니까?")) {
      await axios.post(`http://localhost:8080/deleteclass/${roomNum}`);
      window.alert("클래스가 삭제되었습니다.");
      window.location.href = "/tea/myclassroom";
    } else {
      window.alert("취소 되었습니다.");
    }
  };

  useEffect(() => {
    classInfo();
  }, []);

  return (
    <div className="row bg-light h-100 text-center justify-content-md-center justify-content-center d-flex align-items-center">
      <form>
        <div className="m-auto border border-warning rounded-2 bg-white p-5 col-md-5 ">
          <h2>클래스 수정</h2>
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
            className="btn btn-outline-success"
            onClick={saveClass}
          >
            수정
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={deleteClass}
          >
            삭제
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditClassForm;
