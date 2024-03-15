import styled from "styled-components";

const Splash = ({ onClick }) => {
  return (
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
