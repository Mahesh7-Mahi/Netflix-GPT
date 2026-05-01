import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { topRated } from "../utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS,
    );

    const jsonData = await response.json();
    dispatch(topRated(jsonData.results));
    console.log(jsonData?.results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRated;
