import axios from "axios";
import { useState, useEffect } from "react";

const Teacherclassroom = () => {
  const [myclassroom, setMyclassroom] = useState([]);

  const getClasses = async () => {
    let email = localStorage.getItem("email");
    const response = await axios.post(
      `http://localhost:8080/myclassroom/${email}`,
      { withCredentials: true }
    );
    console.log(response.data);
    let classData = response.data;
    let twoDimensionalArray = []; // 이차원 배열
    let innerArray = []; // 내부 배열

    classData.forEach((value, index) => {
      innerArray.push(value); // 값 추가

      if ((index + 1) % 3 === 0) {
        // 3개의 값을 넣으면
        twoDimensionalArray.push(innerArray); // 이차원 배열에 내부 배열 추가
        innerArray = []; // 내부 배열 초기화
      }
    });

    if (innerArray.length > 0) {
      // 남은 값이 있다면
      twoDimensionalArray.push(innerArray); // 이차원 배열에 추가
    }
    console.log(twoDimensionalArray);
    setMyclassroom(twoDimensionalArray);

    for (let k of myclassroom) {
      console.log(k);
    }
  };

  const newClass = () => {
    window.location.href = "newclass";
  };

  const clickClass = () => {};

  //useEffect
  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div className="container">
      <div className="row text-center mt-3">
        <h2>나의 클래스</h2>
      </div>
      <div className="row">
        <button
          className="col-6 mx-auto btn btn-warning"
          type="button"
          onClick={newClass}
        >
          새로운 클래스 추가
        </button>
      </div>
      <hr />
      <div>
        {myclassroom.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row text-center"
            style={{ height: 180 }}
          >
            {row.map((value, valueIndex) => (
              <div
                key={valueIndex}
                className="col-6 col-md-4 border border-warning rounded"
                onClick={clickClass}
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* <div className="row text-center" style={{ height: 180 }}>
        <div
          className="col-6 col-md-4 border border-warning rounded"
          onClick={clickClass}
        >
          강의박스
        </div>
        <div className="col-6 col-md-4">강의박스</div>
        <div className="col-6 col-md-4">강의박스</div>
      </div> */}
    </div>
  );
};

export default Teacherclassroom;
