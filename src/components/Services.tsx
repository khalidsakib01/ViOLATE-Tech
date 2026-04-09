import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, Layers, Palette, Shield, Zap } from "lucide-react";

const services = [
  { icon: Brain, title: "AI Solutions", desc: "Custom AI/ML systems that automate, predict, and transform your business operations." },
  { icon: Globe, title: "Web Platforms", desc: "High-performance web applications built for scale and exceptional user experience." },
  { icon: Palette, title: "Product Design", desc: "Strategic UI/UX design that balances aesthetics with conversion-driven functionality." },
  { icon: Layers, title: "Cloud Architecture", desc: "Scalable cloud infrastructure designed for reliability, speed, and security." },
  { icon: Shield, title: "Cybersecurity", desc: "Enterprise-grade security solutions to protect your digital assets and data." },
  { icon: Zap, title: "Automation", desc: "End-to-end workflow automation that eliminates bottlenecks and boosts efficiency." },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-16 md:py-28 lg:py-36">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Services</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">What we build</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-4 sm:p-7 rounded-2xl glass hover:border-primary/30 transition-all duration-500 cursor-default"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:glow-sm transition-all duration-500">
                <s.icon size={14} className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px] text-primary" />
              </div>
              <h3 className="font-display text-sm sm:text-lg font-semibold mb-2 leading-tight">{s.title}</h3>
              <p className="text-[0.72rem] sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
