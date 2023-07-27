const Joinselect = () => {
  return (
    <>
      <div className="container-md bg-light h-100 text-center justify-content-center d-flex align-items-center">
        <div>
          <h3 className="mt-5">가입하려는 회원 종류를 선택해주세요</h3>
          <button className="btn btn-outline-success btn-lg m-3">
            학생 회원가입
          </button>
          <button className="btn btn-outline-warning btn-lg m-3">
            교사 회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Joinselect;
