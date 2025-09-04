import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import { useMemo } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const variants = cva(
  "home-inset fixed pointer-events-none from from-background to-transparent z-51",
  {
    variants: {
      side: {
        top: "top-0 left-0 right-0 bg-linear-to-b h-24 w-full",
        bottom: "bottom-0 left-0 right-0 bg-linear-to-t h-24 w-full",
      },
    },
  }
);

export function HomeInset({ side }: VariantProps<typeof variants>) {
  const { scrollYProgress } = useScroll();
  const threshold = useMemo(
    () => (side === "top" ? [0, 0.1] : [0.9, 1]),
    [side]
  );
  const value = useMemo(() => (side === "top" ? [0, 1] : [1, 0]), [side]);
  const opacity = useTransform(scrollYProgress, threshold, value);
  return <motion.div className={cn(variants({ side }))} style={{ opacity }} />;
}
