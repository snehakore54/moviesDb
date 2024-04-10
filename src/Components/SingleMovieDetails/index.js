import React, { useState, useEffect } from "react";
import "./index.css";
const SingleMovieDetailedPage = () => {
  const [singleMovie, detailedDesc] = useState([]);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=9bfd5921e6063dc55afb80e348605b70&language=en-US&page=1"
        );
        const data = await response.json();
        detailedDesc(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return <div>{singleMovie}</div>;
};

export default SingleMovieDetailedPage;
