import { cn } from "@/lib";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const variants = cva("relative flex", {
  variants: {
    size: {
      xs: "size-1",
      sm: "size-2",
      md: "size-3",
      lg: "size-4",
      xl: "size-5",
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
    <span className={variants({ size })} {...props}>
      {ping && (
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            pingColor ?? color
          )}
        ></span>
      )}
      <span
        className={cn(
          "relative inline-flex w-full h-full rounded-full",
          color,
          className
        )}
      ></span>
    </span>
  );
}
