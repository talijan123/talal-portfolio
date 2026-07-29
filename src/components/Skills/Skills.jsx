import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950 text-white"
    >
      <Container>

        <SectionTitle
          badge="Skills"
          title="Technologies I Use"
          subtitle="These are the technologies and tools I use to build modern, responsive and scalable web applications."
        />

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