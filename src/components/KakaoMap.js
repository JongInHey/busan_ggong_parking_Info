import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useCurrentPos } from "../lib/useCurrentPos";
import { useNavigate } from "react-router-dom";

const { kakao } = window;

export const KakaoMap = ({ onMapLoad, parkAllData }) => {
  const { lat, lon } = useCurrentPos();
  const mapRef = useRef(null);
  const overlaysRef = useRef([]);
  const markersRef = useRef([]);
  const navigate = useNavigate();

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

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
        const mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        const displayMarker = () => {
          marker.setPosition(map.getCenter());
          marker.setMap(map);
          kakao.maps.event.removeListener(map, "tilesloaded", displayMarker);
        };

        kakao.maps.event.addListener(map, "tilesloaded", displayMarker);

        const closeAllOverlays = () => {
          overlaysRef.current.forEach((overlay) => overlay.setMap(null));
        };

        const clearMarkers = () => {
          markersRef.current.forEach((marker) => marker.setMap(null));
          overlaysRef.current.forEach((overlay) => overlay.setMap(null));
          markersRef.current = [];
          overlaysRef.current = [];
        };

        const updateMarkers = () => {
          clearMarkers();

          const bounds = map.getBounds();
          const swLatLng = bounds.getSouthWest(); // 남서쪽 좌표
          const neLatLng = bounds.getNorthEast(); // 북동쪽 좌표

          parkAllData.forEach((park) => {
            const markerPosition = new kakao.maps.LatLng(
              park.xCdnt,
              park.yCdnt
            );

            if (
              markerPosition.getLat() >= swLatLng.getLat() &&
              markerPosition.getLat() <= neLatLng.getLat() &&
              markerPosition.getLng() >= swLatLng.getLng() &&
              markerPosition.getLng() <= neLatLng.getLng()
            ) {
              const marker = new kakao.maps.Marker({
                position: markerPosition,
                clickable: true,
              });

              marker.setMap(map);

              const content = document.createElement("div");
              content.style.padding = "10px";
              content.style.borderRadius = "10px";
              content.style.backgroundColor = "white";
              content.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.1)";
              content.style.boxSizing = "border-box";
              content.style.color = "#222";

              content.innerHTML = `
              <h4 style="margin-bottom: 5px; font-weight: 700;">${park.pkNam}</h4>              
              <ul style="list-style-type: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 5px; font-size: 14px;"><strong>주소 : </strong> <span style="font-weight: 400;">부산광역시 ${park.jibunAddr}<span></li>
                <li style="margin-bottom: 5px; font-size: 14px;"><strong>요금 : </strong><span style="font-weight: 400;">${park.pkBascTime} 분 당 ${park.tenMin}원<span></li>
                <li class="add" style="margin-bottom: 5px; font-size: 14px; font-weight: 700; color: #ffa825; cursor: pointer;">자세히 보기</li>
              </ul>
              <div style="text-align: right; margin-top: 10px;">
                <button style="
                  background: none;
                  border: none;
                  color: #ffa825;
                  cursor: pointer;
                  font-size: 12px;
                " class="close">닫기</button>
              </div>
            `;

              const overlay = new kakao.maps.CustomOverlay({
                content: content,
                position: marker.getPosition(),
                map: null, // 초기에는 숨겨진 상태
              });

              kakao.maps.event.addListener(marker, "click", () => {
                closeAllOverlays();
                overlay.setMap(map);
              });

              content.querySelector(".add").onclick = () => {
                navigate(`/detail/${park.mgntNum}`);
              };

              content.querySelector(".close").onclick = () => {
                overlay.setMap(null);
              };
              overlaysRef.current.push(overlay);
            }
          });
        };

        // 처음 로드할 때 마커 생성
        updateMarkers();

        // 지도의 이동이나 확대/축소가 끝났을 때 마커 업데이트
        kakao.maps.event.addListener(map, "idle", updateMarkers);

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
