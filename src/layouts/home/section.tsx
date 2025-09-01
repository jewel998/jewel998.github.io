import { cn } from "@/lib";
import type { ComponentProps } from "react";

export function HomeSection({
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn("py-20 px-6 md:px-12 scroll-section", className)}
      {...props}
    >
      {children}
    </section>
  );
}
