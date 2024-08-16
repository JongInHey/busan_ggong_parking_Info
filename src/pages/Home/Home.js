import { useEffect, useState } from "react";
import { allParkingInfo, parkingInfo } from "../../api";
import { KakaoMap } from "../../components/KakaoMap";
import { PageTitle } from "../../components/PageTitle";
import { Container } from "@chakra-ui/react";

export const Home = () => {
  const [parkData, setParkData] = useState();
  const [parkAllData, setParkAllData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const parkingData = await parkingInfo();
      const parkingAllData = await allParkingInfo();

      const getData = parkingData?.response?.body?.items?.item;
      const allgetData = parkingAllData?.response?.body?.items?.item;

      setParkData(getData);
      setParkAllData(allgetData);
      setIsLoading(false);
    })();
  }, []);
  console.log(parkData);
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
