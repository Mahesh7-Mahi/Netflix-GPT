import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { popularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );

    const jsonData = await response.json();
    dispatch(popularMovies(jsonData.results));
    console.log(jsonData?.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
