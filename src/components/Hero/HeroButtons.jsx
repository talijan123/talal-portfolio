import {
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import Button from "../UI/Button";

import { profile } from "../../data/profile";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Button
        to="projects"
        icon={<FaArrowRight />}
      >
        View Projects
      </Button>

      <Button
        href={profile.resume}
        variant="secondary"
        icon={<FaDownload />}
      >
        Download CV
      </Button>

    </div>
  );
}