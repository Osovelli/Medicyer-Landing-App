import { Star, MapPin, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureCard({
  image,
  badgeLabel,
  category,
  name,
  rating,
  reviews,
  location,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "group shrink-0 w-[260px] md:w-[280px] lg:w-[300px] snap-start",
        "bg-white dark:bg-slate-800 rounded-[20px] overflow-hidden",
        "shadow-[0_4px_20px_rgba(26,29,46,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)]",
        "hover:shadow-[0_8px_32px_rgba(26,29,46,0.14)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
        "hover:-translate-y-[3px] transition-all duration-300 cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Image */}
      <div className="relative w-full h-[170px] md:h-[190px] lg:h-[200px] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Badge overlay */}
        {badgeLabel && (
          <span className="absolute bottom-3 left-3 flex items-center font-semibold tracking-wide rounded-2xl shadow-[0_2px_8px_rgba(34,168,83,0.35)]">
            <img src={badgeLabel || ''} alt="Jasiri Logo" className="w-12 h-12 rounded-2xl" />
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-[18px] pt-4 pb-5 text-start">
        <p className="text-xs font-normal text-slate-400 dark:text-slate-500 mb-1 tracking-wide">
          {category}
        </p>

        <h3 className="text-xl tracking-tight font-semibold text-slate-900 dark:text-slate-100 mb-2.5 leading-tight">
          {name}
        </h3>

        <div className="flex items-center gap-1.5 flex-wrap text-[12.5px] text-slate-500 dark:text-slate-400">
          {/* Rating */}
          <span className="flex items-center gap-1">
            <Star className="w-[13px] h-[13px] fill-yellow-400 text-yellow-400" />
            {rating} / {reviews}
          </span>

          {/* Dot separator */}
          <span className="w-[3px] h-[3px] rounded-full bg-slate-400 dark:bg-slate-500" />

          {/* Location */}
          <span className="flex items-center gap-1">
            <MapPin className="w-[11px] h-[11px]" />
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}
