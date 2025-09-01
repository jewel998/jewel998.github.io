import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const variants = cva(
  "relative cursor-default inline-flex items-center gap-2 px-3 py-1.5",
  {
    variants: {
      variant: {
        outline: "border",
        dashed: "border border-dashed",
      },
    },
    defaultVariants: {
      variant: "dashed",
    },
  }
);

interface ChipProps
  extends ComponentProps<"span">,
    VariantProps<typeof variants> {}

export function Chip({ variant, className, ...props }: ChipProps) {
  return <span className={variants({ variant, className })} {...props} />;
}
