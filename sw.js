let cacheName = "cache-v1";

self.addEventListener("install", (e) => {
  self.skipWaiting(); // Faz o novo SW substituir o antigo imediatamente

  let cache = caches.open(cacheName).then((c) => {
    c.addAll([
      // nothing
    ]);
  });

  e.waitUntil(cache);
});

self.addEventListener("activate", (e) => {
  caches.keys().then((cacheNames) => {
    return Promise.all(
      cacheNames.map((cache) => {
        if (cache !== cacheName) {
          return caches.delete(cache); // Remove caches antigos
        }
      })
    );
  });
});

self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request)); // Sempre busca arquivos novos, sem cache
});
