import {
  Center,
  Container,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdOutlineSearch,
  MdOutlineStarBorder,
  MdOutlineLocationOn,
  MdOutlineHome,
  MdOutlineMenu,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes";
import React from "react";

export const Footer = ({ onPanTo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { pathname } = useLocation();

  const handlePenTo = () => {
    if (pathname === routes.home) {
      onPanTo();
    }
  };

  return (
    <Center>
      <Container
        position={"fixed"}
        bottom={"0"}
        zIndex={99}
        maxW={"450px"}
        w={"100%"}
        h={"9vh"}
        p={"0 15px"}
        backgroundColor={"#fff"}
        borderRadius={"20px 20px 0 0"}
        boxShadow={"0px -2px 10px rgba(0, 0, 0, 0.1)"}
      >
        <Flex alignItems={"center"} justifyContent={"space-evenly"} h={"100%"}>
          <Link to={routes.home}>
            <IconButton
              icon={<MdOutlineHome />}
              variant="ghost"
              boxSize={6}
              fontSize="24px"
              color={"gray.500"}
            />
          </Link>
          <IconButton
            icon={<MdOutlineLocationOn />}
            variant="ghost"
            boxSize={6}
            fontSize="24px"
            color={"gray.500"}
            onClick={handlePenTo}
            cursor={"pointer"}
          />
          <Link to={routes.search}>
            <IconButton
              icon={<MdOutlineSearch />}
              isRound={true}
              boxSize={10}
              fontSize="34px"
              color={"white"}
              bg={"#ffa825"}
              _hover={{ bg: "#ffbf5f" }}
            />
          </Link>
          <IconButton
            icon={<MdOutlineStarBorder />}
            variant="ghost"
            boxSize={6}
            fontSize="24px"
            color={"gray.500"}
            cursor={"pointer"}
          />
          <IconButton
            icon={<MdOutlineMenu />}
            variant="ghost"
            boxSize={6}
            fontSize="24px"
            color={"gray.500"}
            ref={btnRef}
            onClick={onOpen}
            aria-label="Open menu"
            cursor={"pointer"}
          />
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent maxW="450px" margin={0} style={{ width: "80%" }}>
            <DrawerCloseButton />
            <DrawerHeader fontSize={"18px"}>Menu</DrawerHeader>

            <DrawerBody fontSize={"20px"} fontWeight={700}>
              <Box marginBottom={4}>
                <Link to={routes.home} onClick={onClose}>
                  HOME
                </Link>
              </Box>
              <Box>
                <Link to={routes.search} onClick={onClose}>
                  SEARCH
                </Link>
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Exit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Container>
    </Center>
  );
};
