import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@mui/material";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { NAV_LINKS } from "../utils/data";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (const s of sections) {
        if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`glass rounded-2xl px-5 py-3 flex items-center justify-between transition-all ${
            scrolled ? "shadow-soft" : ""
          }`}
        >
          <button onClick={() => go("home")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl gradient-bg grid place-items-center font-display font-bold text-white shadow-glow">
              VS
            </div>
            <span className="font-display font-semibold tracking-tight hidden sm:block">
              Vaibhav<span className="gradient-text">.dev</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-[var(--brand)]/20 to-[var(--brand-2)]/20 border border-[var(--glass-border)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1">
              <FiSun className="text-muted-foreground" size={16} />
              <Switch
                checked={theme === "dark"}
                onChange={toggle}
                size="small"
                sx={{
                  "& .MuiSwitch-thumb": { boxShadow: "0 0 8px rgba(150,100,255,0.6)" },
                }}
              />
              <FiMoon className="text-muted-foreground" size={16} />
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden w-10 h-10 grid place-items-center rounded-lg glass"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-3 flex flex-col gap-1"
            >
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium ${
                    active === l.id
                      ? "bg-gradient-to-r from-[var(--brand)]/20 to-[var(--brand-2)]/20"
                      : "hover:bg-[var(--muted)]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <div className="flex items-center justify-between px-4 py-2 mt-1 border-t border-[var(--glass-border)]">
                <span className="text-sm text-muted-foreground">Theme</span>
                <Switch checked={theme === "dark"} onChange={toggle} size="small" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
