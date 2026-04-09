import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "NovaTech AI Platform", category: "AI / ML", desc: "Enterprise AI analytics platform processing 10M+ data points daily." },
  { title: "Helix Cloud Suite", category: "Cloud", desc: "Multi-region cloud infrastructure serving 50+ countries." },
  { title: "Lumina Design System", category: "Design", desc: "Comprehensive design system adopted by 200+ developers." },
  { title: "Zenith Security Hub", category: "Security", desc: "Real-time threat detection and response platform." },
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-16 md:py-28 lg:py-36 scroll-mt-24 md:scroll-mt-28">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Selected work</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(selected === i ? null : i)}
              className="group relative rounded-2xl glass overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[1/1] sm:aspect-[16/10] bg-gradient-to-br from-primary/5 to-accent/5 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl sm:text-4xl font-bold text-foreground/5">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} className="text-primary" />
                </div>
              </div>
              <div className="p-3 sm:p-6">
                <p className="text-xs text-primary mb-1">{p.category}</p>
                <h3 className="font-display text-sm sm:text-inherit font-semibold leading-tight">{p.title}</h3>
                <p className="text-[0.72rem] sm:text-sm text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
