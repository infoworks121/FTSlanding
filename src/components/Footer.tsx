import ftsLogo from "@/assets/fts_logo.jpeg";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={ftsLogo} alt="FTS Logo" className="h-8 w-8 rounded-lg object-cover" />
          <span className="font-display font-bold text-gradient">FTS – Farm & Tech Service</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#system-flow" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} FTS (Farm & Tech Service). All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
