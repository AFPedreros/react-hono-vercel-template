import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";
import { helloRoute } from "./routes/hello";

// Configure environment variables properly
import.meta.env = process.env;

export const config = {
	runtime: "edge",
};

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").route("/hello", helloRoute);

// app.get("/hello", (c) => {
// 	return c.json({
// 		message: "Hello world!",
// 	});
// });

// app.get("/env", (c) => {
// 	return c.json({
// 		message: `${import.meta.env.DEMO} | ${import.meta.env.VITE_DEMO}`,
// 	});
// });

app.all("*", (c) => c.text("404: Not Found"));

// Register the handler for Vercel Edge Functions
export const GET = handle(app);
export const POST = GET;
export const PUT = GET;
export const PATCH = GET;
export const DELETE = GET;

// Expose the app for `@hono/vite-dev-server`
export default app;
export type ApiRoutes = typeof apiRoutes;
