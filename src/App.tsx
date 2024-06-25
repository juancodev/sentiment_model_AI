import { ReactElement } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { AuthProvide } from "@/Context/AuthContext";
import { Layout } from "@/Layout/Index";
import { Home } from "@/Pages/Home/Index";
import "./App.css";

const AppRoutes = () => {
  const routes: ReactElement | null = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Layout>
            <Home />
          </Layout>
        </>
      ),
    },
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
