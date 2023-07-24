const Loginform = () => {
  function Loginsubmit() {}

  return (
    <>
      <div>
        <h3>로그인</h3>
        <form>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="이메일"
          ></input>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
          ></input>
          <br />
          <button type="button" onClick={Loginsubmit()}>
            로그인
          </button>
        </form>
      </div>
    </>
  );
};

export default Loginform;
