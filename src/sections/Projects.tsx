import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiArrowUpRight } from "react-icons/fi";
import { PROJECTS } from "../utils/data";

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const project = active !== null ? PROJECTS[active] : null;

  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-[var(--brand)]">// 04. projects</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg">
            A selection of full-stack projects spanning Spring Boot, MERN and AI integrations.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setActive(i)}
              className="group cursor-pointer glass rounded-2xl p-5 sm:p-6 glow-ring relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full gradient-bg opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />

              <div className="flex items-start justify-between gap-4 relative">
                <div>
                  <span className="text-xs font-mono text-[var(--brand)]">{p.tag}</span>
                  <h3 className="font-display text-lg sm:text-xl font-bold mt-1 group-hover:text-[var(--brand)] transition-colors">
                    {p.title}
                  </h3>
                </div>
                <FiArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all shrink-0"
                />
              </div>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed relative">
                {p.description}
              </p>

              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2 relative">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[var(--glass-border)] bg-[var(--background)]/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal overlay — custom, no MUI Dialog */}
      <AnimatePresence>
        {active !== null && project && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 relative glow-ring bg-card text-card-foreground border border-[var(--glass-border)]"
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-lg text-foreground hover:bg-[var(--muted)] transition"
                >
                  <FiX size={18} />
                </button>
                <span className="text-xs font-mono text-[var(--brand)]">{project.tag}</span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mt-1 text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {project.details}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[var(--brand)]/20 to-[var(--brand-2)]/20 border border-[var(--glass-border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl glass font-medium hover:scale-[1.02] transition text-sm"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl gradient-bg text-white font-medium shadow-glow hover:scale-[1.02] transition text-sm"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
