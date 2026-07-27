export default function SkillCard({
  icon: Icon,
  name,
  color,
}) {
  return (
    <div
      className="
        bg-slate-800
        rounded-2xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        gap-4
        transition-all
        duration-300
        hover:-translate-y-2
        hover:bg-slate-700
      "
    >
      <Icon
        className={`text-5xl ${color}`}
      />

      <h3 className="font-semibold">
        {name}
      </h3>
    </div>
  );
}