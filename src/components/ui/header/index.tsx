import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  "header bg-background/95 backdrop-blur-lg border-b border-border/50",
  {
    variants: {
      variant: {
        fixed: "fixed top-0 left-0 right-0 z-50",
        sticky: "sticky top-0 left-0 right-0 z-50",
      },
    },
    defaultVariants: {
      variant: "sticky",
    },
  }
);

interface HeaderProps
  extends ComponentProps<"nav">,
    VariantProps<typeof variants> {}

export function Header({
  variant,
  className,
  children,
  ...props
}: HeaderProps) {
  return (
    <nav className={variants({ variant, className })} {...props}>
      {children}
    </nav>
  );
}
