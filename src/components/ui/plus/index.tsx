import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cva } from "class-variance-authority";

const variants = cva("z-50", {
  variants: {
    rel: {
      static: "static",
      fixed: "fixed",
      absolute: "absolute",
    },
    variant: {
      primary: "fill-primary",
      secondary: "fill-secondary",
      success: "fill-success",
      warning: "fill-warning",
      danger: "fill-danger",
    },
    position: {
      "top-left": "top-0 left-0 -translate-x-[58%] -translate-y-[58%]",
      "top-right": "top-0 right-0 translate-x-[58%] -translate-y-[58%]",
      "bottom-left": "bottom-0 left-0 -translate-x-[58%] translate-y-[58%]",
      "bottom-right": "bottom-0 right-0 translate-x-[58%] translate-y-[58%]",
    },
    size: {
      xs: "size-1",
      sm: "size-1.5",
      md: "size-2",
      lg: "size-2.5",
      xl: "size-3",
    },
  },
  defaultVariants: {
    rel: "absolute",
    variant: "primary",
    size: "sm",
  },
});

interface PlusProps
  extends ComponentProps<"svg">,
    VariantProps<typeof variants> {}

export function Plus({ rel, position, className, ...props }: PlusProps) {
  return (
    <svg
      width="5"
      height="5"
      viewBox="0 0 5 5"
      className={variants({ rel, position, className })}
      {...props}
    >
      <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
    </svg>
  );
}
