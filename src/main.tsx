import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router, routerReady } from "@/router";
import "@/index.css";
import { ThemeProvider } from "@/components/providers/theme";
import { I18n } from "@/components/providers/i18n";

// Wait for the initial route to be loaded before mounting React.
// This keeps the static HTML shell visible until the app is ready,
// preventing the white flash between shell removal and route render.
routerReady.then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <I18n>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </I18n>
    </StrictMode>
  );
});
