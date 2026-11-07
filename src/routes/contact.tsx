import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions — The Local Table" },
      { name: "description", content: "Address, opening hours, phone and WhatsApp enquiries for The Local Table pure veg restaurant." },
      { property: "og:title", content: "Contact & Directions — The Local Table" },
      { property: "og:description", content: "Find us, call us or message us on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ContactSection />,
});
