import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Driver drowsiness detection",
    description:
      "Created a Raspberry Pi system that keeps drivers safe by alerting them when it detects drowsiness, promoting safer journeys on the road.",
  },
  {
    id: 2,
    title: "Weather fetching App",
    description:
      "A app that is used for weather fetching using API ",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div>
      <section id="projects">
        <h2 className="projects-heading">Projects</h2>
        <p className="projects-p">
          Here are some projects that I have worked with..
        </p>
        <div className="projects-box">
          <div className="projects-navbar">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className={`project-nav-item ${
                  selectedProject === project ? "active" : ""
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {project.title}
              </div>
            ))}
          </div>
          <div className="project-info">
            {selectedProject && (
              <div className="project-card">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;