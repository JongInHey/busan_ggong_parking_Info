import { Box, Center, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Center position={"relative"}>
      <Container
        position={"absolute"}
        top={"10px"}
        zIndex={99}
        maxW={"450px"}
        w={"100%"}
        p={"0 15px"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box fontSize="18px" fontWeight={700}>
            <Link to={"/"}>BUSAN_GGONG_PARKING</Link>
          </Box>
        </Flex>
      </Container>
    </Center>
  );
};
