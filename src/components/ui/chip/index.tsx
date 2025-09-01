import { cn } from "@/lib";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const variants = cva(
  "relative text-foreground cursor-default inline-flex items-center gap-2 px-3 py-1.5",
  {
    variants: {
      variant: {
        default: "rounded-2xl bg-primary text-primary-foreground",
        outline: "border text-foreground",
        dashed: "border border-dashed text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ChipProps
  extends ComponentProps<"span">,
    VariantProps<typeof variants> {}

export function Chip({ variant, className, ...props }: ChipProps) {
  return <span className={cn(variants({ variant, className }))} {...props} />;
}
