import { Link } from "react-scroll";

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  icon,
  className = "",
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1",

    secondary:
      "border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1",
  };

  // Smooth scroll button
  if (to) {
    return (
      <Link
        to={to}
        smooth={true}
        duration={500}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {icon}
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {icon}
        {children}
      </a>
    );
  }

  // Normal button
  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}