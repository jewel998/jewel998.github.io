import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "@/router";
import "@/index.css";
import { ThemeProvider } from "@/components/providers/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>
);
