import axios from "axios";
import { useState, useEffect } from "react";

const Myclassroom = () => {
  const [myclassroom, setMyclassroom] = useState({});

  const getClasses = async () => {
    let email = localStorage.getItem("email");
    const response = await axios.post(
      `http://localhost:8080/myclassroom/${email}`,
      { withCredentials: true }
    );
    console.log(response.data);
  };

  //useEffect
  useEffect(() => {
    getClasses();
  }, []);

  return (
    <>
      <div>myclassroom</div>
    </>
  );
};

export default Myclassroom;
