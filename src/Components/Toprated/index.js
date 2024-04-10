import "./index.css";
const Toprated = ({ movies }) => {
  const sortedMovies = movies.sort((a, b) => b.vote_average - a.vote_average);
  return (
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {sortedMovies &&
          sortedMovies.map((movie) => (
            <li key={movie.id} type="none">
              <div className="display" style={{ textAlign: "center" }}>
                <div className="display-cont">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="img"
                    className="image"
                  />
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

export default Toprated;
