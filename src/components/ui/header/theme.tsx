import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme";
import { Button } from "@/components/ui/button";

export function HeaderTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="hidden md:flex hover:text-primary"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
