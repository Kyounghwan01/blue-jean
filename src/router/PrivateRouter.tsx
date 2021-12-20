// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "app/store";

function PrivateRoute({ children }: { children: React.ReactElement }) {
  // const { isLogin } = useSelector((state: RootState) => state.auth);
  // return isLogin ? children : <Navigate to="/" />;
  return children;
}

export default PrivateRoute;
