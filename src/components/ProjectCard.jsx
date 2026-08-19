import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card-inner">
        {/* FRONT */}
        <div className="card-front">
          <img
            src={project.Poster !== "N/A" ? project.Poster : ""}
            alt=""
          />
          <div className="card-content">
            <h3>{project.Title}</h3>
            <p>{project.Year}</p>
            <small>{project.Type?.toUpperCase()}</small>

            <Link
              to={`/details/${project.imdbID}`}
              className="view-details-text"
              onClick={(e) => e.stopPropagation()}
            >
              View Details
            </Link>
          </div>
        </div>

        {/* BACK */}
        <div className="card-back">
          <div className="back-content">
            <h3>{project.Title}</h3>
            <div className="back-description">
              <p>IMDB ID: {project.imdbID}</p>
              <p>Year: {project.Year}</p>
              <p>Type: {project.Type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






