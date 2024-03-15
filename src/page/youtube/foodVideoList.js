import React from "react";
import FoodVideoItem from "./foodVideoItem";
import styled from "styled-components";

// const FoodVideoList = (props) => (

//   <ul>
//     {props.videos.map((video) => (
//       <FoodVideoItem key={video.id} video={video} />
//     ))}
//   </ul>
// );

const FoodVideoList = (props) => {
  // props.videos가 정의되어 있는지 확인하고, 정의되어 있지 않다면 빈 배열을 사용합니다.
  const videos = props.videos || [];

  return (
    <VideoList>
      <ScrollBar>
        {videos.map((food, index) => (
          <FoodVideoItem key={index} video={food} />
        ))}
      </ScrollBar>
    </VideoList>
  );
};

export default FoodVideoList;

const VideoList = styled.div`
  border: 1px solid #ff9843;
  border-radius: 10px;
  padding: 20px 10px 10px;
  margin-bottom: 100px;
  overflow-y: hidden;
  /* overflow-x: hidden; */

  @media (max-width: 485px) {
    display: flex;
    align-items: center;
  }
`;

const ScrollBar = styled.div`
  display: flex;
  overflow: scroll;
  gap: 30px;
  cursor: pointer;

  /* 스크롤바 디자인 */
  &::-webkit-scrollbar {
    height: 10px; /* 스크롤바 높이 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff9843; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바의 모서리를 둥글게 만듭니다. */
  }
  /* &::-webkit-scrollbar-track { */
  /* background-color: #f1f1f1; 스크롤바 트랙 색상 */
  /* border-radius: 4px; 스크롤바의 모서리를 둥글게 만듭니다. */
  /* } */
`;
