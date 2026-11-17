// Service Worker สำหรับศูนย์ข้าวชุมชนตำบลบ้านทราย
const CACHE_NAME = 'bansai-rice-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // สำหรับการใช้งานทั่วไปปล่อยให้ fetch ผ่าน network ตามปกติ
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
