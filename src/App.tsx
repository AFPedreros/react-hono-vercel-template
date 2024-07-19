import { useEffect, useState } from "react";

import "./App.css";

import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";

import { api } from "@/client-api";

async function getHello() {
  const response = await api.hello.$get();

  if (!response.ok) {
    throw new Error("Server error");
  }

  const data = await response.json();

  return data;
}

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    getHello().then((response) => {
      setHello(response.message);
    });
  }, []);

  return (
    <main className="flex min-h-screen w-full gap-6 flex-col justify-center items-center">
      <div className="flex">
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="size-36" src={viteLogo} />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="size-36" src={reactLogo} />
        </a>
      </div>
      <h1>Vite + React + Hono</h1>
      <div className="card">
        <code>{hello}</code>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;
