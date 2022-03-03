const port = 3001;

const listener = Deno.listen({ port });

for await(const c of listener) {
    handleHttp(c);
}

async function handleHttp(connection: Deno.Conn) {
    for await (const { respondWith } of Deno.serveHttp(connection)) {
        respondWith(new Response("Hello World"));
    }
}
