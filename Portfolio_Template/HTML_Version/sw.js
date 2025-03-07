const CACHE_NAME = "portfolio-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/Index.js",
  "/Styles.css",
    "/photos//header_img1.png",
  "/photos//img2.png",
  "/photos//3426526.jpg",
  "/photos//19432.jpg",
  "/photos//tormarch26.jpg"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate & Clean Old Caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});
