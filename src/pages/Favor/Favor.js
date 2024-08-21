import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

export const Favor = () => {
  const [favorData, setFavorData] = useState([]);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("favor")) || [];
    setFavorData(storageData);
  }, []);

  return (
    <Container maxW={"450px"} h={"100vh"} margin={"0 auto"}>
      <Box
        w={"100%"}
        h={"100%"}
        position={"relative"}
        bgColor={"#fdfdfd"}
        p={5}
        pt={20}
      >
        <Heading fontSize="lg" fontWeight="bold" mb={2}>
          자주 다니는 주차장
        </Heading>

        {favorData.length !== 0 ? (
          <Box mt={8}>
            <VStack gap={6} pb="90px">
              {favorData.map((data) => {
                const isOnStar = favorData.some((item) => item.id === data.id);
                return (
                  <Box
                    key={data.id}
                    w="100%"
                    borderRadius="20px"
                    p={4}
                    lineHeight="23px"
                    bgColor={"#f9f9f9"}
                    boxShadow="0 2px 6px rgba(0,0,0,0.1)"
                  >
                    <Link to={`/detail/${data.id}`}>
                      <Flex justifyContent="space-between" alignItems="center">
                        <Heading fontWeight="bold" fontSize="18px">
                          {data.pkNam}
                        </Heading>
                        {isOnStar ? (
                          <MdOutlineStar
                            fontSize="28px"
                            color="#ffa825"
                            cursor="pointer"
                          />
                        ) : (
                          <MdOutlineStarBorder
                            fontSize="28px"
                            color="#ffa825"
                            cursor="pointer"
                          />
                        )}
                      </Flex>

                      {data.jibunAddr === "-" || data.jibunAddr === "" ? (
                        <Text fontSize="14px" mt="5px" wordBreak="keep-all">
                          부산광역시 {data.doroAddr}
                        </Text>
                      ) : (
                        <Text fontSize="14px" mt="5px" wordBreak="keep-all">
                          부산광역시 {data.jibunAddr}
                        </Text>
                      )}

                      {data.tenMin !== "-" ? (
                        <>
                          <Box
                            bgColor="#ffa825"
                            color="#fff"
                            w={28}
                            p={1}
                            mt="10px"
                            textAlign="center"
                            borderRadius={20}
                          >
                            <Text
                              fontSize="15px"
                              fontWeight="semibold"
                              fontFamily="Noto Sans KR, sans-serif"
                            >
                              {data.pkBascTime}분 당 {data.tenMin}원
                            </Text>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Box
                            bgColor="#ffa825"
                            color="#fff"
                            w={28}
                            p={1}
                            mt="10px"
                            textAlign="center"
                            borderRadius={20}
                          >
                            <Text
                              fontSize="15px"
                              fontWeight="semibold"
                              fontFamily="Noto Sans KR, sans-serif"
                            >
                              {data.pkBascTime}분 당 {data.tenMin}
                            </Text>
                          </Box>
                        </>
                      )}
                    </Link>
                  </Box>
                );
              })}
            </VStack>
          </Box>
        ) : (
          <Box fontSize="18px" mt={10} fontWeight="200">
            즐겨찾기한 기록이 없네요!
            <Link to={routes.search}>
              <Text color="#ffa825" mt={1} fontWeight="600">
                찾으러 가볼까요?
              </Text>
            </Link>
          </Box>
        )}
      </Box>
    </Container>
  );
};
