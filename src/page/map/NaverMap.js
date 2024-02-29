import { useEffect, useRef } from "react";

const NaverMap = () => {
  const mapElement = useRef(null);
  const { naver } = window;

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.500136, 127.029096);
    const mapOptions = {
      center: location,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        // 줌 컨트롤의 위치를 우측 상단으로 배치함
        position: naver.maps.Position.TOP_LEFT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  });

  return (
    <div>
      <div id="map" style={{ width: "480px", height: "480px" }}></div>
    </div>
  );
};

export default NaverMap;
