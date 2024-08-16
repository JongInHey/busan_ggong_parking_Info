import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useCurrentPos } from "../lib/useCurrentPos";

const { kakao } = window;

export const KakaoMap = () => {
  const { lat, lon } = useCurrentPos();

  useEffect(() => {
    if (lat && lon) {
      try {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      } catch (error) {
        console.log(error);
      }
    }
  }, [lat, lon]);

  return <Box id="map" w="100%" h="90%" zIndex={98} />;
};
