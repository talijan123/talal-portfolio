export default function ProjectTags({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}