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
      `http://localhost:8080/myclassroom/${roomNum}`
    );
    console.log(response);
    setClassData(response.data.classData[0]);
    setMemberList(response.data.memberList);
    setProbList(response.data.problemList);
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
      <div className="row text-center">
        <div className="col">
          <p>문제 리스트</p>
          <ul>
            {probList.map((value, index) => {
              <li key={index}>{value.problemName}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Room;
