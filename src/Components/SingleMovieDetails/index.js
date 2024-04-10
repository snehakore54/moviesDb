import React, { useState, useEffect } from "react";
import "./index.css";
const SingleMovieDetailedPage = () => {
  const [singleMovie, detailedDesc] = useState([]);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US"
        );
        const data = await response.json();
        detailedDesc(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return <div>

  </div>;
};

export default SingleMovieDetailedPage;
