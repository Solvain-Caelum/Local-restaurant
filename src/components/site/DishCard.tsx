import { formatINR, type Dish } from "@/data/menu";
import { VegMark } from "./VegBadge";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          width={944}
          height={704}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <VegMark /> {dish.name}
          </h3>
          <span className="shrink-0 font-serif text-lg font-semibold text-accent">{formatINR(dish.price)}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
      </div>
    </article>
  );
}
