import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import BrandMark from "./BrandMark";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setOpen(false);
    setPendingScroll(href);
  };

  useEffect(() => {
    if (!pendingScroll || open) return;

    const id = pendingScroll.replace("#", "");
    const target = document.getElementById(id);

    if (!target) {
      setPendingScroll(null);
      return;
    }

    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(() => {
        const headerOffset = 112;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(targetPosition - headerOffset, 0);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setPendingScroll(null);
      });

      return () => window.cancelAnimationFrame(secondFrame);
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [pendingScroll, open]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2 shrink-0 font-display text-base sm:text-xl font-bold tracking-tight">
          <BrandMark className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl object-contain shadow-[0_0_24px_rgba(126,92,255,0.25)]" />
          <span>
            <span className="gradient-text">ViOLATE</span>
            <span className="hidden sm:inline text-foreground/70 font-light ml-1">Tech</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1 sm:gap-2 shrink-0">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden relative z-[60] pointer-events-auto"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  type="button"
                  onClick={() => scrollToSection(l.href)}
                  className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
