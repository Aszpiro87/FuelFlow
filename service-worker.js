self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('fuel-flow-cache').then(function(cache) {
      return cache.addAll([
        './index.html',
        './fuel_flow_icon.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
