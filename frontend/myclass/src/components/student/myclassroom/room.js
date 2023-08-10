import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomNum } = useParams();

  const [classData, setClassData] = useState({});
  const [memberList, setMemberList] = useState([]);
  const [probList, setProbList] = useState([]);

  const RoomDataReq = async () => {
    const response = await axios.get(
      `http://localhost:8088/myclassroom/${roomNum}`
    );
    console.log(response);
    setClassData(response.data.classData[0]);
    setMemberList(response.data.memberList);
    setProbList(response.data.problemList);
  };

  const solveProblem = (problemId) => {
    window.location.href = `/stu/problemform/${problemId}`;
  };

  useEffect(() => {
    RoomDataReq();
  }, []);

  return (
    <div className="container">
      <div className="row text-center mt-3">
        <h2>{classData.className}</h2>
        <div className="col-3">{/* <p>{classData.className}</p> */}</div>
        {/* <div className="col-3 align-middle">초대 코드: {inviteCode}</div>
        <div className="col-3">
          <button className="btn btn-warning" onClick={editClass}>
            클래스 수정
          </button>
        </div> */}
      </div>
      <hr />
      <div className="row text-center mt-2">
        <h4>문제 리스트</h4>
      </div>
      {probList.map((value, index) => (
        <div className="row d-flex justify-content-center text-center mt-2 p-2 border border-warning rounded align-items-center">
          <div className="col-6" key={index}>
            {value.problemName}
          </div>
          <div className="col-4">
            <button
              className="btn btn-outline-success"
              onClick={() => solveProblem(value.problemId)}
            >
              문제 풀기
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Room;
