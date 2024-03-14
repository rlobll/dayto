import React, { useEffect, useState } from "react";
import DessertVideoList from "./DessertVideoList";

function DessertYoutube() {
  const apiKey = "AIzaSyAtOCQx0Y1Wz4vhjg28_QcAsG6DFBZvbdg";
  const [dessertVideos, setDessertVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=Jinyeong%20%EC%A7%84%EC%98%81&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setDessertVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <DessertVideoList videos={dessertVideos} />;
}

export default DessertYoutube;
