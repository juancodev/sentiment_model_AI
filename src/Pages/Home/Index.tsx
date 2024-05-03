import { Container } from "@chakra-ui/react";
import { useAuth } from "../../Hooks/useAuth";
import { Header } from "../../Components/Header/Index";

const Home = () => {
  const { userSession } = useAuth();
  console.log(userSession);
  return (
    <>
      <Header />
      <Container maxW={"95%"}>
        <div>Home</div>
      </Container>
    </>
  );
};

export { Home };
