import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "b238d75b";

export default function ProjectDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading || !movie) {
    return <p style={{ textAlign: "center" }}>Loading details...</p>;
  }

  return (
    <div className="details-container">
      <h2>{movie.Title}</h2>

      {movie.Poster && movie.Poster !== "N/A" && (
        <img
          src={movie.Poster}
          alt=""
          style={{
            width: "260px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />
      )}

      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
      <p>
        <strong>Rated:</strong> {movie.Rated}
      </p>
      <p>
        <strong>Released:</strong> {movie.Released}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.Runtime}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Writer:</strong> {movie.Writer}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p>
        <strong>IMDB Rating:</strong> {movie.imdbRating}
      </p>

      <Link to="/" className="view-details-text" style={{ marginTop: "20px" }}>
        Back to search
      </Link>
    </div>
  );
}







