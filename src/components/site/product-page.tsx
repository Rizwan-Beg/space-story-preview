import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomHero from "@/assets/roomform-hero.jpg";
import assistantImage from "@/assets/roomform-assistant.jpg";
import chairImage from "@/assets/roomform-chair.jpg";
import studioImage from "@/assets/roomform-studio.jpg";

export const productPages = {
  visualizer: {
    eyebrow: "Room Visualizer",
    title: "Your products, in their own room.",
    body: "Let shoppers place, style and swap products in their actual room. True scale, from one photo, right in the browser.",
    image: roomHero,
    imageAlt: "Rug and furniture styled in a sunlit living room",
    features: ["Place products at true scale from a single room photo", "Move, style and swap items around existing furniture", "Give shoppers a reason to feel confident before checkout"],
    sectionTitle: "A better sense of fit changes everything.",
  },
  assistant: {
    eyebrow: "AI Shopping Assistant",
    title: "A more thoughtful way to find the right piece.",
    body: "Help shoppers describe what they need, share their space and discover products that feel right for the room.",
    image: assistantImage,
    imageAlt: "A calm, sunlit living room with furniture and rug",
    features: ["Guide each shopper through a large catalog", "Recommend products that suit their space and style", "Hand off to the visualizer when they are ready to see it"],
    sectionTitle: "A good recommendation feels personal.",
  },
  creator: {
    eyebrow: "AI 3D Creator",
    title: "3D models, made from the photos you already have.",
    body: "Bring your product catalog into three dimensions without a 3D studio, scanning rig or drawn-out asset pipeline.",
    image: chairImage,
    imageAlt: "Moss green velvet armchair product photo",
    features: ["Start with the product images already in your catalog", "Review and refine before models are published", "Make products ready for the room visualizer and AR"],
    sectionTitle: "From product photography to in-room.",
  },
  studio: {
    eyebrow: "Design Studio",
    title: "Studio-quality imagery, without the photoshoot.",
    body: "Create polished lifestyle imagery from the product photos your team already has, with room for review and refinement.",
    image: studioImage,
    imageAlt: "Warm bedroom styled with refined bedding and wall art",
    features: ["Create lifestyle and clean product imagery", "Refine the look before it reaches your store", "Keep product content moving at catalog scale"],
    sectionTitle: "Make every product image work harder.",
  },
} as const;

type ProductPageKey = keyof typeof productPages;

export function ProductPage({ page }: { page: ProductPageKey }) {
  const content = productPages[page];
  return (
    <>
      <section className="inner-hero">
        <div className="page-shell inner-hero-grid">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p>{content.body}</p>
            <div className="hero-actions mt-6">
              <Button asChild><Link to="/contact">Book a conversation <ArrowRight /></Link></Button>
              <Button asChild variant="outline"><Link to="/demo">Try the live demo</Link></Button>
            </div>
          </div>
          <img src={content.image} alt={content.imageAlt} width={1280} height={960} />
        </div>
      </section>
      <section className="section">
        <div className="page-shell story-grid">
          <div className="story-copy">
            <p className="eyebrow">Made for the way people shop</p>
            <h2>{content.sectionTitle}</h2>
            <p>When shoppers understand how something looks, feels and fits in the home they already have, choosing the right product comes naturally.</p>
            <ul className="check-list">{content.features.map((feature) => <li key={feature}><Check size={18} />{feature}</li>)}</ul>
            <Link to="/pricing" className="text-link">Explore plans <ArrowRight size={16} /></Link>
          </div>
          <div className="story-image-wrap"><img className="story-image" src={content.image} alt={content.imageAlt} width={1280} height={960} /></div>
        </div>
      </section>
      <section className="section-tight"><div className="page-shell"><div className="cta-band"><p className="eyebrow">A clearer next step</p><h2>See how Roomform fits your catalog.</h2><p>Let’s look at your products, storefront and the shopping moments that matter most.</p><Button asChild><Link to="/contact">Talk to our team <ArrowRight /></Link></Button></div></div></section>
    </>
  );
}