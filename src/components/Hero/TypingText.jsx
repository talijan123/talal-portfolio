import { profile } from "../../data/profile";

export default function TypingText() {
  return (
    <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-300">
      {profile.title}
    </h2>
  );
}