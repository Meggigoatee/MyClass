import React, { useEffect, useState } from "react";
import axios from "axios";

const Problems = () => {

  const newSheet = () => {
    window.location.href = "/tea/problemform";
  };

  const [problem, setProblem] = useState([]);

  const email = localStorage.getItem('email');

  const getProblems = async () => {
    const response = await axios.get(`http://localhost:8080/${email}`);
    let problemList = response.data;
    let temparray = [];

    problemList.forEach(element => {
      temparray.push(element);
    });

    setProblem(temparray);
  }

  const problemDelete = () => {

  }

  useEffect(()=>{
    getProblems();
  },[])

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
        <div className="row">
            {problem.map((value, index) => {
              <div key={index}>
                <span>{value.problemName}</span>
                <button className="btn btn-outline-danger" onClick={problemDelete}>문제지 삭제</button>
              </div>
              
            })}
        </div>
      </div>
    </>
  );
};

export default Problems;
