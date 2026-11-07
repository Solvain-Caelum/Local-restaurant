import { Link } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dishes } from "@/data/menu";
import { mapsDirectionsUrl, mapsEmbedUrl, restaurant, whatsappUrl } from "@/config/restaurant";
import { DishCard } from "./DishCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import interior from "@/assets/interior.jpg";
import hero from "@/assets/hero.jpg";
import paneerTikka from "@/assets/paneer-tikka.jpg";
import biryani from "@/assets/veg-biryani.jpg";
import chai from "@/assets/chai.jpg";
import breads from "@/assets/breads.jpg";
import gulab from "@/assets/gulab-jamun.jpg";
import pavBhaji from "@/assets/pav-bhaji.jpg";
import beverages from "@/assets/beverages.jpg";
import dal from "@/assets/dal-makhani.jpg";

export function FeaturedSection() {
  const featured = dishes.filter((d) => d.featured);
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Chef's recommendations"
          title="Our most-loved plates"
          intro="The dishes our regulars order again and again — familiar favourites, cooked fresh every day."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.slice(0, 8).map((d, i) => (
          <Reveal key={d.id} delay={(i % 4) * 80}>
            <DishCard dish={d} />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="soft" size="xl">
          <Link to="/menu">See the full menu</Link>
        </Button>
      </div>
    </section>
  );
}

export function AboutSection() {
  const points = [
    { title: "Familiar favourites", text: "North Indian classics the whole family already knows and loves." },
    { title: "Comforting flavours", text: "Homestyle spice, slow-cooked gravies and breads straight from the tandoor." },
    { title: "Made to share", text: "Generous portions and honest prices, perfect for groups and get-togethers." },
  ];
  return (
    <section className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
      <Reveal className="relative">
        <img src={interior} alt="Families enjoying a meal inside The Local Table" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
        <div className="absolute -bottom-6 right-6 hidden rounded-2xl bg-accent px-6 py-4 text-accent-foreground shadow-lift sm:block">
          <p className="font-serif text-3xl font-semibold">100%</p>
          <p className="text-xs font-bold uppercase tracking-wider">Pure vegetarian kitchen</p>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <p className="eyebrow">About us</p>
        <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">A table for everyone.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          The Local Table celebrates the Indian vegetarian food we all grew up with — creamy paneer, buttery dal,
          hot naan and a cup of kadak chai. No fuss, no frills, just comforting flavours and meals that are best
          enjoyed together, whether it's a family dinner, a college catch-up or a weekend lunch with friends.
        </p>
        <ul className="mt-8 space-y-5">
          {points.map((p) => (
            <li key={p.title} className="flex gap-4">
              <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-accent" />
              <div>
                <p className="font-semibold text-foreground">{p.title}</p>
                <p className="text-sm text-muted-foreground">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

const galleryImages = [
  { src: hero, alt: "A spread of North Indian vegetarian dishes", span: "md:col-span-2 md:row-span-2" },
  { src: paneerTikka, alt: "Chargrilled paneer tikka" },
  { src: chai, alt: "Masala chai in a clay kulhad" },
  { src: interior, alt: "The restaurant dining room", span: "md:col-span-2" },
  { src: biryani, alt: "Veg biryani with raita" },
  { src: breads, alt: "Basket of fresh Indian breads" },
  { src: pavBhaji, alt: "Pav bhaji with buttered pav" },
  { src: dal, alt: "Dal makhani with butter" },
  { src: beverages, alt: "Lassi, chai, cold coffee and lime soda" },
  { src: gulab, alt: "Gulab jamun with pistachio" },
];

export function GallerySection({ limit }: { limit?: number }) {
  const items = limit ? galleryImages.slice(0, limit) : galleryImages;
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="Gallery" title="A taste of our table" intro="Fresh food, warm light and good company — a peek at what's waiting for you." />
      </Reveal>
      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {items.map((img, i) => (
          <Reveal key={img.alt} delay={(i % 4) * 60} className={`overflow-hidden rounded-2xl ${img.span ?? ""}`}>
            <img src={img.src} alt={img.alt} loading="lazy" className="size-full object-cover transition-transform duration-700 hover:scale-105" />
          </Reveal>
        ))}
      </div>
      {limit && (
        <div className="mt-10 text-center">
          <Button asChild variant="soft" size="xl">
            <Link to="/gallery">View full gallery</Link>
          </Button>
        </div>
      )}
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="Visit us" title="Come hungry, leave happy" intro="Walk in, call ahead for a group table, or send us a message on WhatsApp." />
      </Reveal>
      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-5 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <address className="mt-1 text-sm not-italic text-muted-foreground">
                  {restaurant.addressLines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
              </div>
            </div>
            <div className="mt-5 flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <a href={restaurant.phoneHref} className="text-sm text-muted-foreground hover:text-primary">{restaurant.phoneDisplay}</a>
              </div>
            </div>
            <div className="mt-5 flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Opening hours</p>
                <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                  {restaurant.hours.map((h) => (
                    <li key={h.days}><span className="font-medium text-foreground/80">{h.days}</span> · {h.time}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild variant="hero" size="xl">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Enquire on WhatsApp</a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href={restaurant.phoneHref}><Phone /> Call the restaurant</a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer"><Navigation /> Get directions</a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={120} className="min-h-[360px] overflow-hidden rounded-2xl border border-border shadow-soft lg:col-span-3">
          <iframe
            title="Map showing the restaurant location"
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full min-h-[360px] border-0"
          />
        </Reveal>
      </div>
    </section>
  );
}
