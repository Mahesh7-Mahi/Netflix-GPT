import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );

    const jsonData = await response.json();

    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    nowPlaying();
  }, []);
};

export default useNowPlayingMovies;
