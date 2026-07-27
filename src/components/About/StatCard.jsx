export default function StatCard({ number, label }) {
  return (
    <div
      className="
        bg-slate-800
        rounded-2xl
        p-8
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:bg-slate-700
      "
    >
      <h3 className="text-4xl font-black text-blue-500">
        {number}
      </h3>

      <p className="mt-3 text-slate-400">
        {label}
      </p>
    </div>
  );
}