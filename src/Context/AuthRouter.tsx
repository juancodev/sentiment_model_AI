import { useAuth } from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { childrenProps } from "../Types";

export const AuthRouter = ({ children }: childrenProps) => {
  const { userSession } = useAuth();

  if (!userSession) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return <>{children}</>;
};
