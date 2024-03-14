import React from "react";
import styled from "styled-components";

const Kakao = () => {
  // const Rest_api_key = "e5c7de101f957099b70572a525bfd5f4"; //REST API KEY
  // const redirect_uri = "https://localhost:3000"; //Redirect URI
  // oauth 요청 URL

  const restApiKey = process.env.REACT_APP_REST_API_KEY;
  console.log("kakao", restApiKey);
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  console.log("kakao", redirectUri);
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`;

  const kakaoClick = () => {
    window.open(kakaoURL, "kakaoPopup", "width=600,height=400");
  };
  return (
    <>
      <KakaoLogin onClick={kakaoClick}>카카오 로그인</KakaoLogin>
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
