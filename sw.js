// Burak Yapı & İnşaat — Service Worker (Network-First with Offline Fallback)
const CACHE_NAME = "burak-yapi-v1";
const OFFLINE_URL = "/404.html";

// Install: Cache the offline fallback page
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(OFFLINE_URL))
  );
  self.skipWaiting();
});

// Activate: Clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: Network-first, fallback to cache, then offline page
self.addEventListener("fetch", (event) => {
  if (event.request.mode !== "navigate") return;

  event.respondWith(
    fetch(event.request)
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match(OFFLINE_URL))
      )
  );
});
