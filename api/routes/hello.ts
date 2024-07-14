import { Hono } from "hono";

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
