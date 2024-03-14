import React, { useEffect, useState } from "react";
import FoodVideoList from "./foodVideoList";

function FoodYoutube() {
  const apiKey = "AIzaSyAtOCQx0Y1Wz4vhjg28_QcAsG6DFBZvbdg";
  const [foodVideos, setFoodVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=%EB%B0%B1%EC%A2%85%EC%9B%90&regionCode=KR&type=video&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setFoodVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <FoodVideoList videos={foodVideos} />;
}

export default FoodYoutube;
