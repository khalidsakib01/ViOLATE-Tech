import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative scroll-mt-24 md:scroll-mt-28">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Let's build something
            <span className="gradient-text"> extraordinary.</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-md mx-auto">
            Have a project in mind? Drop us a message and we'll get back within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-xl mx-auto mt-12 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-secondary/30 border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-secondary/30 border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            required
            className="w-full px-5 py-3.5 rounded-xl bg-secondary/30 border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            {submitted ? "Message Sent ✓" : (
              <>Send Message <ArrowUpRight size={15} /></>
            )}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground/50">
            hello@violatetech.com · Global · Remote First
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
