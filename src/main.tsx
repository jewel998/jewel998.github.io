import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "@/router";
import "@/index.css";
import { ThemeProvider } from "@/components/providers/theme";
import { I18n } from "@/components/providers/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18n>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </I18n>
  </StrictMode>
);
