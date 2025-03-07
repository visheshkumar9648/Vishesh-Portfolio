self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('portfolio-cache').then((cache) => {
        return cache.addAll([
            '/',
            '/Default.aspox',
            '/Index.js',
            '/Style.css',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  