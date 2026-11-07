import { cn } from "@/lib/utils";

export function VegMark({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] border-2 border-veg", className)}>
      <span className="size-1.5 rounded-full bg-veg" />
    </span>
  );
}

export function VegBadge({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border border-veg/40 bg-card px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-veg", className)}>
      <VegMark /> 100% Pure Vegetarian
    </span>
  );
}
