import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";

const variants = cva("header bg-background backdrop-blur-lg z-100", {
  variants: {
    variant: {
      static: "static",
      fixed: "fixed top-0 left-0 right-0",
      sticky: "sticky top-0 left-0 right-0",
    },
  },
  defaultVariants: {
    variant: "fixed",
  },
});

interface HeaderProps
  extends ComponentProps<"nav">,
    VariantProps<typeof variants> {
  asChild?: boolean;
}

export function Header({
  variant,
  className,
  children,
  asChild,
  ...props
}: HeaderProps) {
  if (asChild) {
    return (
      <Slot className={cn(variants({ variant, className }))} {...props}>
        {children}
      </Slot>
    );
  }
  return (
    <nav className={cn(variants({ variant, className }))} {...props}>
      {children}
    </nav>
  );
}
