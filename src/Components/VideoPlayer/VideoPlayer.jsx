import React, { useRef } from "react";
import "./VideoPlayer.css";
import college_video from "../../assets/college-video.mp4";

const VideoPlayer = (props) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      props.setPlayState(false);
     
    }
  };

  return (
    <div
      className={`video-player ${props.playState ? "" : "hide"}`}
      ref={player}  onClick={closePlayer}>
      <video src={college_video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
