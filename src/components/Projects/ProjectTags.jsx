export default function ProjectTags({ technologies }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="
            px-4
            py-2
            rounded-full
            bg-blue-500/10
            border
            border-blue-500/20
            text-blue-400
            text-sm
            font-medium
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}