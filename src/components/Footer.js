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
  useDisclosure,
  Image,
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
import { AiOutlineCar } from "react-icons/ai";

export const Footer = ({ onPanTo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { pathname } = useLocation();

  const handlePenTo = () => {
    if (pathname === routes.home) {
      onPanTo();
    }
  };
  const imgurl =
    "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.lfmall.co.kr%2Ffile%2FWAS%2Fdisplay%2FPlanning%2F70703%2Fw_1_240101.jpg&type=sc960_832";

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
              boxSize={8}
              fontSize="26px"
              color={"white"}
              bg={"#ffa825"}
              _hover={{ bg: "#ffbf5f" }}
            />
          </Link>
          <Link to={routes.favor}>
            <IconButton
              icon={<MdOutlineStarBorder />}
              variant="ghost"
              boxSize={6}
              fontSize="24px"
              color={"gray.500"}
              cursor={"pointer"}
            />
          </Link>
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
            <DrawerCloseButton top={6} right={7} />
            <DrawerHeader fontSize={"70px"}>
              <AiOutlineCar />
            </DrawerHeader>

            <DrawerBody
              fontSize={"20px"}
              fontWeight={700}
              pt={10}
              pr={0}
              pl={0}
            >
              <Box ml="24px">
                <Link to={routes.home} onClick={onClose}>
                  HOME
                </Link>
              </Box>
              <Box m="24px 0" ml="24px">
                <Link to={routes.search} onClick={onClose}>
                  SEARCH
                </Link>
              </Box>
              <Box ml="24px">
                <Link to={routes.favor} onClick={onClose}>
                  MY PARKING
                </Link>
              </Box>
              <Box w="100%" h="250px" mt="40px">
                <Image
                  src={imgurl}
                  alt="친구초대 이벤트"
                  h="100%"
                  objectFit="cover"
                ></Image>
              </Box>
            </DrawerBody>

            <DrawerFooter
              justifyContent="center"
              fontSize={"14px"}
              bgColor="#f7f7f7"
            >
              &copy; 2024․ JongInHey.
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Container>
    </Center>
  );
};
