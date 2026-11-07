import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VegBadge } from "@/components/site/VegBadge";
import { AboutSection, ContactSection, FeaturedSection, GallerySection } from "@/components/site/sections";
import { whatsappUrl } from "@/config/restaurant";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Local Table — Pure Veg North Indian Restaurant" },
      { name: "description", content: "Good Food. Pure Veg. Good Times. Comforting North Indian vegetarian favourites for families, students and groups." },
      { property: "og:title", content: "The Local Table — Pure Veg North Indian Restaurant" },
      { property: "og:description", content: "Comforting North Indian vegetarian favourites made to bring everyone together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="container-page grid items-center gap-10 pb-16 pt-10 md:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <VegBadge />
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Good food.<br />
            <span className="italic text-primary">Great company.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            From comforting classics to delicious favourites, discover the joy of pure vegetarian food made to bring
            everyone together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us</a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            <div><dt className="text-xs text-muted-foreground">Dishes</dt><dd className="font-serif text-2xl font-semibold">30+</dd></div>
            <div><dt className="text-xs text-muted-foreground">Mains from</dt><dd className="font-serif text-2xl font-semibold">₹209</dd></div>
            <div><dt className="text-xs text-muted-foreground">Kitchen</dt><dd className="font-serif text-2xl font-semibold">Pure Veg</dd></div>
          </dl>
        </div>
        <div className="relative animate-in fade-in zoom-in-95 duration-1000">
          <img
            src={hero}
            alt="A spread of paneer, dal makhani, naan, jeera rice and salad"
            width={1600}
            height={1072}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-soft md:-left-6">
            <p className="font-serif text-lg font-semibold text-foreground">Fresh from the tandoor</p>
            <p className="text-xs text-muted-foreground">Naan, roti & paratha baked to order</p>
          </div>
        </div>
      </section>
      <div className="bg-secondary/60">
        <FeaturedSection />
      </div>
      <AboutSection />
      <div className="bg-secondary/60">
        <GallerySection limit={6} />
      </div>
      <ContactSection />
    </>
  );
}
