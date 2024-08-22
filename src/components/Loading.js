import { Container, Text } from "@chakra-ui/react";
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
      flexDirection="column"
      bgColor="#f9f9f9"
    >
      <Text mb={10} fontSize="18px" fontWeight="700">
        위치를 찾고 있는 중입니다 ( •̀ ω •́ )✧
      </Text>
      <ClimbingBoxLoader color="#ffa825" size={15} />
    </Container>
  );
};
