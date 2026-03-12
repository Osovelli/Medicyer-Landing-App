import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function CuratedCard({   logo,
logoText,
bgColor = "bg-[#1C2A3D]",
verified = false,
name,
location,
className,
rating,
...props
}) {
    return (
    <div
      className={cn(
        "group shrink-0 w-[200px] sm:max-w-[250px] lg:max-w-[440px] snap-start",
         "rounded-[18px] overflow-hidden cursor-pointer",
         "shadow-[0_4px_20px_rgba(26,29,46,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
         "hover:shadow-[0_8px_28px_rgba(26,29,46,0.14)] dark:hover:shadow-[0_8px_28px_rgba(0,0,0,0.4)]",
         "hover:-translate-y-[3px] transition-all duration-300",
         className
        )} 
        {...props} 
    >
        <div
         className={cn( "flex flex-col items-center justify-center gap-2", bgColor)}
         >
            {/* Logo icon */}
            <div className="flex items-center justify-center h-46 w-full">
                {typeof logo === "string" ? ( <img src={logo} alt={logoText || name} className="w-full inset-0 h-full object-cover" />) : ( logo  )} 
            </div>
        </div>
        <div className="bg-white dark:bg-slate-800 px-4 pt-3 pb-4">
            {/* Badges row */}
            <div className="flex items-center justify-between mb-2">
                {verified ? (
                <span className="inline-flex items-center text-[10px] font-semibold text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-2.5 py-0.5 rounded-full tracking-wide">
                Verified
            </span>
        ) : (
        <span />
        )}

        {rating && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 px-2 py-0.5 rounded-full">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {rating}
            </span>
        )}
        </div>

        {/* Name */}
         <h3 className="text-sm text-left font-bold text-slate-900 dark:text-slate-100 leading-snug">
            {name}
        </h3>
        {/* Location */}  
        {location && (
            <p className="text-xs text-left text-slate-400 dark:text-slate-500 mt-0.5">
                {location}
            </p>
        )} 
        </div>
    </div>
    );
 }