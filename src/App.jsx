import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="h-screen flex justify-center items-center bg-slate-800 text-white"
      >
        <h1 className="text-5xl">Home Section</h1>
      </section>

      <section
        id="about"
        className="h-screen flex justify-center items-center bg-slate-700 text-white"
      >
        <h1 className="text-5xl">About Section</h1>
      </section>

      <section
        id="skills"
        className="h-screen flex justify-center items-center bg-slate-600 text-white"
      >
        <h1 className="text-5xl">Skills Section</h1>
      </section>

      <section
        id="projects"
        className="h-screen flex justify-center items-center bg-slate-500 text-white"
      >
        <h1 className="text-5xl">Projects Section</h1>
      </section>

      <section
        id="contact"
        className="h-screen flex justify-center items-center bg-slate-400 text-black"
      >
        <h1 className="text-5xl">Contact Section</h1>
      </section>
    </>
  );
}