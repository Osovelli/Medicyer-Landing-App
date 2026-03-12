import { useMemo, useState } from "react";
import { ChevronDown, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/**
 * Reusable schedule selector with day picker + time slot grid.
 *
 * Props:
 *   month        – Date object for displayed month (default: current)
 *   timeSlots    – ["09:30 AM", "11:30 AM", ...]
 *   bookedSlots  – ["10:30 AM", "03:30 PM"]  (disabled)
 *   totalSlots   – number shown in badge
 *   selectedDay  – currently selected Date
 *   selectedTime – currently selected time string
 *   onDayChange  – (date) => void
 *   onTimeChange – (time) => void
 *   onMonthChange– (date) => void
 */

const DAY_NAMES = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function generateWeekDays(startDate) {
  const days = [];
  const start = new Date(startDate);
  const dayOfWeek = start.getDay();
  const monday = new Date(start);
  monday.setDate(start.getDate() - ((dayOfWeek + 6) % 7));

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    days.push({
      date: d,
      dayLabel: DAY_NAMES[d.getDay()],
      dateNum: d.getDate(),
    });
  }
  return days;
}

export function ScheduleSelector({
  month,
  timeSlots = [],
  bookedSlots = [],
  totalSlots,
  selectedDay,
  selectedTime,
  onDayChange,
  onTimeChange,
  onMonthChange,
  className,
}) {
  const [internalMonth, setInternalMonth] = useState(month || new Date());
  const activeMonth = month || internalMonth;

  const days = useMemo(() => generateWeekDays(activeMonth), [activeMonth]);

  const monthLabel = activeMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  function handleMonthNav(dir) {
    const next = new Date(activeMonth);
    next.setMonth(next.getMonth() + dir);
    if (onMonthChange) onMonthChange(next);
    else setInternalMonth(next);
  }

  return (
    <div className={cn("overflow-hidden bg-[#F2F2F2] p-3 rounded-lg", className)}>
      {/* Header: Schedule + month dropdown + slots badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5 min-w-0">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 shrink-0">
            Schedule:
          </h3>
          <button
            onClick={() => handleMonthNav(0)}
            className="flex items-center gap-1.5 text-[13px] font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors whitespace-nowrap"
          >
            {monthLabel}
            <ChevronDown className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>

        {totalSlots != null && (
          <Badge
            variant="outline"
            className="gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#252B61] dark:text-blue-400 border-slate-200 dark:border-slate-600 shrink-0 whitespace-nowrap"
          >
            <CalendarDays className="w-3.5 h-3.5" />
            {totalSlots} Slots
          </Badge>
        )}
      </div>

      {/* Day picker – equal-width pills in a single row */}
      <div className="flex gap-2 mb-6 overflow-x-scroll scrollbar-hide">
        {days.map((d) => {
          const isSelected =
            selectedDay &&
            d.date.toDateString() === selectedDay.toDateString();
          const isToday =
            d.date.toDateString() === new Date().toDateString();

          return (
            <button
              key={d.date.toISOString()}
              onClick={() => onDayChange?.(d.date)}
              className={cn(
                "flex-1 min-w-15 flex flex-col items-center justify-center",
                "py-2 rounded-xl text-center transition-all duration-200",
                isSelected
                  ? "bg-[#252B61] dark:bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              )}
            >
              <span className="text-[11px] font-medium lowercase leading-none mb-1.5">
                {d.dayLabel}
              </span>
              <span className="text-base font-bold leading-none">{d.dateNum}</span>
              {isToday && !isSelected && (
                <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-100 dark:bg-slate-700 mb-5" />

      {/* Time slots – strict 3-column grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {timeSlots.map((time) => {
          const isBooked = bookedSlots.includes(time);
          const isSelected = selectedTime === time && !isBooked;

          return (
            <button
              key={time}
              disabled={isBooked}
              onClick={() => !isBooked && onTimeChange?.(time)}
              className={cn(
                "py-3 rounded-full text-[13px] font-medium transition-all duration-200 text-center",
                isBooked
                  ? "bg-[#CCD0CF] border shadow-2xl dark:bg-amber-900/30 text-white dark:text-amber-500 cursor-not-allowed"
                  : isSelected
                    ? "bg-[#252B61] dark:bg-blue-600 text-white shadow-md"
                    : "bg-white dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              )}
            >
              {isBooked ? "Booked" : time}
            </button>
          );
        })}
      </div>
    </div>
  );
}
