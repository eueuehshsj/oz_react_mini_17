import { useState, useEffect } from "react";
import { getPopularMovies } from "./movieListLoading.jsx";

function MovieListData() {
  const [MovieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setMovieList(movies);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다", error);
      }
    };
    fetchMovies();
  }, []);

  return { MovieList };
}

export { MovieListData };
