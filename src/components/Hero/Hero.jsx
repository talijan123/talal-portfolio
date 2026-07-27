import Button from "../UI/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          min-h-screen
          flex
          items-center
          justify-between
          px-6
        "
      >
        <div>
          <div className="max-w-xl">
            <p className="text-blue-500 font-medium">
              👋 Hello, I'm
            </p>

            <h1 className="text-6xl font-bold mt-4">
              Talal Hassan
            </h1>

            <h2 className="text-2xl text-gray-400 mt-4">
              Front-End Developer
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              I build modern, responsive, and user-friendly web
              applications using React, JavaScript, and WordPress.
            </p>
            <section className="min-h-screen flex justify-center items-center gap-6">

              <Button>
                View Projects
              </Button>

              <Button variant="secondary">
                Download CV
              </Button>

              <Button variant="outline">
                Contact Me
              </Button>

            </section>
          </div>
        </div>

        <div>
          <div
            className="
    w-96
    h-96
    rounded-full
    border-4
    border-blue-500
    flex
    items-center
    justify-center
    text-gray-400
    text-xl
  "
          >
            Your Photo
          </div>
        </div>
      </div>
    </section>
  );
}