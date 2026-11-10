import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFrame } from "@/components/site/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Talk with the Roomform team" },
    { name: "description", content: "Tell us about your store and explore a room-first product experience." },
    { property: "og:title", content: "Talk with the Roomform team" },
    { property: "og:description", content: "Share what you sell and what you want shoppers to experience." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return <SiteFrame><main><section className="inner-hero"><div className="page-shell"><p className="eyebrow">Let’s talk</p><h1>Bring spatial confidence to your store.</h1><p>Tell us a little about your store and what you’re looking to make possible. We’ll help you find a good next step.</p></div></section><section className="section"><div className="page-shell story-grid"><div className="story-copy"><p className="eyebrow">A working session</p><h2>Make the conversation useful.</h2><ul className="check-list"><li><Check size={18} />See how your products can appear in the visualizer</li><li><Check size={18} />Explore a rollout that suits your catalog and storefront</li><li><Check size={18} />Talk through your goals and shopper experience</li></ul></div><form className="demo-controls" onSubmit={onSubmit}><h2>Tell us about your store</h2>{submitted ? <div className="form-success" role="status">Thanks for sharing. This preview form is local only; no message has been sent. Connect a contact service to receive submissions.</div> : <><div className="form-grid"><label>Name<input name="name" required autoComplete="name" /></label><label>Work email<input name="email" type="email" required autoComplete="email" /></label><label className="form-wide">Store or company<input name="store" autoComplete="organization" /></label><label className="form-wide">What would you like to explore?<textarea name="message" /></label></div><Button type="submit">Send an enquiry <ArrowRight /></Button><p className="m-0 text-xs text-muted-foreground">This preview form does not send or store your details.</p></>}</form></div></section></main></SiteFrame>;
}