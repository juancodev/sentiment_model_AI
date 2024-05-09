import { createContext, useState, useEffect } from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { childrenProps, authValuesProps } from "@/Types";
import { auth } from "@/Firebase/firebase.config";
import { useNavigate } from "react-router-dom";

export const ContextAuth = createContext<authValuesProps>({
  userSession: null,
  logout: () => null,
  setUserSession: () => null,
});

export const AuthProvide = ({ children }: childrenProps) => {
  const [userSession, setUserSession] = useState<User | null>(null);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate("/login");
  };

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserSession(user);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const authValue = { userSession, logout, setUserSession };

  return (
    <>
      <ContextAuth.Provider value={authValue}>{children}</ContextAuth.Provider>
    </>
  );
};
