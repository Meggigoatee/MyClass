import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import base64, { encode } from "base-64";

const TeacherRoom = () => {

    const {roomNum} = useParams()

    const inviteCode = base64.encode(`room/${roomNum}`)

    const {taskList, setTaskList} = useState({})

    const RoomDataReq = async () => {
        const response = await axios.get(`http://localhost:8080/getRoomData/${roomNum}`)
        let classData = response.data.classData;
        let classMember = response.data.classMember;

        
    }

    const deleteClass = (e) =>{
        e.preventDefault();
        window.confirm("클래스와 일정이 삭제됩니다. 계속하시겠습니까?");
        if(result){
            window.alert("클래스가 삭제되었습니다.");
            window.location.href ="tea/myclassroom";
        }else{
            window.alert("취소 되었습니다.");
        }
    }

    useEffect(() => {
      RoomDataReq()
    }, [])
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <p>{classData.name}</p>
                </div>
                <div className="col-3">
                    <p>{inviteCode}</p>
                </div>
                <div className="col-3">
                    <button className="button button-danger" onClick={deleteClass}>
                        클래스 삭제
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TeacherRoom;