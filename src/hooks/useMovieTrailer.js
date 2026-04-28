import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS,
    );

    const json = await response.json();

    const filteredData = json?.results?.filter(
      (videoType) => videoType?.type === "Trailer",
    );

    const trailer = filteredData.length ? filteredData[0] : json?.results[0];

    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
