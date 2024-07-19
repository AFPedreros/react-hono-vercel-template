// eslint-disable-next-line import/order
import path from "node:path";
import devServer from "@hono/vite-dev-server";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

process.env = { ...process.env, ...loadEnv("production", process.cwd(), "") };

const resolve = {
  alias: {
    "@": path.resolve(__dirname, "./src"),
    "@api": path.resolve(__dirname, "./api"),
  },
};

export default defineConfig(async ({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [react()],
      resolve,
      server: {
        proxy: {
          "/api": {
            target: "http://localhost:3000",
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api/, "/api"),
          },
        },
      },
    };
  } else {
    const isDev = process.env.NODE_ENV === "development";
    let devServerPlugin;

    if (isDev) {
      // const { env, dispose } = await getPlatformProxy();
      devServerPlugin = devServer({
        entry: "./api/[[...route]].ts",
      });
    }

    return {
      plugins: [devServerPlugin],
      resolve,
      server: {
        port: 3000,
      },
    };
  }
});

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//       "@api": path.resolve(__dirname, "./api"),
//     },
//   },
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3000",
//         changeOrigin: true,
//       },
//     },
//   },
// });
