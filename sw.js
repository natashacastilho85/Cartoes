self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Apenas cumpre o requisito do Google Chrome para PWA
    e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
