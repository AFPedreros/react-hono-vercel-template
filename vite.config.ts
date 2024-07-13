import { defineConfig, loadEnv } from "vite";
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
			entry: "./api/[[...route]].ts",
			exclude: [
				/.*\.tsx?($|\?)/,
				/.*\.(s?css|less)($|\?)/,
				/.*\.(svg|png)($|\?)/,
				/^\/@.+$/,
				/^\/favicon\.ico$/,
				/^\/(public|assets|static)\/.+/,
				/^\/node_modules\/.*/,
			],
			injectClientScript: false,
		}),
		!("VERCEL" in process.env) && visualizer(),
	],
});
