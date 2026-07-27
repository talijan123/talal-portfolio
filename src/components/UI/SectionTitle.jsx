export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "text-left"
      : "text-center";

  return (
    <div className={`${alignment} max-w-3xl`}>
      <p
        className="
          text-blue-500
          uppercase
          tracking-[0.25em]
          font-semibold
          text-sm
        "
      >
        {subtitle}
      </p>

      <h2
        className="
          mt-4
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          text-white
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            text-slate-400
            leading-8
            text-lg
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}