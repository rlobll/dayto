import React, { useEffect, useState } from "react";
import { blogSearch } from "./api";

import FoodItem from "./foodItem";
import styled from "styled-components";

const FoodBlog = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      blogSearchHttpHandler(query, true);
    }
  }, [query]);

  // 엔터를 눌렀을 때 호출 되는 함수
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = (e) => {
    setText(e.target.value);
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
      setBlogs(
        data.documents.map((blog) => ({
          ...blog,
          title: blog.title.replace(/<[^>]+>/g, ""), // HTML 태그 제거
          blogname: blog.blogname.replace(/<[^>]+>/g, ""), // HTML 태그 제거
          contents: blog.contents.replace(/<[^>]+>/g, ""), // HTML 태그 제거
        }))
      );
    } else {
      setBlogs(blogs.concat(data.documents));
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
          value={text} // view
        />
      </div>
      <UlReset>
        {blogs.map((blog, index) => (
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
`;

const UlReset = styled.ul`
  margin: 30px 0;
  padding: 0;
  overflow: auto;
`;
