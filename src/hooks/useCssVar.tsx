import { useEffect, useState } from "react";

/**
 * Reads a CSS custom property from :root and re-reads it whenever
 * the class attribute on <html> changes (e.g. theme toggle).
 */
export function useCssVar(varName: string): string {
  const [value, setValue] = useState(() =>
    getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
  );

  useEffect(() => {
    const update = () => {
      const computed = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      setValue(computed);
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [varName]);

  return value;
}
