import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const API_KEY = "b238d75b";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Initial load
  useEffect(() => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=batman`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setProjects(data.Search);
        } else {
          setProjects([]);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);

    if (query.length < 3) {
      return;
    }

    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
        query
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setProjects(data.Search);
        } else {
          setProjects([]);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search movies (min 3 characters)..."
        value={search}
        onChange={handleSearch}
      />

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {!loading && projects.length === 0 && (
        <p style={{ textAlign: "center" }}>No results found.</p>
      )}

      <div className="items">
        {projects.map((project) => (
          <ProjectCard key={project.imdbID} project={project} />
        ))}
      </div>
    </div>
  );
}










