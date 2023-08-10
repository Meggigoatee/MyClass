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
  const [taskList, setTaskList] = useState([]);

  const RoomDataReq = async () => {
    const response = await axios.get(
      `http://localhost:8088/myclassroom/${roomNum}`
    );
    console.log(response);
    setClassData(response.data.classData[0]);
    setMemberList(response.data.memberList);
    setProbList(response.data.problemList);
    setTaskList(response.data.taskList);
  };

  const editClass = async (e) => {
    e.preventDefault();
    window.location.href = `/tea/editclass/${roomNum}`;
  };

  const addProblem = async (e, id) => {
    let problemId = id;
    console.log(problemId);
    const response = await axios.post(
      `http://localhost:8088/addtask/${problemId}?roomNum=${roomNum}`
    );
    console.log(response);
    if (response.status === 200) {
      e.disabled = "true";
      RoomDataReq();
    }
  };

  useEffect(() => {
    RoomDataReq();
  }, []);

  return (
    <div className="container">
      {/* <div
        // className={`vh-100 bg-secondary position-fixed ${
        //   isVisible ? "" : "d-none"
        // }`}
        className="position-fixed "
        style={{ zIndex: 1000 }}
      >
        {taskList.map((value, index) => (
          <div className="row" key={index}>
            <div className="col">{value.problemName}</div>
            <div className="col">
              <button className="btn btn-outline-success">추가</button>
            </div>
          </div>
        ))}
      </div> */}
      <div className="row text-center mt-3">
        <h2>{classData.className}</h2>
        {/* <div className="col-3 align-middle">선생님: {memberList}</div> */}
        <div className="col">
          <button className="btn btn-warning" onClick={editClass}>
            클래스 수정
          </button>
        </div>
      </div>
      <hr />
      <div className="row text-center">
        <div className="col">
          <button
            className="col-6 mx-auto btn btn-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            새로운 문제 추가
          </button>
        </div>
      </div>
      <div className="row text-center mt-2">
        <h4>문제 리스트</h4>
      </div>
      {probList.map((value, index) => (
        <div className="row text-center mt-2">
          <div className="col" key={index}>
            {value.problemName}
          </div>
        </div>
      ))}
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
                새로운 문제지 추가
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {taskList ? taskList.map((value, index) => (
                <div className="row">
                  <div className="col" key={index}>
                    {value.problemName}
                  </div>
                  <div className="col d-flex justify-content-end">
                    <button
                      key={index}
                      className="btn btn-success"
                      disabled={value.classId !== roomNum * 1 ? "" : "true"}
                      onClick={(e) => addProblem(e.target, value.problemId)}
                    >
                      추가
                    </button>
                  </div>
                </div>
              )): '아직 문제지가 없습니다.'}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherRoom;
