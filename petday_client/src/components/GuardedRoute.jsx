import { Navigate } from "react-router-dom";
import { useAppStore } from "../store";

export const GuardedRoute = ({ children }) => {
  const token = useAppStore(state => state.user);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default GuardedRoute;