import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { useState } from "react";
import { allParkingInfo } from "../../api";
import { useForm } from "react-hook-form";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [keyData, setKeyData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    try {
      const parkingAllData = await allParkingInfo();
      const allgetData = parkingAllData?.response?.body?.items?.item;

      const searchResult = allgetData.filter(
        (item) =>
          item.pkNam.includes(keyword) || item.jibunAddr.includes(keyword)
      );

      setSearchData(searchResult);
      setKeyData(keyword);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(searchData);
  const nullKeyword = watch("keyword");

  return (
    <>
      <PageTitle title={"Search"} />
      <Container maxW={"450px"} h={"100vh"} margin={"0 auto"}>
        <Box
          w={"100%"}
          h={"100%"}
          position={"relative"}
          // bgColor={"#f9f9f9"}
          p={5}
          pt={20}
        >
          <form onSubmit={handleSubmit(onSearchResult)}>
            <FormControl>
              <FormLabel fontWeight="bold" mb={2}>
                어디 주차장으로 갈까요?
              </FormLabel>
              <Input
                type="text"
                placeholder="Search"
                _placeholder={{ color: "gray.400" }}
                variant="filled"
                borderRadius={20}
                size="md"
                color={"#222"}
                fontWeight={"bold"}
                {...register("keyword", {
                  required: "주차장 이름 또는 구/군을 검색해보세요!",
                })}
              />
              {errors.keyword && (
                <FormHelperText color="orange.400" mt={3}>
                  {errors.keyword.message}
                </FormHelperText>
              )}

              <Button
                position={"absolute"}
                top={115}
                right="20px"
                colorScheme="orange"
                onClick={handleSubmit(onSearchResult)}
                fontSize={"4xl"}
                borderRadius="full"
              >
                <MdOutlineSearch />
              </Button>
            </FormControl>
          </form>

          {searchData?.length === 0 && nullKeyword && (
            <Box mt={8}>
              <Text color="gray.500">일치하는 검색 결과가 없습니다.</Text>
            </Box>
          )}

          {searchData?.length > 0 && (
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
                        key={data.mgntNum}
                        w="100%"
                        borderRadius="20px"
                        p={4}
                        mt={5}
                        lineHeight="23px"
                        bgColor={"#f9f9f9"}
                      >
                        <Link to={`/detail/${data.mgntNum}`}>
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
                            {data.pkBascTime}분 당 {data.tenMin}원
                          </Text>
                        </Link>
                      </Box>
                    ))}
                  </>
                )}
              </VStack>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};
