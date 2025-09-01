import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";
interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeState, setTheme] = useState<Theme>();
  const theme = useMemo(() => themeState || "light", [themeState]);

  useEffect(() => {
    if (themeState) {
      if (themeState === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", themeState);
    }
  }, [themeState]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as Theme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(systemTheme.matches ? "dark" : "light");
      systemTheme.addEventListener("change", () => {
        setTheme(systemTheme.matches ? "dark" : "light");
      });
      return () => {
        systemTheme.removeEventListener("change", () => {
          setTheme(systemTheme.matches ? "dark" : "light");
        });
      };
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
