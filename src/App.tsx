import { ReactElement } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Login } from "./Pages/Login/Index";
import { Signup } from "./Pages/Signup/Index";
import { Home } from "./Pages/Home/Index";
import "./App.css";

const AppRoutes = () => {
  const routes: ReactElement | null = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
