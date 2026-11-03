// Service Worker for Typing Studio PWA
const CACHE_NAME = 'typing-studio-v1';
const URLs_TO_CACHE = [
  './',
  './index.html',
  './typing.html',
  './dashboard.html',
  './site.css',
  './passages.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLs_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});