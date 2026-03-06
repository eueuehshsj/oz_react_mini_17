import React from "react";
import movieData from "../data/movieListData.json";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const { poster_path } = movieData;

  return (
    <Link to="/detail">
      <div className="movieCard">
        <img src={poster_path} />
      </div>
    </Link>
  );
};

export default MovieCard;
