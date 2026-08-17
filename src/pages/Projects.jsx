import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [sortType, setSortType] = useState("az");
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortType === "az") return a.title.localeCompare(b.title);
    if (sortType === "za") return b.title.localeCompare(a.title);
    if (sortType === "newest") return new Date(b.date) - new Date(a.date);
    if (sortType === "oldest") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  return (
    <section className="projects-page">

      {/* SEARCH BAR */}
      <input
        className="search-bar"
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* SORT CONTROLS */}
      <div className="controls">
        <label>Sort by:</label>
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
          <option value="newest">Newest → Oldest</option>
          <option value="oldest">Oldest → Newest</option>
        </select>
      </div>

      {/* PROJECT GRID */}
      <div className="items">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}









