import { motion } from "framer-motion";

const reviews = [
  { name: "Sarah Chen", handle: "@sarachen", text: "ViOLATE Tech completely transformed our platform. The attention to detail is unmatched.", initials: "SC" },
  { name: "Marcus Wright", handle: "@mwright", text: "Working with them felt like having an elite engineering team embedded in our company.", initials: "MW" },
  { name: "Elena Vasquez", handle: "@evasquez", text: "From concept to launch in 6 weeks. The speed and quality blew us away.", initials: "EV" },
  { name: "James Porter", handle: "@jporter", text: "Their AI solutions saved us 200+ hours per month. ROI was immediate.", initials: "JP" },
  { name: "Anika Patel", handle: "@apatel", text: "The best tech partner we've ever worked with. Period.", initials: "AP" },
  { name: "David Kim", handle: "@dkim", text: "They don't just build products — they build competitive advantages.", initials: "DK" },
];

const ReviewCard = ({ r }: { r: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-[240px] sm:w-[320px] p-4 sm:p-6 rounded-2xl glass hover:border-primary/20 transition-all duration-500">
    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4 sm:mb-5">"{r.text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[11px] font-semibold text-primary">
        {r.initials}
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium text-foreground">{r.name}</p>
        <p className="text-xs text-primary/60">{r.handle}</p>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  // Duplicate for seamless loop
  const allReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-16 md:py-28 lg:py-36 overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="container mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">What People Say</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Trusted by builders</h2>
        </motion.div>
      </div>

      {/* Marquee row - scrolls right to left */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex gap-3 sm:gap-4 animate-marquee">
          {allReviews.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
