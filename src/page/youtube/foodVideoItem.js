import React, { useEffect } from "react";

const FoodVideoItem = (props) => {
  //   const thumbnailUrl = props.video.snippet.thumbnails.high.url; // 썸네일 URL 추출

  // YouTube Iframe Player API 스크립트 로드하기
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }, []);

  // API 초기화 및 동영상 재생하기
  const onYouTubeIframeAPIReady = () => {
    new window.YT.Player("player", {
      height: "360",
      width: "640",
      videoId: props.video.id.videoId, // 동영상 ID 설정
      events: {
        // 플레이어가 준비되었을 때 호출되는 이벤트 핸들러
        onReady: onPlayerReady,
        // 플레이어 상태가 변경될 때 호출되는 이벤트 핸들러
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event) => {
    // 플레이어가 준비되었을 때 실행되는 함수
    // 필요한 경우 작성하세요.
  };

  const onPlayerStateChange = (event) => {
    // 플레이어 상태가 변경될 때 실행되는 함수
    // 필요한 경우 작성하세요.
  };

  // API 초기화 함수 호출하기
  useEffect(() => {
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  }, []);

  return (
    <div>
      <iframe
        id="player"
        title="YouTube Food Video"
        type="text/html"
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${props.video.id.videoId}?enablejsapi=1&origin=${window.location.origin}`}
        frameborder="0"
      ></iframe>
      <p>{props.video.snippet.title}</p>
    </div>
  );
};

export default FoodVideoItem;
