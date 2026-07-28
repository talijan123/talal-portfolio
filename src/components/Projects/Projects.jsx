import Container from "../UI/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-slate-950 text-white"
    >
      <Container>

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-blue-500 font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl font-black mt-4">
            Featured Projects
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Here are some of my favorite projects that showcase my
            experience with React, WordPress, Amazon product research,
            and modern web development.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}