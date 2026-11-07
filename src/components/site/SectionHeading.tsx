import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, intro, className }: { eyebrow: string; title: string; intro?: string; className?: string }) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
    </div>
  );
}
