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

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

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
            clickable: true,
          });

          marker.setMap(map);

          const iwContent = `<Box bgColor='#fff' borderRadius='20px'><span>${park.pkNam}</span></Box>`;
          const iwRemoveable = true;

          const infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
          });

          kakao.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
          });
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
