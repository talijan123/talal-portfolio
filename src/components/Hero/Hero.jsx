import Container from "../UI/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import AuroraBackground from "../UI/AuroraBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        text-white
      "
    >
      <AuroraBackground />

      <Container
        className="
          relative
          z-10
          min-h-screen
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-16
          py-20
        "
      >
        <HeroContent />
        <HeroImage />
      </Container>
    </section>
  );
}