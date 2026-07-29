import MagneticButton from "../UI/MagneticButton";

export default function ResumeButton() {
  return (
    <MagneticButton>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          justify-center
          px-5
          py-2.5
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          transition-all
          duration-300
          font-semibold
        "
      >
        Resume
      </a>
    </MagneticButton>
  );
}