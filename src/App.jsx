import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <section className="h-screen flex items-center justify-center bg-slate-800 text-white">
        Hero Section
      </section>

      <section className="h-screen flex items-center justify-center bg-slate-700 text-white">
        About Section
      </section>

      <section className="h-screen flex items-center justify-center bg-slate-600 text-white">
        Projects Section
      </section>
    </>
  );
}