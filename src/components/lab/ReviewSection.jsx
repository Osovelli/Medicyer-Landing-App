import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function ReviewSection({
  averageRating,
  totalReviews,
  distribution,
  onSeeReview,
  className,
}) {
  // distribution = { 5: 120, 4: 60, 3: 30, 2: 18, 1: 13 }
  const maxCount = Math.max(...Object.values(distribution));

  return (
    <Card
      className={cn(
        "border-slate-100 dark:border-slate-700 shadow-none",
        className
      )}
    >
      <CardHeader className="pb-3 px-5 pt-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-bold text-slate-900 dark:text-slate-100">
            Reviews
          </CardTitle>
          {onSeeReview && (
            <button
              onClick={onSeeReview}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              see reviews
            </button>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-5 pb-5">
        {/* Rating summary card */}
        <div className="bg-slate-50 dark:bg-slate-700/40 rounded-2xl p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            {/* Big score */}
            <div>
              <p className="text-4xl font-bold text-slate-900 dark:text-slate-100 leading-none">
                {averageRating}
              </p>
            </div>

            {/* Stars + count */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={cn(
                      "w-4 h-4",
                      s <= Math.round(averageRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-slate-200 text-slate-200 dark:fill-slate-600 dark:text-slate-600"
                    )}
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 leading-none">
                {totalReviews}
              </p>
            </div>
          </div>

          {/* Bar distribution */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = distribution[star] || 0;
              const pct = maxCount > 0 ? (count / maxCount) * 100 : 0;
              return (
                <div key={star} className="flex items-center gap-2.5">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 w-3 text-right">
                    {star}
                  </span>
                  <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-500",
                        star >= 4
                          ? "bg-yellow-400"
                          : star === 3
                            ? "bg-amber-400"
                            : "bg-orange-400"
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
