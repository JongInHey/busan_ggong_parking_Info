import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { allParkingInfo } from "../../api";
import { Loading } from "../../components/Loading";
import { useParams } from "react-router-dom";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Map } from "./components/Map";
import { DetailInfo } from "./components/DetailInfo";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

export const Detail = () => {
  const [detailData, setDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOnStar, setIsOnStar] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const parkingAllData = await allParkingInfo();
        const allgetData = parkingAllData?.response?.body?.items?.item;
        const dataAddUniqueIds = allgetData.map((item, index) => ({
          ...item,
          id: index,
        }));

        const findData = dataAddUniqueIds.find(
          (item) => item.id === Number(id)
        );

        const storagedData = JSON.parse(localStorage.getItem("favor")) || [];
        const isOnOff = storagedData.some((item) => item.id === detailData.id);

        setDetailData(findData);
        setIsOnStar(isOnOff);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id, detailData.id]);

  const handleFavor = () => {
    const favorData = JSON.parse(localStorage.getItem("favor")) || [];

    const isAlreadyData = favorData.some((item) => item.id === detailData.id);

    if (!isAlreadyData) {
      const addFavorData = [...favorData, detailData];

      localStorage.setItem("favor", JSON.stringify(addFavorData));
      setIsOnStar(true);
    }
  };
  const handleCancel = () => {
    const favorData = JSON.parse(localStorage.getItem("favor")) || [];

    const updateCancelData = favorData.filter(
      (item) => item.id !== detailData.id
    );

    localStorage.setItem("favor", JSON.stringify(updateCancelData));
    setIsOnStar(false);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"Detail"} />
          <Container maxW={"450px"} h={"100vh"} margin={"0 auto"}>
            <Box
              w={"100%"}
              h={"100%"}
              position={"relative"}
              bgColor={"#fdfdfd"}
              pt={20}
            >
              <Box
                w="100%"
                borderRadius="20px"
                p={4}
                lineHeight="23px"
                bgColor={"#f9f9f9"}
                boxShadow="0 2px 6px rgba(0,0,0,0.1)"
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Heading fontWeight="bold" fontSize="18px">
                    {detailData.pkNam}
                  </Heading>
                  {isOnStar ? (
                    <MdOutlineStar
                      fontSize="28px"
                      color="#ffa825"
                      cursor="pointer"
                      onClick={handleCancel}
                    />
                  ) : (
                    <MdOutlineStarBorder
                      fontSize="28px"
                      color="#ffa825"
                      cursor="pointer"
                      onClick={handleFavor}
                    />
                  )}
                </Flex>

                {detailData.jibunAddr === "-" || detailData.jibunAddr === "" ? (
                  <Text fontSize="14px" mt="5px" wordBreak="keep-all">
                    부산광역시 {detailData.doroAddr}
                  </Text>
                ) : (
                  <Text fontSize="14px" mt="5px" wordBreak="keep-all">
                    부산광역시 {detailData.jibunAddr}
                  </Text>
                )}
              </Box>

              <DetailInfo detailData={detailData} />

              {detailData.xCdnt !== "-" && detailData.yCdnt !== "-" && (
                <Box
                  w="100%"
                  pb="120px"
                  mt={5}
                  fontFamily="Noto Sans KR, sans-serif"
                >
                  <Box
                    w="90px"
                    mt={5}
                    p={2}
                    ml={5}
                    mb={4}
                    textAlign="center"
                    borderRadius="20px"
                    bgColor="#ffa825"
                    fontSize="18px"
                    fontWeight="bold"
                    border="1px solid #ffa222"
                    color="#fff"
                  >
                    위치정보
                  </Box>
                  <Map findData={detailData} />
                </Box>
              )}
            </Box>
          </Container>
        </>
      )}
    </>
  );
};
