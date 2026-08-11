import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "../utils/data";
import {
  Code2,
  Server,
  Layers,
  Layout,
  Database,
  Cloud,
  Sparkles,
  Terminal,
  SlidersHorizontal,
} from "lucide-react";

const getCategoryIcon = (category: string) => {
  const name = category.toLowerCase();
  if (name.includes("language")) return <Code2 className="w-5 h-5" />;
  if (name.includes("backend") || name.includes("java")) return <Server className="w-5 h-5" />;
  if (name.includes("mern") || name.includes("stack")) return <Layers className="w-5 h-5" />;
  if (name.includes("frontend")) return <Layout className="w-5 h-5" />;
  if (name.includes("database")) return <Database className="w-5 h-5" />;
  if (name.includes("cloud") || name.includes("devops")) return <Cloud className="w-5 h-5" />;
  return <Terminal className="w-5 h-5" />;
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...SKILLS.map((s) => s.category)];

  const filteredSkills =
    activeFilter === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeFilter);

  const totalSkillsCount = SKILLS.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );

  return (
    <section id="skills" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full bg-gradient-to-tr from-[var(--brand)]/20 via-[var(--brand-2)]/10 to-transparent blur-[120px] sm:blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[var(--brand)]/10 text-[var(--brand)] border border-[var(--brand)]/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// 02. skills & stack</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              My <span className="gradient-text">technical</span> toolbox
            </h2>
            <p className="mt-3 text-muted-foreground text-base sm:text-lg">
              Years of hands-on engineering across the entire software spectrum — from JVM internals and distributed backends to responsive web architectures.
            </p>
          </motion.div>

          {/* Quick Stats Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="self-start md:self-end flex items-center gap-4 glass px-4 py-2.5 rounded-2xl border border-white/10 dark:border-white/5 glow-ring"
          >
            <div className="p-2 rounded-xl bg-[var(--brand)]/15 text-[var(--brand)]">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-mono">Proficiency Overview</div>
              <div className="text-sm font-semibold flex items-center gap-2">
                <span>{totalSkillsCount} Key Technologies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-2)]" />
                <span className="text-[var(--brand-2)] font-mono text-xs">{SKILLS.length} Domains</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-white font-semibold shadow-lg shadow-[var(--brand)]/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Auto-Adjusting Inner Content Masonry Grid */}
        <div className="mt-8 sm:mt-10 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((cat, idx) => {
              const avgLevel = Math.round(
                cat.items.reduce((acc, curr) => acc + curr.level, 0) /
                  cat.items.length
              );

              return (
                <motion.div
                  key={cat.category}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="break-inside-avoid mb-6 glass rounded-2xl p-5 sm:p-6 glow-ring relative overflow-hidden group border border-white/10 dark:border-white/5 hover:border-[var(--brand)]/40 transition-all duration-300 shadow-xl"
                >
                  {/* Subtle Background Glow Accent */}
                  <div
                    className={`absolute -top-24 -right-24 w-52 h-52 rounded-full bg-gradient-to-br ${cat.color} opacity-15 blur-3xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-5 relative z-10 pb-4 border-b border-white/10 dark:border-white/5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-md shadow-[var(--brand)]/10`}
                      >
                        {getCategoryIcon(cat.category)}
                      </div>
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">
                          {cat.category}
                        </h3>
                        <span className="text-xs text-muted-foreground font-mono">
                          {cat.items.length} {cat.items.length === 1 ? "skill" : "skills"}
                        </span>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-white/5 dark:bg-white/5 border border-white/10 text-xs font-mono text-[var(--brand-2)] font-semibold">
                      {avgLevel}% avg
                    </div>
                  </div>

                  {/* Skill Items List (Tight Auto-fit) */}
                  <div className="space-y-3.5 relative z-10">
                    {cat.items.map((s, i) => (
                      <div key={s.name} className="group/item">
                        <div className="flex justify-between items-center text-sm mb-1.5">
                          <span className="font-medium group-hover/item:text-[var(--brand-2)] transition-colors duration-200">
                            {s.name}
                          </span>
                          <span className="text-xs font-mono text-muted-foreground font-semibold">
                            {s.level}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-black/10 dark:bg-white/5 overflow-hidden p-0.5 border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.1,
                              delay: 0.1 + i * 0.06,
                              ease: [0.25, 1, 0.5, 1],
                            }}
                            className={`h-full bg-gradient-to-r ${cat.color} rounded-full relative group-hover/item:brightness-110 transition-all duration-300`}
                          >
                            {/* Glowing Leading Edge Dot */}
                            <div className="absolute right-0 top-0 bottom-0 w-2 rounded-full bg-white/80 blur-[1px] shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

