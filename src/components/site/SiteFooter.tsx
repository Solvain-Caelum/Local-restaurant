import { Link } from "@tanstack/react-router";
import { restaurant, whatsappUrl } from "@/config/restaurant";
import { VegBadge } from "./VegBadge";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold">{restaurant.name}</p>
          <p className="mt-2 text-sm text-primary-foreground/75">{restaurant.tagline}</p>
          <VegBadge className="mt-5" />
        </div>
        <div>
          <p className="eyebrow">Visit</p>
          <address className="mt-3 text-sm not-italic leading-relaxed text-primary-foreground/80">
            {restaurant.addressLines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>
          <ul className="mt-3 space-y-1 text-sm text-primary-foreground/80">
            {restaurant.hours.map((h) => (
              <li key={h.days}>{h.days}: {h.time}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <li><Link to="/menu" className="hover:underline">Menu</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><a href={restaurant.phoneHref} className="hover:underline">Call us</a></li>
            <li><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="container-page py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {restaurant.name}. A demo website by Caelora Studio.
        </p>
      </div>
    </footer>
  );
}
