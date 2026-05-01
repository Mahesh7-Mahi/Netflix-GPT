import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { upComing } from "../utils/moviesSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS,
    );

    const jsonData = await response.json();
    dispatch(upComing(jsonData.results));
    console.log(jsonData?.results);
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcoming;
