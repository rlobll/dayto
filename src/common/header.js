import { useEffect, useState } from "react";
import styled from "styled-components";

const Header = ({ changeTab, tab }) => {
  const tabList = [
    { index: 0, name: "홈", value: "home" },
    // { index: 1, name: "지역", value: "location" },
    { index: 2, name: "음식", value: "food" },
    { index: 3, name: "디저트", value: "dessert" },
  ];

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [localStorage.getItem("nickname")]);

  const toggleTab = () => {
    setIsLogin(!isLogin);
  };

  const [showMyPage, setShowMyPage] = useState(false);

  const handleClick = () => {
    setShowMyPage(!showMyPage); // 클릭할 때마다 상태를 토글합니다.
  };

  // kakao logout
  const Kakao = window.Kakao;

  const initKakao = async () => {
    // 등록된 앱의 JavaScript key
    const jsKey = "bfe1cd9bbf9531087f5f3f9a577db9a3";
    // SDK는 한 번만 초기화해야 한다.
    // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
    if (Kakao && !Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      await Kakao.init(jsKey);
      // SDK 초기화 여부를 확인하자.
      console.log(`kakao 초기화 ${Kakao.isInitialized()}`);
      // console.log("kakao sdk 초기화", Kakao.isInitialized()); 위와 똑같은 거
    }
  };

  const kakaoLogout = async () => {
    await Kakao.Auth.logout((res) => {
      console.log(
        "얘는 로그아웃 누르면 삭제되어서 null이 나온다",
        Kakao.Auth.getAccessToken()
      );
      console.log("이게 뭔데 true가 뜨는거지?삭제 성공했다는건가?", res);
      localStorage.removeItem("nickname");
      setIsLogin(false);
      // 페이지를 새로고침하여 맨 처음으로 이동
      // window.location.reload();
    });
  };

  useEffect(() => {
    initKakao();
    Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
  }, []);

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
            <LogoutBtn>
              <div onClick={handleClick}>
                <Hover>{localStorage.getItem("nickname")}</Hover>
                <div>
                  {showMyPage && (
                    <MyPage>
                      <Hover>마이페이지</Hover>
                    </MyPage>
                  )}
                </div>
              </div>
              <Hover
                // $iscurrent={tab === "logout"}
                onClick={() => {
                  kakaoLogout();
                  changeTab("home");
                }}
                // onClick={kakaoLogout}
              >
                로그아웃
              </Hover>
            </LogoutBtn>
          ) : (
            <MenuText
              $iscurrent={tab === "login"}
              onClick={() => changeTab("login")}
            >
              로그인
            </MenuText>
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
  margin-right: 20px;
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
  gap: 15px;
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
