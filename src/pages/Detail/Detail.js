import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { allParkingInfo } from "../../api";
import { Loading } from "../../components/Loading";
import { useParams } from "react-router-dom";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Map } from "./components/Map";
import { DetailInfo } from "./components/DetailInfo";

export const Detail = () => {
  const [detailData, setDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
        setDetailData(findData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  // console.log(detailData);
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
              p={5}
              pt={20}
            >
              <Box
                w="100%"
                borderRadius="20px"
                p={4}
                lineHeight="23px"
                bgColor={"#f9f9f9"}
              >
                <Heading fontWeight="bold" fontSize="18px">
                  {detailData.pkNam}
                </Heading>

                {detailData.jibunAddr === "-" || detailData.jibunAddr === "" ? (
                  <Text fontSize="14px" mt="5px">
                    부산광역시 {detailData.doroAddr}
                  </Text>
                ) : (
                  <Text fontSize="14px" mt="5px">
                    부산광역시 {detailData.jibunAddr}
                  </Text>
                )}
              </Box>
              <Box
                w="100%"
                borderRadius="20px"
                p={4}
                pb="90px"
                mt={5}
                lineHeight="23px"
                bgColor={"#f9f9f9"}
              >
                <DetailInfo detailData={detailData} />

                {detailData.xCdnt !== "-" && detailData.yCdnt !== "-" && (
                  <Map findData={detailData} />
                )}
              </Box>
            </Box>
          </Container>
        </>
      )}
    </>
  );
};
