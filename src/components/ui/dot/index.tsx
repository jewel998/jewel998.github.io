import { cn } from "@/lib";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const variants = cva("relative", {
  variants: {
    size: {
      xs: "size-1",
      sm: "size-1.5",
      md: "size-2",
      lg: "size-2.5",
      xl: "size-3",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface DotProps
  extends ComponentProps<"span">,
    VariantProps<typeof variants> {
  color: string;
  ping?: boolean;
  pingColor?: string;
}

export function Dot({
  color,
  size,
  className,
  ping,
  pingColor,
  ...props
}: DotProps) {
  return (
    <span className={cn(variants({ size, className }))} {...props}>
      {ping && (
        <span
          className={cn(
            "absolute h-full w-full animate-ping rounded-full opacity-75",
            pingColor ?? color
          )}
        ></span>
      )}
      <span
        className={cn("relative w-full h-full rounded-full", color, className)}
      ></span>
    </span>
  );
}
