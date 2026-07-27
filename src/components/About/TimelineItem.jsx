export default function TimelineItem({
  year,
  title,
  description,
}) {
  return (
    <div className="relative pl-10 pb-10">

      {/* Vertical Line */}
      <div className="absolute left-3 top-0 h-full w-[2px] bg-slate-700"></div>

      {/* Circle */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-900"></div>

      <p className="text-blue-500 font-bold">
        {year}
      </p>

      <h3 className="text-xl font-semibold mt-2">
        {title}
      </h3>

      <p className="mt-3 text-slate-400 leading-7">
        {description}
      </p>

    </div>
  );
}