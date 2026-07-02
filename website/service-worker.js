// Education Interactive Game Maker service worker
// This enables install/app mode without aggressively caching files while the site is still being developed.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Network-only on purpose: avoids stale quiz-list.json and stale quiz HTML during development.
});
