import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Globe, Code, Layers } from "lucide-react";

const stats = [
  { icon: Zap, title: "Innovation First" },
  { icon: Globe, title: "Global Reach" },
  { icon: Code, title: "Clean Code" },
  { icon: Layers, title: "Scalable Systems" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 md:py-36" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
            Who we are
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/30 border border-border/40"
            >
              <item.icon size={28} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80 text-center">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
