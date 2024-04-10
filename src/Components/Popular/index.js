import React, { useState, useEffect } from "react";
import "./index.css";
const Popular = ({ movies }) => {
  return (
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id} type="none">
              <div className="display" style={{ textAlign: "center" }}>
                <div className="display-cont">
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt="img"
                      className="movieImage"
                    />
                  </div>

                  <h1 className="heading">{movie.title}</h1>
                  <p>Ratings: {Number(movie.vote_average.toFixed(1))}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Popular;
