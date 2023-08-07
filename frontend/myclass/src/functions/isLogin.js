import Cookies from "js-cookie";

const isLogin = () => {
  return !!Cookies.get("JSESSIONID");
};

export default isLogin;
