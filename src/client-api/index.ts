import { hc } from "hono/client";

import type { ApiRoutes } from "@server/[[...route]]";

const client = hc<ApiRoutes>("/");

export const api = client.api;
