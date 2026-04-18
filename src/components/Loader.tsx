import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full border-2 border-transparent"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--brand), var(--brand-2), var(--brand-3), var(--brand))",
                WebkitMask: "radial-gradient(circle, transparent 60%, black 62%)",
                mask: "radial-gradient(circle, transparent 60%, black 62%)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center font-display font-bold text-lg gradient-text">
              VS
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
