import { Hono } from "hono";

export const helloRoute = new Hono().get("/hello", (c) => {
	return c.json({
		message: "Hello world!",
	});
});
