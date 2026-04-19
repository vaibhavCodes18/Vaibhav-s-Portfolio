import { motion } from "framer-motion";
import { FiDownload, FiCpu, FiLayers, FiZap } from "react-icons/fi";

const HIGHLIGHTS = [
  { icon: FiCpu, title: "Backend Engineering", desc: "Java, Spring Boot, REST APIs & secure auth flows." },
  { icon: FiLayers, title: "Clean Architecture", desc: "Layered design — Controller, Service, Repository." },
  { icon: FiZap, title: "Problem Solving", desc: "Scalable systems and pragmatic engineering." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-[var(--brand)]">// 01. about me</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Building <span className="gradient-text">scalable</span> systems, end to end.
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a <span className="text-foreground font-medium">MERN & Java Full Stack Developer</span>{" "}
              with a strong focus on backend engineering. I love designing reliable REST APIs, modeling
              clean domains and shipping interfaces that feel effortless.
            </p>
            <p>
              My toolbox spans <span className="text-foreground font-medium">Spring Boot, JPA/Hibernate,
                MySQL & MongoDB</span> on the backend, and{" "}
              <span className="text-foreground font-medium">React, Tailwind & Node.js</span> on the
              frontend. I care deeply about clean architecture, security and developer experience.
            </p>
            <p>
              Whether it's a role-based platform, an AI-powered tool or a simple CRUD app, I aim to
              build software that's <span className="text-foreground font-medium">scalable, maintainable
                and a joy to use</span>.
            </p>

            <div className="pt-4">
              <a
                href="/resume/VaibhavResume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium shadow-glow hover:scale-[1.02] transition-transform"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-1 gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 flex gap-4 items-start glow-ring"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg grid place-items-center text-white shrink-0 shadow-glow">
                  <h.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">{h.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
