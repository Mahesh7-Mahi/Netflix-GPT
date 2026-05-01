import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVedio = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVedio?.key +
          "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
