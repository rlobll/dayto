import React from "react";
import styled from "styled-components";

const Kakao = () => {
  const Rest_api_key = "e5c7de101f957099b70572a525bfd5f4"; //REST API KEY
  const redirect_uri = "https://localhost:3000"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <KakaoLogin onClick={handleLogin}>카카오 로그인</KakaoLogin>
    </>
  );
};

export default Kakao;

const KakaoLogin = styled.button`
  border: none;
  background: #fee500;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
