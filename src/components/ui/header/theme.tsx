import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib";
import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";

export function HeaderTheme() {
  const ref = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = useCallback(async () => {
    await document.startViewTransition(() => {
      flushSync(() => {
        toggleTheme();
      });
    }).ready;
    const { top, left, width, height } = ref.current!.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [toggleTheme]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      onClick={handleThemeChange}
      className={cn("hidden md:flex hover:text-primary px-0")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
