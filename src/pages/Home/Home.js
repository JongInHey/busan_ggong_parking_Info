import { useEffect, useState } from "react";
import { allParkingInfo, parkingInfo } from "../../api";
import { KakaoMap } from "../../components/KakaoMap";
import { PageTitle } from "../../components/PageTitle";
import { Center, Container, Heading, VStack } from "@chakra-ui/react";

export const Home = () => {
  const [parkData, setParkData] = useState();
  const [parkAllData, setParkAllData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const parkingData = await parkingInfo();
      const parkingAllData = await allParkingInfo();

      const getData = parkingData["response"];
      const getItem = getData.body;
      const { item } = getItem.items;

      const allgetData = parkingAllData[`response`];
      const getAllItem = allgetData.body;
      const { item: allItem } = getAllItem.items;

      setParkData(item);
      setParkAllData(allItem);
      setIsLoading(false);
    })();
  }, []);
  // console.log(parkData);
  // console.log(parkAllData);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <>
          <PageTitle title={"Home"} />
          <Container maxW={450} h={"100vh"} margin="0 auto">
            <KakaoMap />
          </Container>
        </>
      )}
    </>
  );
};
