import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Props:
 * - size: "sm" | "md" | "lg" (maps to preset tailwind height/text combos)
 * - radius: "sm" | "md" | "lg" | "full" (maps to rounded-* tailwind classes)
 * - height: a string or number. If a string starts with "h-" it will be treated as a tailwind class; otherwise it's used as an inline height (e.g. "48px", "3rem" or 48)
 * - Any other props forwarded to the native <input>
 */
function Input({
  className,
  type = "text",
  size = "md",
  radius = "md",
  height, // optional override
  style,
  ...props
}) {
  const sizeMap = {
    sm: "h-9 md:text-sm",
    md: "h-12",
    lg: "h-14 md:text-base",
  }

  const radiusMap = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }

  // If height is a string that looks like a tailwind height class (starts with "h-"), use it as a class.
  const heightClass = typeof height === "string" && height.startsWith("h-") ? height : null

  // If height is a number or a non-tailwind string, set it via inline style.
  const inlineHeight =
    height && !heightClass
      ? typeof height === "number"
        ? `${height}px`
        : height
      : undefined

  const combinedStyle = { ...(style || {}), ...(inlineHeight ? { height: inlineHeight } : {}) }

  const baseClasses =
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"

  const validationClasses = "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        baseClasses,
        // size class OR explicit height class (if provided)
        heightClass ?? sizeMap[size] ?? sizeMap.md,
        // radius class
        radiusMap[radius] ?? radiusMap.md,
        // focus outlines etc
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        className
      )}
      style={combinedStyle}
      {...props}
    />
  )
}

export { Input }
