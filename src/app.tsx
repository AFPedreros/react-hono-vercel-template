import { Button, Link } from "@nextui-org/react";

import honoLogo from "/hono.svg";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

import { GithubIcon } from "./components/icons";

import { Hello } from "@/features/hello/components/hello";

function App() {
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
            className="size-24 animate-spin-logo duration-300 hover:drop-shadow-[0_0_2rem_#61dafb]"
            src={reactLogo}
          />
        </a>
        <a href="https://hono.dev/" rel="noreferrer" target="_blank">
          <img
            alt="Hono logo"
            className="size-24 duration-300 hover:drop-shadow-[0_0_2rem_#ff5b11]"
            src={honoLogo}
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

        <Hello />
      </div>
      <p className="text-foreground-400">
        Full-Stack monorepo with Hono API and React frontend deployed on Vercel
      </p>
    </div>
  );
}

export default App;
