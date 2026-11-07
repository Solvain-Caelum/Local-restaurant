import { createFileRoute } from "@tanstack/react-router";
import { MenuExplorer } from "@/components/site/MenuExplorer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { VegBadge } from "@/components/site/VegBadge";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Local Table | Pure Veg North Indian" },
      { name: "description", content: "Starters, paneer curries, breads, biryani, snacks, beverages and desserts — all 100% vegetarian with prices in INR." },
      { property: "og:title", content: "Menu — The Local Table" },
      { property: "og:description", content: "Browse our pure vegetarian North Indian menu by category." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <section className="container-page py-14 md:py-20">
      <div className="mb-10 flex justify-center"><VegBadge /></div>
      <SectionHeading eyebrow="Our menu" title="Something for every craving" intro="Pick a category to explore. Every dish is cooked fresh in our 100% vegetarian kitchen." />
      <div className="mt-10">
        <MenuExplorer />
      </div>
      <p className="mt-12 text-center text-xs text-muted-foreground">Prices are in Indian Rupees and inclusive of applicable taxes.</p>
    </section>
  );
}
