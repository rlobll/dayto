import styled from "styled-components";
import { useEffect, useState } from "react";
import Home from "./home";

const Splash = ({ onClick }) => {
  // const [token, setToken] = useState(false);
  // useEffect(() => {
  //   // 로컬 스토리지에서 토큰을 가져옵니다.
  //   const nickname = localStorage.getItem("nickname");

  //   // 닉네임이 있다면
  //   if (nickname) {
  //     // 닉네임이 있을 때의 동작을 여기에 작성합니다.
  //     console.log("닉네임이 있습니다.");
  //     // 예를 들어, 다른 페이지로 이동하거나 특정 함수를 호출하는 등의 동작을 수행할 수 있습니다.
  //     setToken(true);
  //   } else {
  //     // 닉네임이 없을 때의 동작을 여기에 작성합니다.
  //     console.log("닉네임이 없습니다.");
  //     setToken(false); // 상태를 false로 설정하여 화면을 감춥니다.
  //   }
  // }, []);

  return (
    // <div>
    //   <div>
    //     {/* <StartBtn onClick={() => onClick()}>시작하기</StartBtn> */}
    //     {token ? (
    //       // nickname true일 때 화면을 보여줍니다.
    //       <Home />
    //     ) : (
    //       <Wrapper>
    //         <LogoImage src="../logo444.png" alt="3" />
    //         {/* // nickname false일 때 화면을 감춥니다. */}
    //         <StartBtn onClick={() => onClick()}>시작하기</StartBtn>
    //       </Wrapper>
    //     )}
    //   </div>
    // </div>
    <div>
      <Wrapper>
        <LogoImage src="../logo444.png" alt="3" />
        <div>
          <StartBtn onClick={() => onClick()}>시작하기</StartBtn>
        </div>
      </Wrapper>
    </div>
  );
};

export default Splash;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;

  @media (max-width: 485px) {
    width: 100%;
    margin: 180px 0;
  }
`;

const LogoImage = styled.img`
  width: 500px;

  @media (max-width: 485px) {
    width: 100%;
  }
`;

const StartBtn = styled.div`
  color: #86a7fc;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
`;
