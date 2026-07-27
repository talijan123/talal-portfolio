import Container from "../UI/Container";
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
        {/* Section Heading */}
        <div className="text-center mb-20">
          <p className="text-blue-500 uppercase tracking-[4px] font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Get To Know Me Better
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
            I'm passionate about building modern, responsive, and
            user-friendly websites using React, JavaScript, WordPress,
            and the latest web technologies.
          </p>
        </div>

        {/* About Section */}
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

        {/* Statistics */}
        <Stats />

        {/* Timeline */}
        <Timeline />
      </Container>
    </section>
  );
}