import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Loading } from "../../../components/Loading";
import { Link } from "react-router-dom";

export const SearchResult = ({ searchData, keyData, isLoading }) => {
  return (
    <Box mt={8} wordBreak="keep-all">
      <Text fontSize="15px" fontWeight="light" opacity="0.7">
        {keyData} 검색 결과 입니다!
      </Text>

      <VStack gap={6} pb="90px">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {searchData.map((data) => (
              <Box
                key={data.id}
                w="100%"
                borderRadius="20px"
                p={4}
                mt={5}
                lineHeight="23px"
                bgColor={"#f9f9f9"}
              >
                <Link to={`/detail/${data.id}`}>
                  <Heading fontWeight="bold" fontSize="18px">
                    {data.pkNam}
                  </Heading>

                  {data.jibunAddr === "-" || data.jibunAddr === "" ? (
                    <Text fontSize="14px" mt="5px">
                      부산광역시 {data.doroAddr}
                    </Text>
                  ) : (
                    <Text fontSize="14px" mt="5px">
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
            ))}
          </>
        )}
      </VStack>
    </Box>
  );
};
