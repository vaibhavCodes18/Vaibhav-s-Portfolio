import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "../hooks/useTheme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Sathe — MERN & Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Vaibhav Sathe — MERN & Java Full Stack Developer specializing in Spring Boot, React.js and scalable backend systems.",
      },
      { property: "og:title", content: "Vaibhav Sathe — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Java, Spring Boot, React, Node.js. Building scalable systems with clean architecture.",
      },
      { name: "twitter:title", content: "Vaibhav Sathe — Full Stack Developer" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <Loader />
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
