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
        x: `random(-80, 80)`,
        y: `random(-60, 60)`,
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
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated background */}
      <div ref={blobRef} className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob absolute top-20 -left-20 w-[420px] h-[420px] rounded-full bg-[var(--brand)]/30 blur-[120px]" />
        <div className="blob absolute top-40 right-0 w-[480px] h-[480px] rounded-full bg-[var(--brand-2)]/25 blur-[140px]" />
        <div className="blob absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-[var(--brand-3)]/25 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7">
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
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="gradient-text">Vaibhav Sathe</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-xl sm:text-2xl text-muted-foreground font-medium h-8"
          >
            <span className="typing-caret">{text}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            I craft scalable backend systems with Java & Spring Boot and ship beautiful, performant
            interfaces with React. Passionate about clean architecture, REST APIs and end-to-end
            problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium shadow-glow hover:shadow-[0_0_80px_-10px_var(--brand)] transition-all"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:scale-[1.02] transition-transform"
            >
              <FiMail /> Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <FiLinkedin size={20} />
            </a>
            <span className="text-xs">— Let's connect</span>
          </motion.div>
        </div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 gradient-bg opacity-30 blur-2xl rounded-3xl" />
            <div className="relative glass rounded-3xl p-6 glow-ring noise overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">vaibhav.tsx</span>
              </div>
              <pre className="text-[13px] leading-relaxed font-mono text-foreground/90 overflow-x-auto">
{`const developer = {
  name: "Vaibhav Sathe",
  role: "Full Stack Developer",
  stack: {
    backend:  ["Java", "Spring Boot", "JPA"],
    frontend: ["React", "Tailwind", "JS"],
    database: ["MySQL", "MongoDB"],
  },
  focus: "Scalable systems · Clean code",
  available: true,
};`}
              </pre>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Java", "Spring Boot", "React", "Node.js", "MongoDB"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-[var(--glass-border)] bg-[var(--background)]/40"
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
