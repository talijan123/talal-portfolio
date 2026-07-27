import { experience } from "../../data/experience";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="mt-20">

      <h2 className="text-4xl font-black mb-10">
        Education & Journey
      </h2>

      {experience.map((item) => (
        <TimelineItem
          key={item.year}
          {...item}
        />
      ))}

    </div>
  );
}