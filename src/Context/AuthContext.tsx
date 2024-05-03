import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ChildrenProps } from "../Types";
import { auth } from "../Firebase/firebase.config";

const ContextAuth = createContext(null);

const AuthProvide = ({ children }: ChildrenProps) => {
  const [userSession, setUser] = useState(null);

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const authValue = { userSession };

  return (
    <>
      <ContextAuth.Provider value={authValue}>{children}</ContextAuth.Provider>
    </>
  );
};

export { AuthProvide };
