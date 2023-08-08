import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import base64 from "base-64";

const TeacherRoom = () => {
  const { roomNum } = useParams();

  const inviteCode = base64.encode(`room/${roomNum}`);

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

  const editClass = async (e) => {
    e.preventDefault();
    window.location.href = `/tea/editclass/${roomNum}`;
    // if (window.confirm("클래스와 일정이 삭제됩니다. 계속하시겠습니까?")) {
    //   await axios.post(`http://localhost:8080/deleteclass/${roomNum}`);
    //   window.alert("클래스가 삭제되었습니다.");
    //   window.location.href = "/tea/myclassroom";
    // } else {
    //   window.alert("취소 되었습니다.");
    // }
  };

  const newProblem = () => {};

  useEffect(() => {
    RoomDataReq();
  }, []);

  return (
    <div className="container">
      <div className="row text-center mt-3">
        <h2>{classData.className}</h2>
        <div className="col-3">{/* <p>{classData.className}</p> */}</div>
        <div className="col-3 align-middle">초대 코드: {inviteCode}</div>
        <div className="col-3">
          <button className="btn btn-warning" onClick={editClass}>
            클래스 수정
          </button>
        </div>
      </div>
      <hr />
      <div className="row text-center">
        <div className="col">
          <p>문제 리스트</p>
          <button
            className="col-6 mx-auto btn btn-warning"
            type="button"
            onClick={() => newProblem()}
          >
            새로운 문제 추가
          </button>
          <ul>
            {probList.map((value, index) => {
              <li key={index}>{value.problemName}</li>;
            })}
          </ul>
        </div>
        {/* <div className="col-3 ">
            <ul>
            {memberList.map((value, index) => {
                <li>{value.}</li>
            })}
            </ul>
        </div> */}
      </div>
    </div>
  );
};

export default TeacherRoom;
