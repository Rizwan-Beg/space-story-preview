import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFrame, PageIntro } from "@/components/site/site-chrome";
import roomHero from "@/assets/roomform-hero.jpg";
import assistantImage from "@/assets/roomform-assistant.jpg";
import chairImage from "@/assets/roomform-chair.jpg";
import studioImage from "@/assets/roomform-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roomform — your products, in their own room" },
      { name: "description", content: "A room visualizer and thoughtful shopping tools that help people see home products in their own space." },
      { property: "og:title", content: "Roomform — your products, in their own room" },
      { property: "og:description", content: "Help shoppers find the right piece and see it in their own home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteFrame>
      <main>
        <section className="hero-home">
          <img className="hero-home-image" src={roomHero} alt="Sunlit living room with an area rug, sofa and natural furnishings" width={1728} height={1152} />
          <div className="hero-copy">
            <div className="hero-copy-inner reveal-up">
              <p className="eyebrow text-primary-foreground">Roomform · spatial shopping</p>
              <h1>Your products, in their own room.</h1>
              <p>A room visualizer for rugs, furniture, flooring, wallpaper and wall art, at true size from one photo.</p>
              <div className="hero-actions">
                <Button asChild size="lg" className="button-light"><Link to="/contact">Book a demo <ArrowRight /></Link></Button>
                <Button asChild size="lg" variant="outline" className="button-glass"><Link to="/demo">Try the live demo</Link></Button>
              </div>
            </div>
          </div>
          <span className="hero-index">01 / A room, restyled</span>
        </section>

        <section className="trust-strip">
          <p>Good decisions start with seeing things in the right place.</p>
          <div className="trust-items" aria-label="Home retail categories"><span>Furniture</span><span>Rugs</span><span>Flooring</span><span>Wallpaper</span><span>Wall art</span></div>
        </section>

        <section className="section">
          <div className="page-shell story-grid">
            <div className="story-copy">
              <p className="eyebrow">More than a product photo</p>
              <h2>A product photo can’t show how it fits.</h2>
              <p>Shoppers want to know how a piece will look with what they already own. Roomform brings their room into the decision—so they can move from imagining to knowing.</p>
              <ul className="check-list">
                <li><Check size={18} />Build 3D models from the product photos you already have</li>
                <li><Check size={18} />Show products at true scale inside a shopper’s own room</li>
                <li><Check size={18} />Bring a considered visual experience to your storefront</li>
              </ul>
              <Link to="/product/visualizer" className="text-link">How the visualizer works <ArrowRight size={16} /></Link>
            </div>
            <div className="story-image-wrap"><img className="story-image" src={roomHero} alt="A patterned rug styled with furniture in a bright living room" width={1728} height={1152} loading="lazy" /></div>
          </div>
        </section>

        <section className="section-tight metrics-band">
          <div className="page-shell metric-grid">
            <div><strong>5+ min</strong><span>Average visualizer session across retailers</span></div>
            <div><strong>2 in 3</strong><span>Shoppers who use a photo of their own room</span></div>
            <div><strong>5.0</strong><span>Shopify App Store rating</span></div>
          </div>
        </section>

        <section className="section">
          <div className="page-shell">
            <PageIntro eyebrow="One platform, every step" title="From browsing to feeling sure." body="Help shoppers find the right product, see it in their room, and make a confident choice." />
            <div className="product-grid">
              <article className="product-card">
                <img src={assistantImage} alt="A calm living room, ready to make your own" width={1280} height={960} loading="lazy" />
                <div className="product-card-copy"><p className="eyebrow">01 · Discover</p><h3>AI Shopping Assistant</h3><p>Guide each shopper from a big catalog to the pieces that suit their space and style.</p><Link to="/product/ai-shopping-assistant" className="text-link">Explore the assistant <ArrowRight size={16} /></Link></div>
              </article>
              <article className="product-card">
                <img src={roomHero} alt="A rug and furniture placed in a sunlit room" width={1728} height={1152} loading="lazy" />
                <div className="product-card-copy"><p className="eyebrow">02 · Visualize</p><h3>Room Visualizer</h3><p>Place products, change styles and see how they work together in the shopper’s own room.</p><Link to="/product/visualizer" className="text-link">Explore the visualizer <ArrowRight size={16} /></Link></div>
              </article>
              <article className="product-card">
                <img src={chairImage} alt="Sculptural moss velvet lounge chair" width={1280} height={960} loading="lazy" />
                <div className="product-card-copy"><p className="eyebrow">03 · Create</p><h3>AI 3D Creator</h3><p>Turn product photography into 3D models for immersive product experiences.</p><Link to="/features/ai-3d-creator" className="text-link">Explore 3D Creator <ArrowRight size={16} /></Link></div>
              </article>
              <article className="product-card">
                <img src={studioImage} alt="A warm, naturally styled bedroom scene" width={1280} height={960} loading="lazy" />
                <div className="product-card-copy"><p className="eyebrow">04 · Present</p><h3>Design Studio</h3><p>Create polished lifestyle imagery from the product photos you already have.</p><Link to="/product/ai-product-photography" className="text-link">Explore Design Studio <ArrowRight size={16} /></Link></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="page-shell story-grid reverse">
            <div className="story-image-wrap"><img className="story-image" src={studioImage} alt="Comfortable bedroom with textured walls and thoughtfully chosen decor" width={1280} height={960} loading="lazy" /></div>
            <div className="story-copy"><p className="eyebrow">Designed for the whole journey</p><h2>One room can answer a lot of questions.</h2><p>True scale and personal context help shoppers compare options, see what works together and move toward a decision with more clarity.</p><Link to="/demo" className="text-link">See a room in action <ArrowRight size={16} /></Link></div>
          </div>
        </section>

        <section className="section">
          <div className="page-shell">
            <PageIntro eyebrow="From the people using it" title="A little more confidence goes a long way." body="Thoughtful tools and responsive support can make a difference across the entire shopping experience." />
            <div className="testimonial-grid">
              <blockquote className="quote-card"><p>“The experience has been fantastic. The visual quality is truly upscale, bright, clear, and practical.”</p><span>Home retail partner · Australia</span></blockquote>
              <blockquote className="quote-card"><p>“The integration made onboarding smooth. We were live with interactive product visualization within days.”</p><span>Ecommerce team · Homewares</span></blockquote>
              <blockquote className="quote-card"><p>“Our customers love experimenting with products in their own rooms. It helps them feel more confident.”</p><span>Retail team · Interiors</span></blockquote>
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="page-shell"><PageIntro eyebrow="A few useful details" title="Good questions, clear answers." body="Explore how shoppers can bring their spaces into the buying journey." />
            <div className="faq-list">
              <details><summary>How does the room visualizer work?<span>+</span></summary><p>Shoppers upload a room photo or choose a sample, then place products in the space. Product dimensions inform their scale, helping shoppers judge fit and style.</p></details>
              <details><summary>Can shoppers use it on a phone?<span>+</span></summary><p>The experience is designed for modern phone, tablet and desktop browsers, with no separate shopper app to install.</p></details>
              <details><summary>Which home categories can be visualized?<span>+</span></summary><p>Furniture, rugs, flooring, wallpaper and wall art—the home categories where seeing size and fit in context matters.</p></details>
              <details><summary>Do we need to make 3D models ourselves?<span>+</span></summary><p>No. Product imagery can be used to create models for the visualizer, with setup tailored to your catalog.</p></details>
            </div>
          </div>
        </section>

        <section className="section-tight"><div className="page-shell"><div className="cta-band"><p className="eyebrow">Let’s see what fits</p><h2>Bring a little more certainty to your store.</h2><p>Explore the room experience or talk through how it could fit your catalog.</p><div className="hero-actions justify-center"><Button asChild><Link to="/contact">Talk to sales <ArrowRight /></Link></Button><Button asChild variant="outline"><Link to="/demo">Try the live demo</Link></Button></div></div></div></section>
      </main>
    </SiteFrame>
  );
}