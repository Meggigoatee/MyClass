import axios from "axios";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

// export const logIn = (user_email, isTeacher) => ({
//   type: LOG_IN,
//   payload: {
//     user_email,
//     isTeacher,
//   },
// });

export const logIn = (email, isTeacher) => async (dispatch) => {
  try {
    // 비동기 요청 처리
    const response = await axios.post(
      `http://localhost:8080/chkisteacher/${email}`
    );
    isTeacher = response.data;

    // 상태 변경
    dispatch({
      type: LOG_IN,
      payload: {
        email,
        isTeacher,
      },
    });

    // 페이지 리디렉트
    window.location.href = "/stu";
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logOut = () => ({ type: LOG_OUT });
