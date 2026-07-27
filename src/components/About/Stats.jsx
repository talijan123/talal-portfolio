import { stats } from "../../data/stats";
import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          {...stat}
        />
      ))}
    </div>
  );
}