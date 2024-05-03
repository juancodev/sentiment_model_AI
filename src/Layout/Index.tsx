import { ChakraProvider } from "@chakra-ui/react";
import { childrenProps } from "../Types";

const Layout = ({ children }: childrenProps) => {
  return (
    <>
      <ChakraProvider>{children}</ChakraProvider>
    </>
  );
};

export { Layout };
