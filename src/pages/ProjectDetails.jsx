import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="details-container">

      <img 
        src={project.img} 
        alt="" 
        className="details-main-image"
      />

      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <small>{project.date}</small>

      <h3>More Images</h3>

      <div className="details-images">
        {project.images.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt=""
            className="details-image"
          />
        ))}
      </div>

      <div className="details-backtext">
        {project.backText}
      </div>

    </div>
  );
}





