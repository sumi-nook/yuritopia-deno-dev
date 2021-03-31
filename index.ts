addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(
      "<h1>yuritopia.deno.dev</h1>",
      {
        "status": 200,
        "headers": {
          "content-type": "text/html",
        },
      }
    )
  );
});
