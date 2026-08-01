import SEO from "./components/SEO/SEO";
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import CustomCursor from "./components/UI/CustomCursor";
import ScrollProgress from "./components/UI/ScrollProgress";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* SEO */}
      <SEO
        title="Talal Hassan | Front-End Developer | React Portfolio"
        description="Talal Hassan is a Front-End Developer from Pakistan specializing in React, JavaScript, Tailwind CSS, WordPress, and responsive web applications. Explore my portfolio, projects, skills, and contact information."
        keywords="Talal Hassan, Front-End Developer, React Developer, JavaScript, Tailwind CSS, WordPress Developer, Portfolio, Web Developer, Pakistan"
        image="/preview.png"
        url="https://talal-hassan-portfolio.vercel.app"
      />
      {/* Vercel Analytics */}
      <Analytics />

      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />

          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Scroll To Top Button */}
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;