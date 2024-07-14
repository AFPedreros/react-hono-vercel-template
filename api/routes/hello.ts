import { Hono } from "hono";
import { loadEnv } from "vite";

process.env = { ...process.env, ...loadEnv("production", process.cwd(), "") };

export const helloRoute = new Hono()
	.get("/", (c) => {
		return c.json({
			message: "Hello from Hono!",
		});
	})
	.get("/env", (c) => {
		return c.json({
			message: !("VERCEL" in process.env),
		});
	});
