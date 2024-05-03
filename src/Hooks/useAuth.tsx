import { useContext } from "react";
import { ContextAuth } from "../Context/AuthContext";

export const useAuth = () => {
  const authenticate = useContext(ContextAuth);

  if (!authenticate) {
    throw new Error("There is not auth provider");
  }

  return authenticate;
};
