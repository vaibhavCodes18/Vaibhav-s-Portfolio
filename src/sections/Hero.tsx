import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FiArrowRight, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const ROLES = [
  "MERN & Java Full Stack Developer",
  "Spring Boot Specialist",
  "React.js Engineer",
  "Problem Solver",
];

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  // GSAP background blobs
  useEffect(() => {
    if (!blobRef.current) return;
    const blobs = blobRef.current.querySelectorAll(".blob");
    blobs.forEach((b, i) => {
      gsap.to(b, {
        x: `random(-60, 60)`,
        y: `random(-40, 40)`,
        scale: `random(0.9, 1.2)`,
        duration: 6 + i * 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Animated background */}
      <div ref={blobRef} className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob absolute top-20 -left-20 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-[var(--brand)]/30 blur-[100px] sm:blur-[120px]" />
        <div className="blob absolute top-40 right-0 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full bg-[var(--brand-2)]/25 blur-[110px] sm:blur-[140px]" />
        <div className="blob absolute bottom-0 left-1/3 w-[250px] sm:w-[380px] h-[250px] sm:h-[380px] rounded-full bg-[var(--brand-3)]/25 blur-[100px] sm:blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        {/* Left — text content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="gradient-text">Vaibhav Sathe</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-4 text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium min-h-[2rem]"
          >
            <span className="typing-caret">{text}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-muted-foreground"
          >
            I craft scalable backend systems with Java & Spring Boot and ship beautiful, performant
            interfaces with React. Passionate about clean architecture, REST APIs and end-to-end
            problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl gradient-bg text-white font-medium shadow-glow hover:shadow-[0_0_80px_-10px_var(--brand)] transition-all text-sm sm:text-base"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl glass font-medium hover:scale-[1.02] transition-transform text-sm sm:text-base"
            >
              <FiMail /> Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-muted-foreground"
          >
            <a
              href="https://github.com/vaibhavCodes18"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-sathe89/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <span className="text-xs">— Let's connect</span>
          </motion.div>
        </div>

        {/* Right — code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="relative animate-float max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-4 gradient-bg opacity-25 blur-2xl rounded-3xl" />
            <div className="relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 glow-ring noise overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">vaibhav.tsx</span>
              </div>
              <pre className="text-[11px] sm:text-[13px] leading-relaxed font-mono text-foreground/90 overflow-x-auto whitespace-pre-wrap break-words sm:whitespace-pre">
                {`const developer = {
  name: "Vaibhav Sathe",
  role: "Full Stack Developer",
  stack: {
    backend:  ["Java", "Spring Boot", "JPA"],
    frontend: ["React", "Tailwind", "JS"],
    database: ["MySQL", "MongoDB", "PostgreSQL"],
    ORM / ODM: ["Hibernate", "Prisma"]
  },
  focus: "Scalable systems · Clean code",
  available: true,
};`}
              </pre>
              <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {["Java", "Spring Boot", "React", "Node.js", "MongoDB"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[var(--glass-border)] bg-[var(--background)]/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
