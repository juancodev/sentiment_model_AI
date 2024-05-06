import { useEffect, useRef } from "react";
import { Container } from "@chakra-ui/react";
import Typed from "typed.js";
import { useAuth } from "../../Hooks/useAuth";
import { Header } from "../../Components/Header/Index";
import { Upload } from "../../Components/Upload/Index";

const Home = () => {
  const el = useRef(null);
  const { userSession } = useAuth();
  console.log(userSession);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Este es la primera versión del proyecto donde podrás subir o arrastrar un archivo CSV y podras seleccionar una opción para poder requerir su analisis de sentimiento por cada texto.",
      ],
      typeSpeed: 50,
      cursorChar: "_",
      shuffle: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Container maxW={"95%"}>
        <div>
          <h1 className="text-5xl text-center my-10 font-bold">
            Bienvenido, Usuario 👋🏼
          </h1>
        </div>
        <div className="px-10 py-10">
          <span className="text-2xl font-semibold italic" ref={el} />
        </div>
        <Upload />
      </Container>
    </>
  );
};

export { Home };
