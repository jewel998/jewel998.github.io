import personal from "@/data/personal.json";
import { Coffee, Heart } from "lucide-react";
import { useMemo } from "react";

export function HomeFooter() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="px-6 py-8 border-t border-border scroll-section">
      <div className="w-fit mx-auto text-center">
        <p className="font-mono text-xs md:text-sm max-w-[16rem] md:max-w-none opacity-40 text-muted-foreground handwritten-light gap-2 items-center justify-center">
          © {year} {personal.name}. Crafted with{" "}
          <Coffee className="inline size-4 text-yellow-800 dark:text-yellow-600" />{" "}
          and <Heart className="inline size-4 text-red-600 dark:text-red-400" />
        </p>
      </div>
    </footer>
  );
}
