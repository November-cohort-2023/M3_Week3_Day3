import { useState, useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projects-data.json";

import { ThemeContext } from "../context/theme.context";

 
function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);

  const value = useContext(ThemeContext)

  console.log(value)
 
  return (
    <div className="ProjectsPage">
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
 
export default ProjectsPage;
