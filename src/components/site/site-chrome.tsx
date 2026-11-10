import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const productLinks = [
  { to: "/product/visualizer" as const, label: "Room Visualizer", note: "Products in a shopper’s own room" },
  { to: "/product/ai-shopping-assistant" as const, label: "AI Shopping Assistant", note: "Find the right fit from a catalog" },
  { to: "/features/ai-3d-creator" as const, label: "AI 3D Creator", note: "Make 3D models from product photos" },
  { to: "/product/ai-product-photography" as const, label: "Design Studio", note: "Lifestyle images, without a shoot" },
];

function MenuGroup({ label }: { label: string }) {
  return (
    <details>
      <summary>{label}<ChevronDown size={13} /></summary>
      <div className="nav-menu">
        {productLinks.map((item) => (
          <Link key={item.label} to={item.to}>
            <strong className="block">{item.label}</strong>
            <span className="mt-1 block text-xs font-normal text-muted-foreground">{item.note}</span>
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav" aria-label="Main navigation">
      <Link to="/" className="nav-brand" aria-label="Roomform home">
        <span className="brand-mark">r</span>
        <span>roomform</span>
      </Link>
      <nav className={`site-nav-links${open ? " is-open" : ""}`}>
        <MenuGroup label="Features" />
        <MenuGroup label="Products" />
        <Link to="/demo">Live demo</Link>
        <Link to="/pricing">Pricing</Link>
        <Button asChild className="nav-cta">
          <Link to="/contact">Talk to sales <ArrowRight size={15} /></Link>
        </Button>
      </nav>
      <Button
        className="mobile-toggle"
        variant="ghost"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </Button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div>
          <Link to="/" className="nav-brand text-primary-foreground">
            <span className="brand-mark">r</span><span>roomform</span>
          </Link>
          <p>Good decisions begin with seeing things in the right place.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/product/visualizer">Visualizer</Link>
          <Link to="/product/ai-shopping-assistant">Shopping assistant</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/demo">Try the demo</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}

export function PageIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}