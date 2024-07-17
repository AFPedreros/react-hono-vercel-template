import { serve } from "@hono/node-server";

import app from "./api/[[...route]]";

serve({ fetch: app.fetch, port: 3000 });
