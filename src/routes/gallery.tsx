import { createFileRoute } from "@tanstack/react-router";
import { GallerySection } from "@/components/site/sections";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Local Table" },
      { name: "description", content: "Photos of our pure vegetarian dishes, fresh breads, desserts and dining room." },
      { property: "og:title", content: "Gallery — The Local Table" },
      { property: "og:description", content: "A taste of our table in pictures." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <GallerySection />,
});
