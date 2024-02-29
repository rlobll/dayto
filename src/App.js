import { useState } from "react";
import Home from "./page/home";
import Location from "./page/location";
import Food from "./page/food";
import Dessert from "./page/dessert";
import Header from "./common/header";
import Login from "./page/login";
import styled from "styled-components";
import KakaoMap from "./page/map/kakaoMap";

const App = () => {
  const [tab, setTab] = useState("home");

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

  return (
    <div className="App">
      <Header changeTab={(tabState) => changeTab(tabState)} tab={tab} />
      {tab === "login" && <Login />}
      <Width>
        {/* {tab !== "login"  && < 지도 부분 >} 이거는 지도 부분이고 로그인은 또 따로 해야 나타난다 */}
        {tab !== "login" && <KakaoMap />}
        <div>
          {tab === "home" && <Home />}
          {tab === "location" && <Location />}
          {tab === "food" && <Food />}
          {tab === "dessert" && <Dessert />}
        </div>
      </Width>
    </div>
  );
};

export default App;

const Width = styled.div`
  max-width: 1000px;
  margin: 150px auto;
  padding: 0 20px;
  display: flex;
  /* justify-content: space-between; */
  gap: 40px;
`;
