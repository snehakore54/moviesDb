import React, { useState, useEffect } from "react";
import "./index.css";
const Upcoming = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=9bfd5921e6063dc55afb80e348605b70&language=en-US&page=1"
        );
        const data = await response.json();
        setTopMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {topMovies &&
          topMovies.map((movie) => (
            <li key={movie.id} type="none">
              <div className="display" style={{ textAlign: "center" }}>
                <div className="display-cont">
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt="img"
                      className="image"
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

export default Upcoming;
