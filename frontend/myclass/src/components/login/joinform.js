const Joinform = () => {
  return (
    <>
      <div className="row bg-light h-100 text-center justify-content-md-center justify-content-center d-flex align-items-center">
        <form>
          <div className="m-auto border border-warning rounded-2 bg-white p-5 col-md-5 ">
            <h2>회원가입</h2>
            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  학생 회원
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  교사 회원
                </label>
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="email"
                className="text-start col-sm-4 col-form-label"
              >
                이메일
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="password"
                className="text-start col-sm-4 col-form-label"
              >
                비밀번호
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="passwordchk"
                className="text-start col-sm-4 col-form-label"
              >
                비밀번호 확인
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="passwordchk"
                  name="passwordchk"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="name"
                className="text-start col-sm-4 col-form-label"
              >
                이름
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="nick"
                className="text-start col-sm-4 col-form-label"
              >
                닉네임
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="nick"
                  name="nick"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-outline-warning">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Joinform;
