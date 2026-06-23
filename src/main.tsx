import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/i18n";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@/components/Theme/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
