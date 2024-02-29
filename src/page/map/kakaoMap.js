import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도 표시 할 div
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
      level: 3, // 지도 확대 레벨
    };

    const map = new kakao.maps.Map(container, options); // 지도 생성

    // 줌 컨트롤을 생성하여 지도에 추가합니다
    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.BOTTOMRIGHT);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "480px", height: "480px" }} />
    </div>
  );
};

export default KakaoMap;
