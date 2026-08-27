const CACHE_NAME = 'salary-punch-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// 安裝 Service Worker 並快取核心檔案
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 攔截請求並提供離線快取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});