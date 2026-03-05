import data from "../data/movieDetailData.json";
import "./MovieDetail.scss";
import React from "react";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { poster_path, backdrop_path, title, vote_average, genres, overview } =
    data;

  return (
    <Link to="/details">
      <div className="detail-page">
        <div className="card">
          <div className="poster">
            <img src={poster_path} />
          </div>
        </div>
        <div className="information">
          <div className="title">{title}</div>
          <div className="vote">평점 : {vote_average}</div>
          <ul className="genres">
            {genres.map((genre) => (
              <li key={genre.id} className="genre-tag">
                {genre.name}
              </li>
            ))}
          </ul>
          <div className="overview">{overview}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieDetail;
