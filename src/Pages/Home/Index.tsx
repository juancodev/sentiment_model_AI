import { Container } from "@chakra-ui/react";
import { useAuth } from "../../Hooks/useAuth";
import { Header } from "../../Components/Header/Index";
import { Upload } from "../../Components/Upload/Index";
import path from "node:path";

const Home = () => {
  const { userSession } = useAuth();
  console.log(userSession);
  console.log(path.dirname("/src/Dataset"));

  return (
    <>
      <Header />
      <Container maxW={"95%"}>
        <div>
          <h1 className="text-5xl text-center my-10">Bienvenido, Usuario 👋🏼</h1>
        </div>
        <Upload />
      </Container>
    </>
  );
};

export { Home };
