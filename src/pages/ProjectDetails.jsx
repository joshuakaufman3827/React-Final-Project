import { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [flipped, setFlipped] = useState(false);

  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="details-container">
<h1 style={{ color: "red" }}>TEST</h1>

      <div
        className={`card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="card-inner">

          {/* FRONT */}
          <div className="card-front">
            <img src={project.img} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <small>{project.date}</small>
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

              <div className="back-description">
                {project.backText}
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}



