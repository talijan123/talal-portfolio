import { profile } from "../../data/profile";

export default function AboutImage() {
  return (
    <div className="flex-1 flex justify-center">
      <img
        src={profile.image}
        alt={profile.name}
        className="
          w-80
          rounded-3xl
          shadow-2xl
          border
          border-slate-700
        "
      />
    </div>
  );
}