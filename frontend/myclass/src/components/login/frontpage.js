import { Button } from "react-bootstrap";

const Frontpage = () => {
  return (
    <>
      <div>
        <h3>우리들의 교실에 오신걸 환영합니다</h3>
        <h1>MyClass</h1>
      </div>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
        <Button type="button" className="btn-lg btn-warning">
          로그인
        </Button>
        <Button type="button" className="btn-lg btn-warning">
          회원가입
        </Button>
      </div>
    </>
  );
};

export default Frontpage;
