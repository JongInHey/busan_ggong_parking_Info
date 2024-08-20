import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { useState } from "react";
import { allParkingInfo } from "../../api";
import { useForm } from "react-hook-form";
import { MdOutlineSearch } from "react-icons/md";
import { SearchResult } from "./components/SearchResult";

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
      const dataAddUniqueIds = allgetData.map((item, index) => ({
        ...item,
        id: index,
      }));

      const searchResult = dataAddUniqueIds.filter(
        (item) =>
          item.pkNam.includes(keyword) ||
          item.jibunAddr.includes(keyword) ||
          item.doroAddr.includes(keyword)
      );

      setSearchData(searchResult);
      setKeyData(keyword);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const nullKeyword = watch("keyword");
  // console.log(searchData);

  return (
    <>
      <PageTitle title={"Search"} />
      <Container maxW={"450px"} h={"100vh"} margin={"0 auto"}>
        <Box
          w={"100%"}
          h={"100%"}
          position={"relative"}
          bgColor={"#fdfdfd"}
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
                opacity={0.8}
              >
                <MdOutlineSearch />
              </Button>
            </FormControl>
          </form>

          {searchData?.length === 0 && nullKeyword && (
            <Box mt={8}>
              <Text color="gray.400">일치하는 검색 결과가 없습니다.</Text>
            </Box>
          )}

          {searchData?.length > 0 && (
            <SearchResult
              searchData={searchData}
              keyData={keyData}
              isLoading={isLoading}
            />
          )}
        </Box>
      </Container>
    </>
  );
};
