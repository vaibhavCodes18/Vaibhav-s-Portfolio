import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCpu,
  FiBriefcase,
  FiFolder,
  FiSend,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";
import { NAV_LINKS } from "../utils/data";
import { useTheme } from "../hooks/useTheme";

const NAV_ICONS: Record<string, React.ReactNode> = {
  home: <FiHome size={15} />,
  about: <FiUser size={15} />,
  skills: <FiCpu size={15} />,
  experience: <FiBriefcase size={15} />,
  projects: <FiFolder size={15} />,
  contact: <FiSend size={15} />,
};

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 140;
      for (const s of sections) {
        if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 sm:py-3" : "py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div
          className={`relative rounded-2xl px-3.5 sm:px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-[var(--glass)] backdrop-blur-2xl border border-[var(--glass-border)] shadow-2xl shadow-purple-900/10 dark:shadow-purple-950/30"
              : "bg-[var(--glass)]/80 backdrop-blur-xl border border-[var(--glass-border)] shadow-lg"
          }`}
        >
          {/* Logo Brand */}
          <button
            onClick={() => go("home")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Vaibhav Sathe Portfolio Home"
          >
            {/* Animated emblem badge */}
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-3)] opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300 animate-pulse" />
              <div className="relative w-10 h-10 rounded-xl bg-[var(--background)] border border-[var(--glass-border)] flex items-center justify-center shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/20 via-transparent to-[var(--brand-2)]/20" />
                <span className="font-display text-xs font-extrabold gradient-text transition-all transform scale-110">
                  VS
                </span>
              </div>
              {/* Online status indicator dot */}
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[var(--background)]" />
              </span>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-foreground group-hover:text-[var(--brand)] transition-colors">
                  Vaibhav
                </span>
                <span className="text-[11px] px-1.5 py-0.5 rounded-md font-mono font-semibold bg-gradient-to-r from-[var(--brand)]/20 to-[var(--brand-2)]/20 border border-[var(--brand)]/30 text-[var(--brand)] shadow-sm">
                  .dev
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[var(--background)]/50 p-1.5 rounded-xl border border-[var(--glass-border)] backdrop-blur-md">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-[var(--muted)]/50"
                  }`}
                >
                  <span className={isActive ? "text-[var(--brand)]" : "text-muted-foreground/80"}>
                    {NAV_ICONS[l.id]}
                  </span>
                  <span>{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-[var(--brand)]/15 via-[var(--brand-2)]/20 to-[var(--brand-3)]/15 border border-[var(--brand)]/30 shadow-[0_0_15px_-3px_var(--brand)]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Custom Modern Theme Switcher */}
            <button
              onClick={toggle}
              className="relative p-2.5 rounded-xl glass hover:bg-[var(--muted)] border border-[var(--glass-border)] text-foreground hover:scale-105 transition-all duration-200 group focus:outline-none"
              aria-label="Toggle Theme"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <div className="relative w-4.5 h-4.5 flex items-center justify-center">
                <FiSun
                  className={`absolute transition-all duration-500 transform ${
                    theme === "dark"
                      ? "opacity-0 rotate-90 scale-50"
                      : "opacity-100 rotate-0 scale-100 text-amber-500"
                  }`}
                  size={18}
                />
                <FiMoon
                  className={`absolute transition-all duration-500 transform ${
                    theme === "dark"
                      ? "opacity-100 rotate-0 scale-100 text-indigo-400"
                      : "opacity-0 -rotate-90 scale-50"
                  }`}
                  size={18}
                />
              </div>
            </button>

            {/* Quick Action CTA Button ("Hire Me") */}
            <button
              onClick={() => go("contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl gradient-bg text-white font-medium text-xs shadow-glow hover:shadow-[0_0_25px_-5px_var(--brand)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Hire Me</span>
              <FiArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2.5 rounded-xl glass hover:bg-[var(--muted)] border border-[var(--glass-border)] text-foreground transition-all focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden mt-3 p-3 glass rounded-2xl border border-[var(--glass-border)] shadow-2xl flex flex-col gap-1.5"
            >
              {NAV_LINKS.map((l, idx) => {
                const isActive = active === l.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    key={l.id}
                    onClick={() => go(l.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[var(--brand)]/20 to-[var(--brand-2)]/20 text-foreground border border-[var(--brand)]/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-[var(--muted)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? "text-[var(--brand)]" : ""}>
                        {NAV_ICONS[l.id]}
                      </span>
                      <span>{l.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] shadow-[0_0_8px_var(--brand)]" />
                    )}
                  </motion.button>
                );
              })}

              <div className="pt-2 mt-1 border-t border-[var(--glass-border)] flex items-center justify-between px-2">
                <button
                  onClick={() => go("contact")}
                  className="w-full py-2.5 rounded-xl gradient-bg text-white font-medium text-xs shadow-glow flex items-center justify-center gap-2"
                >
                  <span>Get In Touch</span>
                  <FiArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

