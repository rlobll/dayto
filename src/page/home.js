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
        <Form>
          <form onSubmit={handleSearch}>
            <HomeInput
              placeholder="검색어입력"
              value={searchValue}
              onChange={ChangInpute}
            />
            <HomeBtn type="submit">검색</HomeBtn>
          </form>
          <SearchText>
            {searchResult && <p>" {searchResult} "에 대한 결과입니다</p>}
          </SearchText>
        </Form>
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

const Form = styled.div`
  display: flex;
  /* width: 500px; */
`;

const HomeInput = styled.input`
  width: 360px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #ff9843;
  outline: none;
`;

const HomeBtn = styled.button`
  border: 1px solid #ff9843;
  border-radius: 10px;
  background: #ff9843;
  margin-left: 10px;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
`;

const SearchText = styled.div`
  width: 480px;
  margin-left: 40px;
`;

const ResultList = styled.div`
  padding: 0 20px;
  align-items: center;
`;
