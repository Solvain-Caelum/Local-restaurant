import { createFileRoute } from "@tanstack/react-router";
import { AboutSection, FeaturedSection } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Local Table" },
      { name: "description", content: "A table for everyone: familiar Indian vegetarian favourites, comforting flavours and meals best enjoyed together." },
      { property: "og:title", content: "About Us — The Local Table" },
      { property: "og:description", content: "Familiar Indian vegetarian favourites and meals best enjoyed together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <AboutSection />
      <div className="bg-secondary/60"><FeaturedSection /></div>
    </>
  ),
});
