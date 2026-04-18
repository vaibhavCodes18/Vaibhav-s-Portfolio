import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { EXPERIENCE } from "../utils/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-[var(--brand)]">// 03. experience</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            My <span className="gradient-text">journey</span> so far
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          {/* center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[var(--brand)]/40 to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`relative md:grid md:grid-cols-2 md:gap-10 mb-10 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* dot */}
              <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg shadow-glow ring-4 ring-[var(--background)]" />

              <div className={`${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6 glow-ring">
                  <div className="flex items-center gap-2 text-[var(--brand)] text-sm font-medium mb-2 md:justify-start">
                    <FiBriefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2 md:justify-start">
                    <FiCalendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground text-left">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-[var(--brand)] mt-1">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 md:justify-start">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[var(--brand)]/20 to-[var(--brand-2)]/20 border border-[var(--glass-border)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
