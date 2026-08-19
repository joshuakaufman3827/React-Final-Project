import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  // Load default movies on first render
  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=YOUR_KEY&s=batman")
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setProjects(data.Search);
        }
      });
  }, []);

  // Dynamic search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);

    if (query.length > 2) {
      fetch(`https://www.omdbapi.com/?apikey=YOUR_KEY&s=${query}`)
        .then(res => res.json())
        .then(data => {
          if (data.Search) {
            setProjects(data.Search);
          } else {
            setProjects([]);
          }
        });
    }
  };

  return (
    <>
      <input
        type="text"
        className="search-bar"
        placeholder="Search movies..."
        value={search}
        onChange={handleSearch}
      />

      <div className="items">
        {projects.map((project) => (
          <ProjectCard key={project.imdbID} project={project} />
        ))}
      </div>
    </>
  );
}




