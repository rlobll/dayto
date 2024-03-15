import React, { useEffect, useState } from "react";
import { blogSearch } from "./api";

import FoodItem from "./foodItem";
import styled from "styled-components";

const FoodBlog = () => {
  const [foodBlogs, setFoodBlogs] = useState([]);
  const [foodText, setFoodText] = useState("");
  const [foodQuery, setFoodQuery] = useState("");

  useEffect(() => {
    if (foodQuery.length > 0) {
      blogSearchHttpHandler(foodQuery, true);
    }
  }, [foodQuery]);

  // 엔터를 눌렀을 때 호출 되는 함수
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      setFoodQuery(foodText);
    }
  };

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = (e) => {
    setFoodText(e.target.value);
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
      console.log("food", data);
      setFoodBlogs(
        data.documents.map((food, index) => ({
          ...food,
          id: index, // 각 항목에 고유한 ID 부여
          title: food.title.replace(/<[^>]+>/g, ""), // HTML 태그 제거
          blogname: food.blogname.replace(/<[^>]+>/g, ""), // HTML 태그 제거
          contents: food.contents.replace(/<[^>]+>/g, ""), // HTML 태그 제거
        }))
      );
    } else {
      setFoodBlogs(foodBlogs.concat(data.documents));
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
          value={foodText} // view
        />
      </div>
      <UlReset>
        {foodBlogs.map((blog, index) => (
          <FoodItem
            key={index}
            thumbnail={blog.thumbnail}
            title={blog.title}
            blogname={blog.blogname}
            contents={blog.contents}
            url={blog.url}
          />
        ))}
      </UlReset>
    </div>
  );
};

export default FoodBlog;

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
