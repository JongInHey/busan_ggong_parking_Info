import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const { kakao } = window;

export const Map = ({ findData }) => {
  useEffect(() => {
    (async () => {
      try {
        if (findData && findData.xCdnt !== "-" && findData.yCdnt !== "-") {
          const lat = findData.xCdnt;
          const lon = findData.yCdnt;

          const container = document.getElementById("map");
          if (container) {
            const options = {
              center: new kakao.maps.LatLng(lat, lon),
              level: 3,
            };
            const map = new kakao.maps.Map(container, options);
            const markerPosition = new kakao.maps.LatLng(lat, lon);
            const marker = new kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [findData]);
  return <Box id="map" w="100%" height="500px" mt={10} />;
};
