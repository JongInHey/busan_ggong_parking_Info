import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Center position={"relative"}>
      <Container
        position={"absolute"}
        top={"10px"}
        zIndex={99}
        maxW={"450px"}
        w={"100%"}
        p={"0 20px"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box fontSize="18px" fontWeight={700}>
            <Link to={"/"}>BUSAN_GGONG_PARKING</Link>
          </Box>
          <Box>
            <Button
              ref={btnRef}
              colorScheme="blackAlpha"
              onClick={onOpen}
              borderRadius={50}
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent maxW="450px" margin={0} style={{ width: "80%" }}>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody fontSize={"20px"} fontWeight={700}>
                  <Box marginBottom={4}>
                    <Link to={routes.home}>HOME</Link>
                  </Box>
                  <Box>
                    <Link to={routes.search}>SEARCH</Link>
                  </Box>
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Exit
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        </Flex>
      </Container>
    </Center>
  );
};
