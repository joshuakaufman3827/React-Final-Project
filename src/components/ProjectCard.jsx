import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">

        {/* FRONT */}
        <div className="card-front">
          <img src={project.img} alt={project.title} />

          <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="view-details-text">View Details</p>

          </div>
        </div>

        {/* BACK */}
        <div className="card-back">
          <div className="back-content">

            <h3>More Images</h3>

            <div className="back-images">
              {project.images.map((url, index) => (
                <img key={index} src={url} className="back-image" />
              ))}
            </div>

            {/* BACK PARAGRAPH AREA */}
            <div className="back-description">
              {project.backText}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}


