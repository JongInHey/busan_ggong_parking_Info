import { Box, Center, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Center>
      <Container
        position={"absolute"}
        top={"10px"}
        zIndex={99}
        maxW={"240px"}
        w={"100%"}
        p={"0 15px"}
        mr={"120px"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box
            fontSize="16px"
            fontWeight={700}
            backdropFilter={"saturate(180%) blur(20px)"}
          >
            <Link to={"/"}>BUSAN_GGONG_PARKING</Link>
          </Box>
        </Flex>
      </Container>
    </Center>
  );
};
