import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StuProblemForm = () => {
  const { problemId } = useParams();
  const [problem, setProblem] = useState({});
  const [prob, setProb] = useState([]);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const [inputs, setInputs] = useState([{
    probId: 0,
    mmm: "",
    sss: "",
  }]);

  const getProblem = async () => {
    const response = await axios.get(
      `http://localhost:8088/getproblem/${problemId}`
    );
    const problemData = response.data.problem[0];
    const probData = response.data.prob;
    console.log(probData);
    setProblem(problemData);
    setProb(probData);
    const initialInputs = probData.map((value, index) => ({
      probId: value.probId,
      mmm: "",
      sss: "",
    }));
    
    setInputs(initialInputs);
  };

  const handleRadioChange = (e, id) => {
    setInputs(
      inputs.map((input) =>
        input.probId === id ? { ...input, mmm: e.target.value * 1 + 1 } : input
      )
    );
  };
  
  const handleAnswerChange = (e, id) => {
    setInputs(
      inputs.map((input) =>
        input.probId === id ? { ...input, sss: e.target.value } : input
      )
    );
  };

  const calculate = async () => {
    let score = 0;
    console.log(inputs);
    prob.forEach((problem, index) => {
      const userAnswer = inputs.find((input) => input.probId === problem.probId); // input.id 대신 input.probId로 변경
      if (problem.type === "objective" && userAnswer.mmm === problem.mmm) {
        score += 1;
      } else if (problem.type !== "objective" && userAnswer.sss === problem.sss) {
        score += 1;
      }
    });
    const totalPoints = inputs.length;
    console.log(`획득한 점수: ${score} / 만점: ${totalPoints}`);
    setScore(score);
    setTotalScore(totalPoints);
  };

  useEffect(() => {
    getProblem();
  },[]);


  return (
  <div className="container">
    <div className="row mt-2">
      <div className="col text-center">
        <h2>{problem.problemName}</h2>
      </div>
    </div>
    {prob.map((value, index) => (
      <div className="row mt-2" key={index}>
        <div className="col-8 mx-auto border border-warning p-3">
          <p>{index + 1}번 문제</p>
          <p>{value.probTitle}</p>
          <p>{value.probExp}</p>
          {value.type === "objective" ? (
            Array.from({ length: 5 }, (_, index) => (
              <div className="form-check form-check-inline" key={index}>
                <label
                  className="form-check-label"
                  htmlFor={`answer${value.probId}${index}`}
                >
                  {value[`cho${index+1}`]}
                </label>
                <input
                  type="radio"
                  name={`answer${value.probId}`}
                  value={index}
                  id={`answer${value.probId}${index}`}
                  className="form-check-input"
                  onChange={(e) => handleRadioChange(e, value.probId)}
                />
              </div>
            ))
          ) : (
            <>
              <label htmlFor={`answer${value.probId}`}>정답</label>
              <input
                type="text"
                id={`answer${value.probId}`}
                className="form-control"
                onChange={(e) => handleAnswerChange(e, value.probId)}
              />
            </>
          )}
        </div>
      </div>
    ))}
    <div className="row mt-2">
      <div className="col text-center">
        <button 
          className="btn btn-outline-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={calculate}>체점하기</button>
      </div>
    </div>
    <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                점수확인
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <span>당신의 점수는 {score}/{totalScore}점 입니다.</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={()=>(window.location.reload())}
              >
                다시풀기
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={()=>(window.history.back())}
              > 
                돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
};

export default StuProblemForm;
