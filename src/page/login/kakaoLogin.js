import React from "react";
import styled from "styled-components";

const Kakao = () => {
  // const Rest_api_key = "e5c7de101f957099b70572a525bfd5f4"; //REST API KEY
  // const redirect_uri = "https://localhost:3000"; //Redirect URI
  // oauth 요청 URL

  const restApiKey = process.env.REACT_APP_REST_API_KEY;
  console.log(restApiKey);
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  console.log(redirectUri);
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`;
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
