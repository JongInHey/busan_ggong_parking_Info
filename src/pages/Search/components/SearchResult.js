import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Loading } from "../../../components/Loading";
import { Link } from "react-router-dom";

export const SearchResult = ({ searchData, keyData, isLoading }) => {
  return (
    <Box mt={8}>
      <Text fontSize="lg" fontWeight="bold">
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
                    ""
                  ) : (
                    <Text fontSize="14px" mt="5px">
                      부산광역시 {data.jibunAddr}
                    </Text>
                  )}
                  <Text fontSize="15px" fontWeight="medium" mt="10px">
                    {data.tenMin !== "-" ? (
                      <>
                        {data.pkBascTime}분 당 {data.tenMin}원
                      </>
                    ) : (
                      <>
                        {data.pkBascTime}분 당 {data.tenMin}
                      </>
                    )}
                  </Text>
                </Link>
              </Box>
            ))}
          </>
        )}
      </VStack>
    </Box>
  );
};
