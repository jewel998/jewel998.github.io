import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  "cursor-pointer disabled:cursor-disabled transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-primary text-primary",
        ghost: "bg-transparent",
        link: "bg-transparent hover:text-primary",
      },
      size: {
        default: "px-4 py-2",
        xs: "px-2 py-1",
        sm: "px-3 py-1",
        md: "px-4 py-2",
        lg: "px-6 py-3",
        xl: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button className={variants({ variant, size, className })} {...props} />
  );
}
