import { useState } from "react";
import Home from "./page/home";
import Food from "./page/food";
import Dessert from "./page/dessert";
import Header from "./common/header";
import Login from "./page/login";
import styled from "styled-components";
import Splash from "./page/splash";
// import Location from "./page/location";
// import KakaoMap from "./page/map/kakaoMap";

const App = () => {
  const [tab, setTab] = useState("home");
  // const [searchList, setSearchList] = useState(
  //   ""
  //   //   [
  //   //   // {
  //   //   //   title: "카카오",
  //   //   //   latlng: new kakao.maps.LatLng(33.450705, 126.570677),
  //   //   // },
  //   //   // {
  //   //   //   title: "생태연못",
  //   //   //   latlng: new kakao.maps.LatLng(33.450936, 126.569477),
  //   //   // },
  //   //   // {
  //   //   //   title: "텃밭",
  //   //   //   latlng: new kakao.maps.LatLng(33.450879, 126.56994),
  //   //   // },
  //   //   // {
  //   //   //   title: "근린공원",
  //   //   //   latlng: new kakao.maps.LatLng(33.451393, 126.570738),
  //   //   // },
  //   // ]
  // );

  // const addList = (searchValue) => {
  //   setSearchList((prev) => [...prev, searchValue]);
  //   // 배열을 사용 할 때 이렇게 사용한다
  // };
  // console.log("searchList", searchList);
  const changeTab = (tabState) => {
    if (tabState === "home") {
      return setTab("home");
    } else if (tabState === "location") {
      return setTab("location");
    } else if (tabState === "food") {
      return setTab("food");
    } else if (tabState === "dessert") {
      return setTab("dessert");
    } else if (tabState === "login") {
      return setTab("login");
    } else {
      return setTab("home");
    }
  };

  // return (
  // <div className="App">
  //   <Header changeTab={(tabState) => changeTab(tabState)} tab={tab} />
  //   {tab === "login" && <Login />}
  //   <Width>
  //     <div>
  //       <Map />
  //     </div>
  //     <div>
  //       {tab === "home" && <Home />}
  //       {tab === "location" && <Location />}
  //       {tab === "food" && <Food />}
  //       {tab === "dessert" && <Dessert />}
  //     </div>
  //   </Width>
  // </div>
  // 이건 로그인 창 들어갈 때 아래부분에 지도가 나타남

  const [isStart, setIsStart] = useState(false);

  return (
    <div className="App">
      {isStart ? (
        <div>
          <Header changeTab={(tabState) => changeTab(tabState)} tab={tab} />
          {tab === "login" && <Login />}
          <Width>
            {/* {tab !== "login"  && < 지도 부분 >} 이거는 지도 부분이고 로그인은 또 따로 해야 나타난다  */}
            {/* {tab !== "login" && <KakaoMap />} */}
            <div>
              {tab === "home" && <Home />}
              {/* {tab === "location" && <Location />} */}
              {tab === "food" && <Food />}
              {tab === "dessert" && <Dessert />}
            </div>
          </Width>
        </div>
      ) : (
        <Splash onClick={() => setIsStart((prev) => !prev)} />
      )}
    </div>
  );
};

export default App;

const Width = styled.div`
  max-width: 1000px;
  margin: 150px auto;
  padding: 0 20px;
  /* display: flex; */
  /* justify-content: space-between; */
  gap: 40px;
`;

// 1. 단어 입력
// 2. 아래 빈공간 리스트 주르륵
// 3. 2번과 동시에 마커 생성
// 4.

// https://api.odcloud.kr/api/15048906/v1/uddi:59d9e92b-feea-4d93-84cc-fd07cddd655b?page=1&perPage=10 인천음식점 api
