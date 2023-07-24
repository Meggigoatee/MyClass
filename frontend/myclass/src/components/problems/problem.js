import React, { useState } from "react";
import Prob from "./prob";

const Problem = () => {
  const [probCount, setProbCount] = useState(1);

  const handleAddProb = () => {
    setProbCount((prevCount) => prevCount + 1);
  };

  const handleDeleteProb = (index) => {
    setProbCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div id="problems_create">
        <h2>문제지 만들기</h2>
        <input type="text" placeholder="문제지 제목을 입력하세요"></input>
        <br />
        <textarea placeholder="문제지 설명을 입력하세요"></textarea>
        {[...Array(probCount)].map((_, index) => (
          <div id={`problem_table_${index}`} key={index}>
            <p>문제 {index + 1}</p>
            <Prob></Prob>
            <button onClick={() => handleDeleteProb(index)}>문제 삭제</button>
          </div>
        ))}
        <button onClick={handleAddProb}>새 문제 만들기</button>
      </div>
    </>
  );
};

export default Problem;
