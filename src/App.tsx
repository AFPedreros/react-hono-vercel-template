import { Skeleton } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

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
  const { data, isLoading } = useQuery({
    queryKey: ["get-hello"],
    queryFn: getHello,
  });

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6">
      <div className="flex">
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="size-36" src={viteLogo} />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="size-36" src={reactLogo} />
        </a>
      </div>
      <h1>Vite + React + Hono</h1>
      <div className="flex flex-col">
        {isLoading && (
          <Skeleton className="h-3 w-full min-w-36 rounded-lg bg-default-300" />
        )}
        {!isLoading && <code>{data?.message}</code>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
