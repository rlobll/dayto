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

const DessertVideoList = (props) => {
  // props.videos가 정의되어 있는지 확인하고, 정의되어 있지 않다면 빈 배열을 사용합니다.
  const videos = props.videos || [];

  return (
    <VideoList>
      {videos.map((dessert, index) => (
        <FoodVideoItem key={index} video={dessert} />
      ))}
    </VideoList>
  );
};

export default DessertVideoList;

const VideoList = styled.div`
  display: flex;
  overflow: scroll;
  gap: 30px;
  border: 1px solid #ff9843;
  border-radius: 10px;
  padding: 20px 10px 10px;
  margin-bottom: 100px;
`;
