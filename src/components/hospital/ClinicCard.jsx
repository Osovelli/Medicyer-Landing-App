import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TubeIcon } from "../custom/Icons";
import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import { CustomButton } from "../custom/CustomButton";

export function ClinicCard({ icon, title, category, slots, onBook, className, ...props }) {
  return (
    <div
      className={cn(
        "group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700",
        "p-6 flex flex-col gap-4 shadow-md transition-shadow duration-300",
        className
      )}
      {...props}
    >
      {/* Icon */}
      <div className="flex items-center justify-start mb-2">
        {icon || <TubeIcon className="text-slate-500" />}
        <div className="ml-auto text-sky bg-[#BD8CBF26] flex items-center rounded-full px-5 py-3 text-xs">
          <CalendarCheck className="w-3 h-3 inline mr-1" />
          {slots} Slots
        </div>
      </div>

      <div className="text-start">
        {/* Title */}
        <h4 className="text-xl font-semibold tracking-wider text-gray-800 dark:text-slate-100 leading-snug">
          {title || "Paediatrics"}
        </h4>
        
        {/* Category/Description */}
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-1">
          {category || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
      </div>

      {/* Action Button */}
      <div className="pt-4">
        <CustomButton
          onClick={onBook}
          variant={'outline'}
          className="w-full rounded-xl border border-sky text-gray-900 hover:bg-sky/50 hover:text-gray-50 hover:border-0 transition-colors font-bold py-2 text-sm"
        >
          Book Now
        </CustomButton>
      </div>
    </div>
  );
}