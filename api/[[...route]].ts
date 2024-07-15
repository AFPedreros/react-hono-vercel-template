import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";
import { helloRoute } from "./routes/hello";

export const config = {
	runtime: "edge",
};

const isProd = process.env["NODE_ENV"] === "production";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").route("/hello", helloRoute);

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

if (!isProd) {
	import("@hono/node-server").then(({ serve }) => {
		serve({ fetch: app.fetch, port: 3000 });
	});
}
