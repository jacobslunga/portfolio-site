import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { StrictMode } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { createRoot } from "react-dom/client";
import routes from "@/routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
