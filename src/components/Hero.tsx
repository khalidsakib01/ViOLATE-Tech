import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[800px] sm:h-[800px] bg-primary/[0.03] rounded-full blur-[80px] sm:blur-[150px] pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-2 text-[0.68rem] leading-tight sm:px-0 sm:text-base uppercase tracking-[0.18em] sm:tracking-[0.35em] text-foreground/70 font-medium"
          >
            Technology - Innovation - Impact
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
