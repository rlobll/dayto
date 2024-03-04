import { useState } from "react";
import styled from "styled-components";

const Header = ({ changeTab, tab }) => {
  const tabList = [
    { index: 0, name: "홈", value: "home" },
    { index: 1, name: "지역", value: "location" },
    { index: 2, name: "음식", value: "food" },
    { index: 3, name: "디저트", value: "dessert" },
  ];

  const [isLogin, setIsLogin] = useState(true);

  const toggleTab = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Wrapper>
      <LogoImage src="../logo444.png" alt="" onClick={toggleTab} />
      <Menu>
        {tabList.map((item, index) => {
          return (
            <MenuText
              key={index}
              isCurrent={item.value === tab}
              onClick={() => changeTab(item.value)}
            >
              {item.name}
            </MenuText>
          );
        })}
        {/* <MenuText tab={tab} onClick={() => changeTab("home")}>
          홈
        </MenuText>
        <MenuText tab={tab} onClick={() => changeTab("location")}>
          지역
        </MenuText>
        <MenuText tab={tab} onClick={() => changeTab("food")}>
          음식
        </MenuText>
        <MenuText tab={tab} onClick={() => changeTab("dessert")}>
          디져트
        </MenuText> */}
      </Menu>
      {isLogin ? (
        <MenuText
          isCurrent={tab === "login"}
          onClick={() => changeTab("login")}
        >
          로그인
        </MenuText>
      ) : (
        <LogoutBtn>
          <Hover>김은비</Hover>
          <Hover isCurrent={tab === "logout"} onClick={() => changeTab("home")}>
            로그아웃
          </Hover>
        </LogoutBtn>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto 0;
  padding-right: 20px;
  height: 50px;
  max-width: 1000px;
`;

const LogoImage = styled.img`
  width: 150px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  /* padding-left: 20px; */
`;

const MenuText = styled.div`
  display: flex;
  flex-shrink: 0; // 글씨 변형 막기
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => (props.isCurrent ? "#FF9843" : "black")};
  cursor: pointer;
`;

const LogoutBtn = styled.div`
  display: flex;
  flex-shrink: 0; // 글씨 변형 막기
  font-weight: bold;
  gap: 10px;
  cursor: pointer;
`;

const Hover = styled.div`
  &:hover {
    color: #ff9843;
  }
`;
