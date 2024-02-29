import React from "react";
import styled from "styled-components";

const Naver = () => {
  const NAVER_CLIENT_ID = "fpsR1qbI1E8CO2t8ATql"; // 발급받은 클라이언트 아이디
  const REDIRECT_URL = "https://localhost:3000";
  const STATE = "false";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URL}`;

  const NaverClick = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  return (
    <div>
      <NaverLogin onClick={NaverClick}>네이버 로그인</NaverLogin>
    </div>
  );
};

export default Naver;

const NaverLogin = styled.button`
  border: none;
  background: #03c75a;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
