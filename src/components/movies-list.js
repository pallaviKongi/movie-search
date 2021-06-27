import React from "react";
import "./movies-list.scss";

const MoviesList = (props) => {
  const { movies } = props;
  return (
    <div className="movies-container">
      {movies && movies.length ? (
        <ul className="movies-list">
          {movies.map((movie) => (
            <li key={movie.imdbID} className="list-item">
              <div className="movie-card">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="movie-poster"
                />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <span>{movie.Year}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="movie-not-found">
          Movie Not found. Try searching with a different keyword
        </div>
      )}
    </div>
  );
};

export default MoviesList;
