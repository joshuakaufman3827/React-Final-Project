import { useState } from "react";

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
          <img 
            src={project.img} 
            alt="" 
          />
          <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>{project.date}</small>
          </div>
        </div>

        {/* BACK */}
        <div className="card-back">
          <div className="back-content">
            <h3>{project.title}</h3>

            <div className="back-images">
              {project.images.map((img, index) => (
                <img 
                  key={index}
                  src={img}
                  alt=""
                  className="back-image"
                />
              ))}
            </div>

            <div className="back-description">
              {project.backText}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



