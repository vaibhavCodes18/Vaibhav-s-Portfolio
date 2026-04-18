import { motion } from "framer-motion";
import { SKILLS } from "../utils/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--brand)]/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-[var(--brand)]">// 02. skills</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            My <span className="gradient-text">technical</span> toolbox
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Years of practice across the stack — from JVM internals to pixel-perfect interfaces.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {SKILLS.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 glow-ring relative overflow-hidden"
            >
              <div
                className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-3xl`}
              />
              <h3 className="font-display text-xl font-semibold mb-5 relative">{cat.category}</h3>
              <div className="space-y-4 relative">
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
