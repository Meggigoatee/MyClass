import { LOG_IN, LOG_OUT } from "./loginAction";

const initialState = {
  isLoggedIn: false,
  user_email: "",
  isTeacher: "", // 'teacher', 'student'
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user_email: action.payload.user_email,
        isTeacher: action.payload.isTeacher,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user_email: "",
        isTeacher: "",
      };
    default:
      return state;
  }
};
