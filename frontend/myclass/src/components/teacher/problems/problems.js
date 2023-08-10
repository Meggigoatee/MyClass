import React, { useEffect, useState } from "react";
import axios from "axios";

const Problems = () => {
  const newSheet = () => {
    window.location.href = "/tea/problemform";
  };

  const [problem, setProblem] = useState([]);

  const email = localStorage.getItem("email");

  const getProblems = async () => {
    const response = await axios.get(`http://localhost:8088/problems/${email}`);
    let problemList = response.data;
    setProblem(problemList);
  };

  const problemDelete = async (id) => {
    const response = await axios.post(
      `http://localhost:8088/problemdelete/${id}`
    );
    console.log(response);
    getProblems();
  };

  useEffect(() => {
    getProblems();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row text-center mt-3">
          <h2>문제지 관리</h2>
        </div>
        <div className="row">
          <button
            className="col-6 mx-auto btn btn-warning"
            type="button"
            onClick={newSheet}
          >
            새로운 문제지 추가
          </button>
        </div>
        <hr />
        {problem.map((value, index) => (
          <div className="row d-flex justify-content-center">
            <div key={index} className="col-4 d-flex align-items-center">
              {value.problemName}
            </div>
            <div className="col-2">
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  problemDelete(value.problemId);
                }}
                key={index}
              >
                문제지 삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Problems;
