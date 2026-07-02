const CACHE_NAME = 'focus-monitor-v2';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.svg'
];

// Install and cache files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve from cache when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
