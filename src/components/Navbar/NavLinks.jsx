import { Link } from "react-scroll";
import { navigation } from "../../data/navigation";

export default function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            smooth
            duration={500}
            className="
              cursor-pointer
              hover:text-blue-400
              transition-colors
            "
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}