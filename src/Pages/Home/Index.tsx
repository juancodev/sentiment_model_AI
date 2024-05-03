import React from "react";
import { useAuth } from "../../Hooks/useAuth";

const Home = () => {
  const { userSession } = useAuth();
  console.log(userSession);
  return <div>Home</div>;
};

export { Home };
