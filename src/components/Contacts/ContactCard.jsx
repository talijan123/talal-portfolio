import { motion } from "framer-motion";

export default function ContactCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="
        flex
        items-center
        gap-5
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        hover:border-blue-500
        transition
      "
    >
      <div className="text-3xl text-blue-500">
        <Icon />
      </div>

      <div>
        <h3 className="font-semibold">
          {item.title}
        </h3>

        <p className="text-slate-400 text-sm">
          {item.value}
        </p>
      </div>
    </motion.a>
  );
}