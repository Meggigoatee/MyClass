import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StuProblemForm = () => {
  const { problemId } = useParams();
  const [problem, setProblem] = useState({});
  const [prob, setProb] = useState([]);

  const getProblem = async () => {
    const response = await axios.get(
      `http://localhost:8080/getproblem/${problemId}`
    );
    const problemData = response.data.problem[0];
    const prob = response.data.prob;
    console.log(response);
  };

  useEffect(() => {
    getProblem();
  });
  return <div></div>;
};

export default StuProblemForm;
