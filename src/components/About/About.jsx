import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import Stats from "./Stats";
import Timeline from "./Timeline";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-28

        bg-white
        dark:bg-slate-900

        text-slate-900
        dark:text-white

        transition-colors
        duration-300
      "
    >
      <Container>

        <SectionTitle
          badge="About Me"
          title="Get To Know Me Better"
          subtitle="I'm passionate about building modern, responsive and user-friendly web applications using React, JavaScript, Tailwind CSS, WordPress and modern development tools."
        />

        <div
          className="
            mt-20

            flex
            flex-col
            lg:flex-row

            items-center

            gap-16
            lg:gap-24
          "
        >
          <AboutImage />

          <AboutContent />
        </div>

        <div className="mt-24">
          <Stats />
        </div>

        <div className="mt-24">
          <Timeline />
        </div>

      </Container>
    </section>
  );
}