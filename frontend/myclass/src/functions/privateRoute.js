import { Route } from "react-router-dom";
import isLogin from "./isLogin";
import Frontpage from "../components/login/frontpage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...props} />
        ) : (
          <Route path="frontpage" element={<Frontpage />} />
        )
      }
    />
  );
}

export default PrivateRoute;
