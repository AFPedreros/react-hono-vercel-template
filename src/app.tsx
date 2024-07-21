import { Button, Link, Skeleton } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

import { GithubIcon } from "./components/icons";

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
      <div className="flex gap-8">
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img
            alt="Vite logo"
            className="size-24 duration-300 hover:drop-shadow-[0_0_2rem_#646cff]"
            src={viteLogo}
          />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img
            alt="React logo"
            className="animate-spin-logo size-24 duration-300 hover:drop-shadow-[0_0_2rem_#61dafb]"
            src={reactLogo}
          />
        </a>
      </div>
      <h1 className="py-8 text-5xl font-bold">Vite + React + Hono</h1>
      <div className="flex flex-col items-center gap-4 py-8">
        <Button
          isExternal
          as={Link}
          className="w-fit text-sm"
          href="https://github.com/AFPedreros/react-hono-vercel-template"
          size="md"
          startContent={<GithubIcon />}
          variant="bordered"
        >
          {" "}
          Github
        </Button>
        {isLoading && (
          <div className="flex h-6 w-full items-center justify-center">
            <Skeleton className="h-4 w-full min-w-36 rounded-lg bg-default-300" />
          </div>
        )}
        {!isLoading && <code>{data?.message}</code>}
      </div>
      <p className="text-foreground-400">
        The Hono api and the React app are deployed on Vercel.
      </p>
    </div>
  );
}

export default App;
