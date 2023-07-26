import { Link } from "react-router-dom";

const Frontpage = () => {
  return (
    <>
      <div>
        <h3>우리들의 교실에 오신걸 환영합니다</h3>
        <h1>MyClass</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/loginform">로그인</Link>
          </li>
          <li>
            <Link to="/joinselect">회원가입</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Frontpage;
