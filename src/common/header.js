import { useState } from "react";
import styled from "styled-components";

const Header = ({ changeTab, tab }) => {
  const tabList = [
    { index: 0, name: "홈", value: "home" },
    // { index: 1, name: "지역", value: "location" },
    { index: 2, name: "음식", value: "food" },
    { index: 3, name: "디저트", value: "dessert" },
  ];

  const [isLogin, setIsLogin] = useState(true);

  const toggleTab = () => {
    setIsLogin(!isLogin);
  };

  const [showMyPage, setShowMyPage] = useState(false);

  const handleClick = () => {
    setShowMyPage(!showMyPage); // 클릭할 때마다 상태를 토글합니다.
  };

  return (
    <Wrapper>
      <LogoImage src="../logo444.png" alt="" onClick={toggleTab} />
      <TotalMenu>
        <Menu>
          {tabList.map((item, index) => {
            return (
              <MenuText
                key={index}
                $iscurrent={item.value === tab}
                onClick={() => changeTab(item.value)}
              >
                {item.name}
              </MenuText>
            );
          })}
          <>
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
          </>
        </Menu>

        <div>
          {isLogin ? (
            <MenuText
              $iscurrent={tab === "login"}
              onClick={() => changeTab("login")}
            >
              로그인
            </MenuText>
          ) : (
            <LogoutBtn>
              <div onClick={handleClick}>
                <Hover>김은비</Hover>
                <div>
                  {showMyPage && (
                    <MyPage>
                      <Hover>마이페이지</Hover>
                    </MyPage>
                  )}
                </div>
              </div>
              <Hover
                $iscurrent={tab === "logout"}
                onClick={() => changeTab("home")}
              >
                로그아웃
              </Hover>
            </LogoutBtn>
          )}
        </div>
      </TotalMenu>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 30px auto 0;

  @media (max-width: 485px) {
    display: block;
    text-align: center;
    padding: 0 20px;
  }
`;

const LogoImage = styled.img`
  width: 150px;
  cursor: pointer;
`;

const TotalMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  gap: 30px;
`;

const MenuText = styled.div`
  flex-shrink: 0; // 글씨 변형 막기
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => (props.$iscurrent ? "#FF9843" : "black")};
  cursor: pointer;
`;

const LogoutBtn = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0; // 글씨 변형 막기
  font-weight: bold;
  text-align: center;
  gap: 30px;
  cursor: pointer;
`;

const Hover = styled.div`
  &:hover {
    color: #ff9843;
  }
`;

const MyPage = styled.div`
  position: absolute;
  margin-top: 10px;
  border: 1px solid #ff9843;
  padding: 10px;
  font-size: 15px;
`;
