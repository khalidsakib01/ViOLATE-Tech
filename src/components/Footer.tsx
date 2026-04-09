const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="font-display text-sm font-bold tracking-tight">
        <span className="gradient-text">ViOLATE</span>
        <span className="text-foreground/70 font-light ml-1">Tech</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} ViOLATE Tech. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Twitter", "LinkedIn", "GitHub"].map((s) => (
          <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
