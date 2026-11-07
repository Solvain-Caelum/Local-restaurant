import { useState } from "react";
import { categories, dishes, type Category } from "@/data/menu";
import { cn } from "@/lib/utils";
import { DishCard } from "./DishCard";

type Filter = Category | "All";

export function MenuExplorer() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? dishes : dishes.filter((d) => d.category === active);
  const filters: Filter[] = ["All", ...categories];

  return (
    <div>
      <div role="tablist" aria-label="Menu categories" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:justify-center md:px-0">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
              active === f
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card text-foreground hover:border-primary hover:text-primary",
            )}
          >
            {f}
            <span className="ml-1.5 opacity-60">
              {f === "All" ? dishes.length : dishes.filter((d) => d.category === f).length}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground" aria-live="polite">
        Showing {visible.length} {active === "All" ? "dishes" : `${active.toLowerCase()} dishes`}
      </p>
      <div key={active} className="mt-6 grid animate-in fade-in slide-in-from-bottom-2 gap-6 duration-500 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((d) => (
          <DishCard key={d.id} dish={d} />
        ))}
      </div>
    </div>
  );
}
