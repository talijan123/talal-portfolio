export default function Container({
  as: Component = "div",
  children,
  className = "",
}) {
  return (
    <Component
      className={`
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </Component>
  );
}