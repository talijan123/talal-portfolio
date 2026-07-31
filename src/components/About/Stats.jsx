import { stats } from "../../data/stats";
import StatCard from "./StatCard";

export default function Stats() {
  return (
    <section className="mt-24">
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}