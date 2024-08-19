import { useEffect, useState } from "react";
import { allParkingInfo } from "../../api";
import { KakaoMap } from "../../components/KakaoMap";
import { PageTitle } from "../../components/PageTitle";
import { Container } from "@chakra-ui/react";
import { Loading } from "../../components/Loading";

export const Home = ({ onMapLoad }) => {
  const [parkAllData, setParkAllData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const parkingAllData = await allParkingInfo();

        const allgetData = parkingAllData?.response?.body?.items?.item;
        const dataAddUniqueIds = allgetData.map((item, index) => ({
          ...item,
          id: index,
        }));

        setParkAllData(dataAddUniqueIds);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // console.log(parkAllData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"Home"} />
          <Container maxW={450} w="100%" h={"100vh"} margin="0 auto">
            <KakaoMap onMapLoad={onMapLoad} parkAllData={parkAllData} />
          </Container>
        </>
      )}
    </>
  );
};
