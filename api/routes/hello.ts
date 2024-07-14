import { Hono } from "hono";

import.meta.env = process.env;

export const helloRoute = new Hono()
	.get("/", (c) => {
		return c.json({
			message: "Hello from Hono!",
		});
	})
	.get("/env", (c) => {
		return c.json({
			message: `${import.meta.env.DEMO}`,
		});
	});
