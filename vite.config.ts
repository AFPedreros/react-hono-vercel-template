import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import devServer from "@hono/vite-dev-server";
import { visualizer } from "rollup-plugin-visualizer";
import simpleHtmlPlugin from "vite-plugin-simple-html";

process.env = { ...process.env, ...loadEnv("production", process.cwd(), "") };

export default defineConfig({
	plugins: [
		react(),
		simpleHtmlPlugin({
			minify: true,
		}),
		devServer({
			entry: "./server/[[...route]].ts",
			injectClientScript: false,
		}),
		!("VERCEL" in process.env) && visualizer(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@api": path.resolve(__dirname, "./server"),
		},
	},
});
