const CACHE_NAME = 'system-cache-v12';

self.addEventListener('install', (event) => { self.skipWaiting(); });
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(names.filter(n=>n!==CACHE_NAME).map(n=>caches.delete(n))))
  );
});
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
