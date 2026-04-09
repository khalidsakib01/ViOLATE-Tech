import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Headphones, Rocket } from "lucide-react";

const reasons = [
  { icon: Rocket, title: "Future-Proof Tech", desc: "We build with tomorrow's standards today." },
  { icon: Award, title: "Premium Quality", desc: "Every pixel, every line of code — crafted with precision." },
  { icon: Clock, title: "Fast Delivery", desc: "Agile processes that ship products on time, every time." },
  { icon: Headphones, title: "Dedicated Support", desc: "24/7 partnership from concept through launch and beyond." },
];

const WhyUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-28 lg:py-36 scroll-mt-24 md:scroll-mt-28">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Why Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Built different</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-4 sm:p-7 rounded-2xl glass"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-5">
                <r.icon size={16} className="sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="font-display text-sm sm:text-inherit font-semibold mb-2 leading-tight">{r.title}</h3>
              <p className="text-[0.72rem] sm:text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
