import "./App.css";
import React, { useState, useEffect } from "react";
import Popular from "./Components/Popular/index";
import Toprated from "./Components/Toprated/index";
import Upcoming from "./Components/Upcoming/index";
import SingleMovieDetailedPage from "./Components/SingleMovieDetails/index";

const pages = {
  POPULAR: "Popular",
  TOPRATED: "Top Rated",
  UPCOMING: "Upcoming",
};

function App() {
  const [page, setPage] = useState(pages.POPULAR);
  const [popularMovies, setPopularMovies] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=9bfd5921e6063dc55afb80e348605b70&language=en-US&page=1"
        );
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  const setMoviesOnSearch = async () => {
    const url =
      input.length > 0
        ? `https://api.themoviedb.org/3/search/movie?api_key=9bfd5921e6063dc55afb80e348605b70&language=en-US&query=${input}&page=1`
        : "https://api.themoviedb.org/3/movie/popular?api_key=9bfd5921e6063dc55afb80e348605b70&language=en-US&page=1";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPopularMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(45, 45, 45)" }}>
      <div className="home-navbar" style={{ justifyContent: "space-between" }}>
        <div className="movie-name">MovieDb</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="names" style={{ justifyContent: "space-between" }}>
            <h1
              onClick={() => setPage(pages.POPULAR)}
              className={page === pages.POPULAR ? "title active" : "title"}
            >
              {pages.POPULAR}
            </h1>
            <h1
              onClick={() => setPage(pages.TOPRATED)}
              className={page === pages.TOPRATED ? "title active" : "title"}
            >
              {pages.TOPRATED}
            </h1>
            <h1
              onClick={() => setPage(pages.UPCOMING)}
              className={page === pages.UPCOMING ? "title active" : "title"}
            >
              {pages.UPCOMING}
            </h1>
            <input
              type="search"
              placeholder="Movie Name"
              className="search"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
            <button className="btn" onClick={setMoviesOnSearch}>
              search
            </button>
          </div>
        </div>
      </div>
      {page === pages.POPULAR && <Popular movies={popularMovies} />}
      {page === pages.TOPRATED && <Toprated movies={popularMovies} />}
      {page === pages.UPCOMING && <Upcoming />}
      <SingleMovieDetailedPage />
    </div>
  );
}

export default App;
