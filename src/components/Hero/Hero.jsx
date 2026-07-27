import Container from "../UI/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white"
    >
      <Container
        className="
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