import { cn } from "@/lib";
import { Slot } from "@radix-ui/react-slot";
import { type ReactNode } from "react";

interface ShinyTextProps {
  children: ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export function ShinyText({
  children,
  disabled = false,
  speed = 5,
  className = "",
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <Slot
      className={cn(
        "bg-clip-text inline-block",
        "bg-linear-120 from-40% via-50% to-60%",
        "dark:from-white/0 from-black/0",
        "dark:via-white/80 via-black/80",
        "dark:to-white/0 to-black/0",
        disabled ? "" : "animate-shine",
        className
      )}
      style={{
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {children}
    </Slot>
  );
}
