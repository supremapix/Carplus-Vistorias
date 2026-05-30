// Service Worker for Carplus Vistorias
const CACHE_NAME = 'carplus-seo-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/contato.html',
  '/mapa-do-site.html',
  'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://img.carplusvistorias.com.br/favicon-carplus.png',
  'https://img.carplusvistorias.com.br/carplus-vistorias-portao-logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle standard GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip browser extensions, chrome-extension:// etc.
  if (!event.request.url.startsWith(self.location.origin) && !event.request.url.startsWith('https://')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        // Cache successful requests to styles, fonts, or images from carplus domain
        if (
          response.status === 200 && 
          (event.request.url.includes('fonts.googleapis') || 
           event.request.url.includes('img.carplusvistorias.com.br') ||
           event.request.url.includes('cdnjs.cloudflare'))
        ) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        // Safe offline fallback if fetch fails
        return caches.match('/');
      });
    })
  );
});
