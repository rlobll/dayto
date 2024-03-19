import React, { useEffect, useState } from "react";
import styled from "styled-components";

const KakaoLogin = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

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

  const kakaoLogin = async () => {
    await Kakao.Auth.login({
      success(res) {
        console.log(res);
        Kakao.Auth.setAccessToken(res.access_token);
        console.log("카카오 로그인 성공");

        Kakao.API.request({
          url: "/v2/user/me",
          success(res) {
            console.log("카카오 인가 요청 성공");
            setIsLogin(true);
            localStorage.setItem("nickname", "은비");
            // 사용자 정보 설정
            setUser({
              nickname: localStorage.getItem("nickname"),
            });
            // 페이지 리로드
            window.location.reload();
          },
          fail(error) {
            console.log(error);
          },
        });
      },
      fail(error) {
        console.log(error);
      },
    });
  };

  // header로 이동
  // const kakaoLogout = () => {
  //   Kakao.Auth.logout((res) => {
  //     console.log(
  //       "얘는 로그아웃 누르면 삭제되어서 null이 나온다",
  //       Kakao.Auth.getAccessToken()
  //     );
  //     console.log("이게 뭔데 true가 뜨는거지?삭제 성공했다는건가?", res);
  //     localStorage.removeItem("nickname");
  //     setUser(null);
  //   });
  // };

  useEffect(() => {
    initKakao();
    Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
  }, []);

  useEffect(() => {
    console.log("로그인해서 나타나는거", isLogin);
    if (isLogin) {
      setUser({
        nickname: localStorage.getItem("nickname"),
      });
    }
  }, [isLogin]);

  // useEffect(() => {
  //   // isLogin 상태가 변경될 때마다 실행됩니다.
  //   // isLogin 값이 true이면 홈 페이지로 이동합니다.
  //   if (isLogin) {
  //     window.location.href = "/home"; // 홈 페이지로 이동
  //   }
  // }, [isLogin]);

  return (
    <>
      <div>
        <KakaoLoginBtn
          // onClick={kakaoClick}
          onClick={() => {
            kakaoLogin();
          }}
        >
          카카오 로그인
        </KakaoLoginBtn>

        {/* {user ? (
          <div>
            <button onClick={kakaoLogout}>로그아웃</button>
            <p>{user.nickname}</p>
          </div>
        ) : (
          <KakaoLoginBtn onClick={kakaoLogin}>카카오 로그인</KakaoLoginBtn>
        )} */}
      </div>
    </>
  );
};

export default KakaoLogin;

const KakaoLoginBtn = styled.button`
  border: none;
  background: #fee500;
  color: black;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
