import { motion } from "framer-motion";
import { SKILLS } from "../utils/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-[var(--brand)]/10 blur-[100px] sm:blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-[var(--brand)]">// 02. skills</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="gradient-text">technical</span> toolbox
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg">
            Years of practice across the stack — from JVM internals to pixel-perfect interfaces.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SKILLS.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-5 sm:p-6 glow-ring relative overflow-hidden"
            >
              <div
                className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-3xl`}
              />
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-4 sm:mb-5 relative">{cat.category}</h3>
              <div className="space-y-3 sm:space-y-4 relative">
                {cat.items.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[var(--muted)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
