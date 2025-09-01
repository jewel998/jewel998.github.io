import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib";

export function HeaderTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className={cn("hidden md:flex hover:text-primary px-0")}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
