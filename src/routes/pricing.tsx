import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFrame, PageIntro } from "@/components/site/site-chrome";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Roomform plans and pricing" },
    { name: "description", content: "Explore Roomform products and request a plan matched to your store and catalog." },
    { property: "og:title", content: "Roomform plans and pricing" },
    { property: "og:description", content: "Find a room-first shopping experience suited to your products." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PricingPage,
});

function PricingPage() {
  return <SiteFrame><main><section className="inner-hero"><div className="page-shell"><p className="eyebrow">Simple, tailored plans</p><h1>A room for every product.</h1><p>Explore the tools, then talk with our team about what makes sense for your catalog and store.</p></div></section><section className="section"><div className="page-shell"><PageIntro eyebrow="Choose a starting point" title="A thoughtful fit for your store." body="We’ll help you scope the right plan based on your products, catalog size and goals."/><div className="pricing-grid"><article className="pricing-card"><p className="eyebrow">01 · Visualize</p><h3>Room Visualizer</h3><p>Let shoppers place your products in a photo of their own room, at true scale.</p><ul className="check-list"><li><Check size={18} />Room photo visualization</li><li><Check size={18} />Product scale and styling</li><li><Check size={18} />Storefront integration guidance</li></ul><Button asChild><Link to="/contact">Get a tailored quote <ArrowRight /></Link></Button></article><article className="pricing-card"><p className="eyebrow">02 · Guide</p><h3>AI Shopping Assistant</h3><p>Help shoppers find products that suit what they need and the room they have.</p><ul className="check-list"><li><Check size={18} />Catalog-led recommendations</li><li><Check size={18} />Product discovery from shopper intent</li><li><Check size={18} />A handoff to the room visualizer</li></ul><Button asChild variant="outline"><Link to="/contact">Get a tailored quote <ArrowRight /></Link></Button></article></div></div></section><section className="section-tight"><div className="page-shell"><div className="faq-list"><details><summary>How is pricing determined?<span>+</span></summary><p>Plans are scoped around your product catalog, expected usage, and storefront needs. Contact the team for a quote.</p></details><details><summary>Can I start with one product?<span>+</span></summary><p>Yes. The best starting point depends on the experience you want to introduce. We can discuss it together.</p></details></div></div></section></main></SiteFrame>;
}