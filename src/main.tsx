import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./corporate.css";

const RimSite = lazy(() => import("./rim/RimSite"));
const isRimSite = /^\/rim(?:\/|$)/.test(window.location.pathname);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isRimSite ? (
      <Suspense
        fallback={
          <div role="status" style={{ padding: 40 }}>
            Loading RIM Holdings…
          </div>
        }
      >
        <RimSite />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
);
