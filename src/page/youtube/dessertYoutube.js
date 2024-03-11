import React, { useEffect, useState } from "react";
import DessertVideoList from "./DessertVideoList";

function DessertYoutube() {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=Jinyeong%20%EC%A7%84%EC%98%81&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <DessertVideoList videos={videos} />;
}

export default DessertYoutube;
