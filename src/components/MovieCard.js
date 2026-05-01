import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[200px] aspect-[2/3] rounded-lg overflow-hidden cursor-pointer">
      <img
        className="w-full hover:scale-105 transition duration-300"
        alt=""
        src={CDN_IMG_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
