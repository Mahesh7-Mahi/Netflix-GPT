import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) return;
  return (
    movies && (
      <div className="bg-black">
        <div className="-top-52 pl-12 relative">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upComing} />
          <MovieList title={"Horror"} movies={movies.upComing} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
