import { Container } from "@chakra-ui/react";
import { ClimbingBoxLoader } from "react-spinners";

export const Loading = () => {
  return (
    <Container
      maxW="450px"
      w="100%"
      h="100vh"
      m="0 auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="#f9f9f9"
    >
      <ClimbingBoxLoader color="#ffa825" size={30} />
    </Container>
  );
};
