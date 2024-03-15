import React, { useEffect, useState } from "react";
import { blogSearch } from "./api";

import FoodItem from "./foodItem";
import styled from "styled-components";

const DessertBlog = () => {
  const [dessertBlogs, setDessertBlogs] = useState([]);
  const [desserttext, setDessertText] = useState("");
  const [dessertQuery, setDessertQuery] = useState("");

  useEffect(() => {
    if (dessertQuery.length > 0) {
      blogSearchHttpHandler(dessertQuery, true);
    }
  }, [dessertQuery]);

  // 엔터를 눌렀을 때 호출 되는 함수
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      setDessertQuery(desserttext);
    }
  };

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = (e) => {
    setDessertText(e.target.value);
  };

  const blogSearchHttpHandler = async (query, reset) => {
    const params = {
      query: query,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 10, // 한 페이지에 보여 질 문서의 개수
    };
    console.log(params);

    const { data } = await blogSearch(params);
    if (reset) {
      console.log("dessert", data);
      setDessertBlogs(
        data.documents.map((dessert, index) => ({
          ...dessert,
          id: index, // 각 항목에 고유한 ID 부여
          title: dessert.title.replace(/<[^>]+>/g, ""), // HTML 태그 제거
          blogname: dessert.blogname.replace(/<[^>]+>/g, ""), // HTML 태그 제거
          contents: dessert.contents.replace(/<[^>]+>/g, ""), // HTML 태그 제거
        }))
      );
    } else {
      setDessertBlogs(dessertBlogs.concat(data.documents));
    }
  };

  return (
    <div>
      <div>
        <FoodInput
          type="search"
          placeholder="검색어 입력 후 엔터를 누르세요"
          name="query"
          onKeyDown={onEnter} // enter
          onChange={onTextUpdate} // change
          value={desserttext} // view
        />
      </div>
      <UlReset>
        {dessertBlogs.map((dessert) => (
          <FoodItem
            key={dessert.id}
            thumbnail={dessert.thumbnail}
            title={dessert.title}
            blogname={dessert.blogname}
            contents={dessert.contents}
            url={dessert.url}
          />
        ))}
      </UlReset>
    </div>
  );
};

export default DessertBlog;

const FoodInput = styled.input`
  border: 1px solid #ff9843;
  border-radius: 10px;
  width: 380px;
  padding: 10px 15px;
  outline: none;

  @media (max-width: 485px) {
    width: 100%;
  }
`;

const UlReset = styled.ul`
  margin: 30px 0;
  padding: 0;
  overflow: auto;
`;
