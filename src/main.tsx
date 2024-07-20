import React from "react";
import ReactDOM from "react-dom/client";

import "@/styles/index.css";

import App from "./App.tsx";
import { Providers } from "./providers.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <main className="min-h-screen w-screen bg-background text-foreground dark">
        <App />
      </main>
    </Providers>
  </React.StrictMode>,
);
