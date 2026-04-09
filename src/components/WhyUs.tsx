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
    <section className="py-28 md:py-36">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Why Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Built different</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-7 rounded-2xl glass"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <r.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
