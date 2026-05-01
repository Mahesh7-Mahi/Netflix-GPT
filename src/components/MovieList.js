import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-white text-2xl font-bold mb-4">{title}</h1>
      <div className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth">
        {movies?.map((movie) => (
          <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
