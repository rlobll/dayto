import styled from "styled-components";

const Splash = ({ onClick }) => {
  return (
    <div>
      <Wrapper>
        <img src="../logo444.png" alt="3" style={{ width: "500px" }} />
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
`;
const StartBtn = styled.div`
  /* position: fixed;
  top: 480px;
  left: 350px; */
  color: #86a7fc;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
`;
