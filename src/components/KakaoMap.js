import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useCurrentPos } from "../lib/useCurrentPos";

const { kakao } = window;

export const KakaoMap = ({ onMapLoad, parkAllData }) => {
  const { lat, lon } = useCurrentPos();
  const mapRef = useRef(null);

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
        const marker = new kakao.maps.Marker();
        mapRef.current = map;

        const displayMarker = () => {
          marker.setPosition(map.getCenter());
          marker.setMap(map);
          kakao.maps.event.removeListener(map, "tilesloaded", displayMarker);
        };

        kakao.maps.event.addListener(map, "tilesloaded", displayMarker);

        parkAllData.forEach((park) => {
          const markerPosition = new kakao.maps.LatLng(park.xCdnt, park.yCdnt);
          const marker = new kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        });

        if (onMapLoad) {
          onMapLoad(map); // 상위 컴포넌트에 map 객체 전달
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [lat, lon, onMapLoad, parkAllData]);

  return (
    <>
      <Box id="map" w="100%" h="93vh" zIndex={98} />
    </>
  );
};
