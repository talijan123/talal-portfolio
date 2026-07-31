import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-28

        bg-slate-50
        dark:bg-slate-950

        text-slate-900
        dark:text-white

        transition-colors
        duration-300
      "
    >
      <Container>

        <SectionTitle
          badge="Skills"
          title="Technologies I Use"
          subtitle="I enjoy working with modern front-end technologies, backend tools, WordPress, AI-powered development tools, and version control systems to build fast, responsive, and production-ready web applications."
        />

        <div
          className="
            mt-20

            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4

            gap-7
            lg:gap-8
          "
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              {...skill}
              delay={index * 0.05}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}