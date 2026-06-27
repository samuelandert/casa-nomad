const port = Number(Bun.env.PORT ?? 3000);

Bun.serve({
  port,
  fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;
    const file = Bun.file(`.${path}`);
    return new Response(file);
  },
});

console.log(`Casa Nomad → http://localhost:${port}`);
