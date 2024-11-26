import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackgroundContainer = ({ movieId }) => {
  const tarilerVideo = useSelector(store => store.movies?.tarilerVideo)
  useMovieTrailer(movieId)
  
  return (
    <div className="w-[100%] h-[100vh]">
      <iframe className="w-[100%] h-[100vh] aspect-video"
        src={"https://www.youtube.com/embed/" + tarilerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackgroundContainer;
