import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import "./kakaoMap.css";

const { kakao } = window;

const KakaoMap = ({ searchPlace }) => {
  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([]);
  console.log("Places", Places);

  useEffect(() => {
    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    // 지도 표시 할 div
    const container = document.getElementById("map");
    const options = {
      // 지도 중심 좌표
      center: new kakao.maps.LatLng(37.475444, 126.632638),
      // 지도 확대 레벨
      level: 4,
    };

    // 지도 생성
    const map = new kakao.maps.Map(container, options);

    // 줌 컨트롤을 생성하여 지도에 추가합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    // ps.keywordSearch("동인천 음식점", placesSearchCB);
    // ps.keywordSearch(searchPlace, placesSearchCB);
    // 이걸 사용하면 검색창이 빈값인데 카워드를 호출해서 400 에러가 나타남 그래서 아래 조건문으로 변경

    // 키워드가 비어있지 않은 경우에만 검색을 수행합니다.
    if (searchPlace.trim() !== "") {
      ps.keywordSearch(searchPlace, placesSearchCB);
    }

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlaces(data);
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);

  return (
    <MapDisplay>
      <div>
        <MapBorder id="map" style={{ width: "480px", height: "480px" }} />
      </div>
      <ListBorder>
        <List id="result-list">
          {Places.map((item, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <ListTitle>
                <span>{i + 1}. </span>
                <span>{item.place_name}</span>
              </ListTitle>
              <div>
                {item.road_address_name ? (
                  <div>
                    <span>{item.road_address_name}</span>
                    <span>{item.address_name}</span>
                  </div>
                ) : (
                  <span>{item.address_name}</span>
                )}
                <span>{item.phone}</span>
              </div>
            </div>
          ))}
        </List>
        <Pagination id="pagination" />
      </ListBorder>
    </MapDisplay>
  );
};

export default KakaoMap;

const MapDisplay = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const MapBorder = styled.div`
  border: 1px solid #ff9843;
  border-radius: 10px;
`;

const ListBorder = styled.div`
  border: 1px solid #ff9843;
  border-radius: 10px;
`;
const List = styled.div`
  width: 480px;
  height: 420px;
  overflow: scroll;
  padding: 10px;
  font-size: 18px;
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */
`;

const ListTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Pagination = styled.div`
  font-size: 17px;
  margin: 10px;
`;
