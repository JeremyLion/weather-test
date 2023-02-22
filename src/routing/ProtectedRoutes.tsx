import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/types";

const ProtectedRoutes = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
