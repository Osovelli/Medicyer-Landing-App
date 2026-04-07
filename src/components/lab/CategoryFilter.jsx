import { cn } from "@/lib/utils";

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-4xl flex flex-wrap gap-2.5 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide",
        className
      )}
    >
      {categories.map((cat) => {
        const isActive = cat.id === activeCategory;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={cn(
              "shrink-0 snap-start px-4 py-2 rounded-full text-xs font-semibold",
              "border transition-all duration-200 whitespace-nowrap",
              isActive
                ? "bg-[#1C2A3D] dark:bg-blue-600 text-white border-transparent shadow-sm"
                : "bg-[#F3F3FF] dark:bg-slate-800 text-sky dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700"
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
