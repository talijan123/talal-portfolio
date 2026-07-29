import { useState } from "react";
import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-28 bg-slate-950 text-white"
    >
      <Container>

        <SectionTitle
          badge="Portfolio"
          title="Featured Projects"
          subtitle="Here are some of my favorite projects that showcase my experience with React, WordPress, Amazon product research and modern web development."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={openProject}
            />
          ))}

        </div>

      </Container>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={closeProject}
      />
    </section>
  );
}