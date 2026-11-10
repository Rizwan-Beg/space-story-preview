import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoomVisualizer } from "@/components/site/visualizer";
import { SiteFrame } from "@/components/site/site-chrome";

export const Route = createFileRoute("/demo")({
  head: () => ({ meta: [
    { title: "Try the Roomform room visualizer" },
    { name: "description", content: "Choose a category, upload a room photo, and explore a home product preview." },
    { property: "og:title", content: "Try the Roomform room visualizer" },
    { property: "og:description", content: "See a home product in a room before making a decision." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DemoPage,
});

function DemoPage() {
  return <SiteFrame><main><section className="inner-hero"><div className="page-shell"><p className="eyebrow">Roomform preview</p><h1>See your room before you buy.</h1><p>Choose a category, upload a photo of your room or start with a sample, and imagine a new piece in place.</p><div className="hero-actions mt-6"><Button asChild><a href="#categories">Try it live <ArrowRight /></a></Button><Button asChild variant="outline"><Link to="/contact">Talk to our team</Link></Button></div></div></section><section className="section"><div className="page-shell"><RoomVisualizer /></div></section><section className="section-tight"><div className="page-shell"><div className="faq-list"><details><summary>What can I preview?<span>+</span></summary><p>Explore furniture, rugs, flooring, wallpaper and artwork in the room preview.</p></details><details><summary>Can I use my own room photo?<span>+</span></summary><p>Yes. Upload an image from your device in the interactive preview. The demo processes the photo in your browser and does not save it.</p></details></div></div></section></main></SiteFrame>;
}