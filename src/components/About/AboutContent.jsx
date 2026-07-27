import Button from "../UI/Button";

export default function AboutContent() {
  return (
    <div className="flex-1">
      <p className="text-blue-500 uppercase tracking-widest font-semibold">
        About Me
      </p>

      <h2 className="text-5xl font-black mt-4">
        Turning Ideas into Websites
      </h2>

      <p className="mt-8 text-slate-400 leading-8">
        I'm Talal Hassan, a Front-End Developer passionate
        about building modern, responsive, and user-friendly
        websites. I enjoy creating clean interfaces with
        React, JavaScript, WordPress, and modern web
        technologies.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 text-slate-300">
        <p>✔ BS Student</p>
        <p>✔ React Developer</p>
        <p>✔ WordPress Developer</p>
        <p>✔ Amazon Research</p>
      </div>

      <div className="mt-10">
        <Button href="/resume.pdf">
          Download Resume
        </Button>
      </div>
    </div>
  );
}