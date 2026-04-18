import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
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
        <div className="mx-auto max-w-7xl px-4 py-8 flex items-center justify-center">
          <p className="text-sm text-muted-foreground text-center">
            Made with <span className="text-red-500">❤</span> by{" "}
            <span className="gradient-text font-semibold">Vaibhav Sathe</span>
            <span className="mx-2 opacity-50">|</span>
            © 2025 All Rights Reserved
          </p>
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
