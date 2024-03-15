import React, { useState } from "react";
import styled from "styled-components";
import KakaoMap from "./map/kakaoMap";
// import LandingPage from "./map/LandingPage";

const Home = ({ addList }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");
  console.log("searchResult", searchResult);

  const ChangInpute = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResult(searchValue);
    // setSearchValue(""); // 입력 다 되고나서 인풋창 초기화
  };

  return (
    <>
      <HomeSearch>
        <FormText>
          <form onSubmit={handleSearch}>
            <FormHome>
              <HomeInput
                placeholder="검색어입력"
                value={searchValue}
                onChange={ChangInpute}
              />
              <HomeBtn type="submit">검색</HomeBtn>
            </FormHome>
          </form>
          <SearchText>
            {searchResult && <p>" {searchResult} "에 대한 결과입니다</p>}
          </SearchText>
        </FormText>
        <div>
          <ResultList>
            <div>
              {/* {searchList.map((e) => {
              return <div>{e}</div>;
            })} */}
            </div>
            {/* <div onClick={() => addList(searchValue)}>추가</div> */}
          </ResultList>
        </div>
      </HomeSearch>
      <KakaoMap searchPlace={searchResult} />
    </>
  );
};

export default Home;

const HomeSearch = styled.div`
  max-width: 1000px;
`;

const FormText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 485px) {
    display: block;
    margin: 0;
  }
`;

const FormHome = styled.div`
  width: 480px;
  display: flex;

  @media (max-width: 485px) {
    width: 100%;
  }
`;

const HomeInput = styled.input`
  /* width: 365px; */
  width: 80%;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #ff9843;
  outline: none;
`;

const HomeBtn = styled.button`
  width: 20%;
  border: none;
  border-radius: 10px;
  background: #ff9843;
  margin-left: 10px;
  color: white;
  cursor: pointer;
`;

const SearchText = styled.div`
  width: 50%;
  margin-left: 30px;

  @media (max-width: 485px) {
    width: 100%;
    margin: 0;
  }
`;

const ResultList = styled.div`
  padding: 0 20px;
  align-items: center;
`;
