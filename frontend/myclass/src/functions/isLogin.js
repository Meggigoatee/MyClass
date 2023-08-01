import Cookies from "js-cookie";

const isLogin = () => {
  return !!Cookies.get("cookieeee");
};

export default isLogin;
