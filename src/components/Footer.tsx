import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="relative border-t border-[var(--glass-border)] mt-20">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Designed & Developed by{" "}
            <span className="gradient-text font-semibold">Vaibhav Sathe</span>
          </p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 grid place-items-center rounded-lg glass hover:text-foreground transition"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 grid place-items-center rounded-lg glass hover:text-foreground transition"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="mailto:vaibhav@example.com"
              className="w-9 h-9 grid place-items-center rounded-lg glass hover:text-foreground transition"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full gradient-bg text-white grid place-items-center shadow-glow hover:scale-110 transition"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
