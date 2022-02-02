var CACHE_NAME = 'eg-shop-wa';
var urlsToCache = [
  '/static/js/bundle.js',
  '/static/media/home.1347587c173ea3c61a86d1b1fda71263.svg',
  '/static/media/cart.45052e3499b1818f6caf2acaeb281c02.svg',
  '/static/media/banner.410f6b01c0dc74ef4f6b.webp',
  '/static/media/notification.d736132d8b2d8fb264c1a7800e7af19c.svg',
  '/static/media/profile.95e34f920494bf5e3ae4118e7ed67471.svg',
  '/static/media/location.1933b5ed6f86dbb7ccfdc33d36a5eae7.svg',
  '/icons/favicon-16x16.png',
  '/icons/favicon-32x32.png',
  '/icons/favicon.ico',
  '/icons/maskable_icon_x48.png',
  '/icons/maskable_icon_x96.png',
  '/icons/maskable_icon_x128.png',
  '/icons/maskable_icon_x192.png',
  '/icons/maskable_icon_x512.png',
  '/icons/maskable_icon.png',
  '/index.html',
  '/home',
  '/cart',
  '/notifications',
  '/profile',
  '/shop',
  '/manifest.json'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// // Update a service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName === CACHE_NAME) { return; }
          return caches.delete(key);
        })
      );
    })
  );
});