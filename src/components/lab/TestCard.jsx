import { Calendar, FlaskConical, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { CustomButton } from "../custom/CustomButton";

const TransfusionIcon = () => (
  <img
    src="/transfusion.svg"
    alt="Transfusion Icon"
    className="w-5 h-5 text-blue-600 dark:text-blue-400"
  />
);

const FolderIcon = () => (
  <img
    src="/foldericon.svg"
    alt="Folder Icon"
    className="w-5 h-5 text-blue-600 dark:text-blue-400"
  />
);  

export function TestCard({
  icon,
  title,
  category,
  price,
  originalPrice,
  points,
  serviceType = "Home service",
  serviceIcon,
  test,
  onBook,
  onSave,
  className,
  ...props
}) {
   const [homeServiceEnabled, setHomeServiceEnabled] = useState(false)

  return (
    <div
      className={cn(
        "bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700",
        "p-4 flex flex-col gap-3",
        "shadow-[0_2px_12px_rgba(26,29,46,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.2)]",
        "hover:shadow-[0_4px_20px_rgba(26,29,46,0.1)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
        "transition-shadow duration-300",
        className
      )}
      {...props}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
        {icon || (
          <TransfusionIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        )}
      </div>

      <div className="text-start">
        {/* category */}
        <span className="text-sm font-normal text-[#252B61] dark:text-blue-400">
          {category || "Routine Blood Tests"}
        </span>

        {/* Title */}
        <h4 className="text-lg font-normal tracking-wider text-sky dark:text-slate-100 leading-snug line-clamp-2">
          {title}
        </h4>
      </div>

      {/* Price row */}
      <div className="flex text-start items-baseline gap-2 flex-wrap">
        <span className="text-lg font-normal tracking-wider text-sky dark:text-slate-100">
          ₦ {Number(price).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
        </span>
        {originalPrice && (
          <span className="text-xs text-slate-400 dark:text-slate-500 line-through">
            ₦ {Number(originalPrice).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
          </span>
        )}
      </div>

      {/* Points badge */}
      {points && (
        <Badge
          variant="secondary"
          className="w-fit text-[11px] font-semibold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-0 px-2.5 py-0.5 rounded-full"
        >
          +{points} points
        </Badge>
      )}

      {/* Divider */}
      <div className="h-px bg-slate-100 dark:bg-slate-700" />

      {/* Service type + Book */}
      {/* <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
          {serviceIcon || (
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 14V6.5L8 2l6 4.5V14H10V9.5H6V14H2Z"
                fill="currentColor"
                fillOpacity="0.6"
              />
            </svg>
          )}
          {serviceType}
        </span>

        <Button
          size="sm"
          onClick={onBook}
          className="h-8 px-4 text-xs font-semibold rounded-full bg-[#1C2A3D] hover:bg-[#263A52] dark:bg-blue-600 dark:hover:bg-blue-500 text-white"
        >
          Book Now
        </Button>
      </div> */}

      {/* Home Service Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-700">Home service</span>
          </div>
          {/* Toggle Switch */}
          <button
            onClick={() => setHomeServiceEnabled(!homeServiceEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              homeServiceEnabled ? "bg-[#252B61]" : "bg-gray-300"
            }`}
            role="switch"
            aria-checked={homeServiceEnabled}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                homeServiceEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

      {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <CustomButton
            variant="outline"
            onClick={() => onBook?.(test)}
            className="flex-1 border-2 border-gray-900 text-sky font-bold py-2 rounded-xl hover:bg-gray-50 transition-colors text-sm"
          >
            Book Now
          </CustomButton>
          <button 
            className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors"
            onClick={() => onSave?.(test)}
          >
            <FolderIcon />
          </button>
        </div>
    </div>
  );
}
