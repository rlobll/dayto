import React from "react";
import FoodBlog from "./bolg/foodBlog";
import FoodYoutube from "./youtube/foodYoutube";

const Food = () => {
  return (
    <>
      <FoodYoutube />
      <FoodBlog />
    </>
  );
};

export default Food;

//https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=REACT_APP_GOOGLE_API_KEY'
