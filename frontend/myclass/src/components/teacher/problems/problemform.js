import axios from "axios";
import { useState } from "react";

const ProblemForm = () => {
  const email = localStorage.getItem("email");

  const saveProblem = async () => {
    console.log(problemName);
    console.log(inputs);
    await axios.post(
      `http://localhost:8088/saveproblem/${email}?problemName=${problemName.problemName}`,
      inputs,
      { headers: { 'Content-Type': 'application/json' } }
    );
    window.location.href = "/tea/problems";
  };

  const [problemName, setProblemName] = useState("");

  const handleValueChange = (e) => {
    e.preventDefault();
    setProblemName((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [inputs, setInputs] = useState([
    {
      id: Math.random(),
      probTitle: "",
      probExp: "",
      type: "objective",
      cho1: "",
      cho2: "",
      cho3: "",
      cho4: "",
      cho5: "",
      mmm: 0,
      sss: "",
    },
  ]);

  const handleAddInput = () => {
    setInputs([
      ...inputs,
      {
        id: Math.random(),
        probTitle: "",
        probExp: "",
        type: "objective",
        cho1: "",
        cho2: "",
        cho3: "",
        cho4: "",
        cho5: "",
        mmm: 0,
        sss: "",
      },
    ]);
  };

  const handleChoiceChange = (e, id, choiceIndex) => {
    const choiceName = `cho${choiceIndex + 1}`;
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, [choiceName]: e.target.value } : input
      )
    );
  };

  const handleRadioChange = (e, id) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, mmm: e.target.value*1 + 1 } : input
      )
    );
  };

  const handleAnswerChange = (e, id) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, sss: e.target.value } : input
      )
    );
  };

  const handleInputChange = (e, id, field) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, [field]: e.target.value } : input
      )
    );
  };

  const handleRemoveInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const renderObjectiveInput = (input) => (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index.id}>
          <label htmlFor={`option${index}`}>선택지 {index + 1}</label>
          <input
            type="text"
            id={`option${index}`}
            className="form-control"
            onChange={(e) => handleChoiceChange(e, input.id, index)}
          />
        </div>
      ))}
      <label>정답</label>
      <div>
        {Array.from({ length: 5 }, (_, index) => (
          <div className="form-check form-check-inline" key={index.id}>
            <label
              className="form-check-label"
              htmlFor={`mmm${input.id}${index}`}
            >
              선택지 {index + 1}
            </label>
            <input
              type="radio"
              name={`mmm${input.id}`}
              value={index}
              id={`mmm${input.id}${index}`}
              className="form-check-input"
              onChange={(e) => handleRadioChange(e, input.id)}
            />
          </div>
        ))}
      </div>
    </>
  );

  const renderSubjectiveInput = (input) => (
    <>
      <label htmlFor={`sss${input.id}`}>정답</label>
      <input
        type="text"
        id={`sss${input.id}`}
        className="form-control"
        onChange={(e) => handleAnswerChange(e, input.id)}
      />
    </>
  );

  return (
    <div className="container">
      <div className="row text-center mt-4">
        <h2>새 문제지 만들기</h2>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form>
            <label htmlFor="problemName">문제지 이름</label>
            <input
              type="text"
              className="form-control"
              id="problemName"
              placeholder="문제지 이름을 입력하세요"
              name="problemName"
              onChange={handleValueChange}
            ></input>
            <br />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <button
            className="btn btn-warning m-2"
            type="button"
            onClick={handleAddInput}
          >
            새로운 문제 추가
          </button>
          <button
            className="btn btn-success m-2"
            type="button"
            onClick={saveProblem}
          >
            문제지 저장
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-8 mx-auto">
          {inputs.map((input) => (
            <div
              key={input.id}
              className="border border-warning rounded m-2 p-3 bg-white"
            >
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label"
                  htmlFor={`objective${input.id}`}
                >
                  객관식
                </label>
                <input
                  type="radio"
                  value="objective"
                  id={`objective${input.id}`}
                  name={`type${input.id}`} // 문제의 ID를 사용하여 name 속성 설정
                  className="form-check-input"
                  checked={input.type === "objective"}
                  onChange={(e) => handleInputChange(e, input.id, "type")}
                />
              </div>
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label"
                  htmlFor={`subjective${input.id}`}
                >
                  주관식
                </label>
                <input
                  type="radio"
                  value="subjective"
                  id={`subjective${input.id}`}
                  name={`type${input.id}`} // 문제의 ID를 사용하여 name 속성 설정
                  className="form-check-input"
                  checked={input.type === "subjective"}
                  onChange={(e) => handleInputChange(e, input.id, "type")}
                />
              </div>
              <br />
              <label htmlFor="probTitle">문제 제목</label>
              <input
                type="text"
                id="probTitle"
                className="form-control"
                value={input.probTitle}
                onChange={(e) => handleInputChange(e, input.id, "probTitle")}
              />
              <label htmlFor="probExp">문제 설명</label>
              <textarea
                id="probExp"
                className="form-control"
                value={input.probExp}
                onChange={(e) => handleInputChange(e, input.id, "probExp")}
              />
              {input.type === "objective"
                ? renderObjectiveInput(input)
                : renderSubjectiveInput(input)}
              <br />
              <button
                className="btn btn-outline-danger"
                onClick={() => handleRemoveInput(input.id)}
              >
                문제 삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemForm;
