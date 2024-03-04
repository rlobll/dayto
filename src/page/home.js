import React, { useState } from "react";
import styled from "styled-components";

const Home = ({ addList, searchList }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const ChangInpute = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchResult(searchValue);
    // setSearchValue(""); // 초기화 (근데 이상하게 나오면서 초기화 됨)
  };

  const keyDownEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // 엔터 키가 눌리면 검색 실행
    }
  };

  return (
    <HomeSearch>
      <div>
        <HomeInput
          placeholder="검색어입력"
          value={searchValue}
          onChange={ChangInpute}
          onKeyDown={keyDownEnter}
        />
        <HomeBtn onClick={handleSearch}>검색</HomeBtn>
      </div>
      {searchResult && <p>"{searchResult}"에 대한 결과입니다</p>}
      <div>
        <ResultList>
          <p>검색하고 나온 애들 자리</p>
          <div>
            {/* {searchList.map((e) => {
              return <div>{e}</div>;
            })} */}
          </div>
          <div onClick={() => addList(searchValue)}>추가</div>
        </ResultList>
      </div>
    </HomeSearch>
  );
};

export default Home;

const HomeSearch = styled.div`
  width: 480px;
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
  padding: 10px 20px;
  color: white;
  cursor: pointer;
`;

const ResultList = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
