import { ReactElement } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { AuthProvide } from "./Context/AuthContext";
import { AuthRouter } from "./Context/AuthRouter";
import { Layout } from "./Layout/Index";
import { Login } from "./Pages/Login/Index";
import { Signup } from "./Pages/Signup/Index";
import { Home } from "./Pages/Home/Index";
import "./App.css";

const AppRoutes = () => {
  const routes: ReactElement | null = useRoutes([
    {
      path: "/",
      element: (
        <>
          <AuthRouter>
            <Layout>
              <Home />
            </Layout>
          </AuthRouter>
        </>
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvide>
          <AppRoutes />
        </AuthProvide>
      </BrowserRouter>
    </>
  );
}

export default App;
