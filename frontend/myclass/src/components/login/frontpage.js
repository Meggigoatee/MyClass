const Frontpage = () => {
  return (
    <>
      <div className="container-md bg-light h-100 text-center justify-content-center d-flex align-items-center">
        <div className="border border-warning rounded-2 bg-white p-5">
          <h3 className="m-3">우리들의 교실에 오신걸 환영합니다</h3>
          <h1>MyClass</h1>
          <button
            className="btn btn-outline-success btn-lg m-3"
            onClick={() => {
              window.location.href = "/loginform";
            }}
          >
            로그인
          </button>
          <button
            className="btn btn-outline-warning btn-lg m-3"
            onClick={() => {
              window.location.href = "/joinform";
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Frontpage;
