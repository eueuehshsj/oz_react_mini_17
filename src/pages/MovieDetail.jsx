import data from "../data/movieDetailData.json";
import "./MovieDetail.scss";
import React from "react";

const MovieDetail = () => {
  const { poster_path, backdrop_path, title, vote_average, genres, overview } =
    data;
  const baseUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="detail-page">
      <div className="card">
        <div className="poster">
          <img src={baseUrl} alt={title} />
        </div>
      </div>
      <div className="information">
        <div className="title">{title}</div>
        <div className="vote">평점 : {vote_average.toFixed(1)}</div>
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
  );
};

export default MovieDetail;
