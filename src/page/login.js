// import { useEffect } from "react";
import KakaoLogin from "./login/kakaoLogin";
import Naver from "./login/naverLogin";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginWrap>
      <span>로그인</span>
      <ButtonWrap>
        <KakaoBtn>
          <KakaoImg></KakaoImg>
          <KakaoLogin />
        </KakaoBtn>
        <NaverBtn>
          <NaverImg></NaverImg>
          <Naver />
        </NaverBtn>
        {/* <GoogleBtn>
          <GoogleImg></GoogleImg>구글 로그인
        </GoogleBtn> */}
      </ButtonWrap>
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  text-align: center;
  margin: 150px auto 0;
  max-width: 500px;
  font-size: 25px;
  font-weight: bold;
  padding: 0 15px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 100px;
`;

const KakaoImg = styled.img.attrs({
  src: "/images/kakao_symbol.png",
  alt: "kakao",
})`
  width: 30px;
  height: 30px;
`;

const KakaoBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border: 1px solid #fee500;
  border-radius: 12px;
  background: #fee500;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const NaverImg = styled.img.attrs({
  src: "/images/naver_icon.png",
  alt: "naver",
})`
  width: 40px;
  height: 40px;
`;

const NaverBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #03c75a;
  border-radius: 12px;
  background: #03c75a;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const GoogleImg = styled.img.attrs({
  src: "/images/google_icon.png",
  alt: "google",
})`
  width: 20px;
  height: 20px;
`;

const GoogleBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid gray;
  border-radius: 12px;
  background: none;
  padding: 15px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
