import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { poster_path, title } = movie;
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Link to="/detail">
      <div className="bg-gray-800 rounded-lg shadow-lg w-48 h-72 overflow-hidden hover:scale-105 hover:shadow-xl">
        <img src={poster} alt={title} className="w-full h-full object-cover" />
      </div>
    </Link>
  );
};

export default MovieCard;
