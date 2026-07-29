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
      className="py-28 bg-slate-900 text-white"
    >
      <Container>

        <SectionTitle
          badge="About"
          title="Get To Know Me Better"
          subtitle="I'm passionate about building modern, responsive and user-friendly websites using React, JavaScript, WordPress and the latest web technologies."
        />

        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            gap-16
          "
        >
          <AboutImage />
          <AboutContent />
        </div>

        <Stats />

        <Timeline />

      </Container>
    </section>
  );
}