import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (form.message.trim().length < 10) errs.message = "At least 10 characters";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[var(--brand-2)]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--brand)]/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-[var(--brand)]">// 05. contact</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Let's build <span className="gradient-text">something great</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Have a project in mind, an opportunity, or just want to say hi? My inbox is open.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="mailto:vaibhav@example.com"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform glow-ring"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg grid place-items-center text-white shadow-glow">
                <FiMail size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">vaibhav@example.com</div>
              </div>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--muted)] grid place-items-center">
                <FiGithub size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="font-medium">@vaibhavsathe</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--muted)] grid place-items-center">
                <FiLinkedin size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="font-medium">Vaibhav Sathe</div>
              </div>
            </a>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 space-y-4 glow-ring"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Your name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label="Email address"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="mt-1.5 w-full rounded-xl bg-[var(--background)]/50 border border-[var(--glass-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30 transition resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl gradient-bg text-white font-medium shadow-glow hover:scale-[1.02] transition disabled:opacity-70"
            >
              {sent ? (
                <>
                  <FiCheck /> Message sent
                </>
              ) : (
                <>
                  <FiSend /> Send message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl bg-[var(--background)]/50 border border-[var(--glass-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30 transition"
        placeholder={label}
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
