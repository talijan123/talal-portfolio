import Container from "../UI/Container";
import SkillCard from "./SkillCard";

import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950 text-white"
    >
      <Container>
        <div className="text-center">
          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-black mt-4">
            Technologies I Use
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            These are the technologies and tools I use to build
            modern, responsive, and scalable web applications.
          </p>
        </div>

        <div
          className="
            mt-20
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
          "
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              {...skill}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}