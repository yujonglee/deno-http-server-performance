import { serve } from "https://deno.land/std@0.127.0/http/server.ts";

const handler = (): Response => {
  const body = "Hello World";

  return new Response(body, { status: 200 });
};

const port = 3000;

await serve(handler, { port });
