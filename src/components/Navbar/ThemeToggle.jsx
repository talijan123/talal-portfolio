import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        w-11
        h-11
        rounded-full
        flex
        items-center
        justify-center
        border
        border-slate-300
        dark:border-slate-700
        bg-white
        dark:bg-slate-800
        hover:bg-slate-100
        dark:hover:bg-slate-700
        shadow-sm
        hover:shadow-md
        transition-all
        duration-300
      "
    >
      {theme === "dark" ? (
        <HiSun
          size={20}
          className="
            text-yellow-500
            transition-all
            duration-300
          "
        />
      ) : (
        <HiMoon
          size={20}
          className="
            text-slate-900
            transition-all
            duration-300
          "
        />
      )}
    </button>
  );
}