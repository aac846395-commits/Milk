// Cache name follows the app version: the page registers this file as sw.js?v=<APP_VERSION>,
// so bumping APP_VERSION in index.html automatically creates a fresh cache and drops the old one.
const V = new URL(self.location.href).searchParams.get('v') || '1';
const CACHE = 'chauhan-dairy-v' + V;
const CORE = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'icon-maskable-192.png', 'icon-maskable-512.png'];

self.addEventListener('install', e => {
  // add files one by one so a single missing file (e.g. an icon) does not break the whole install
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('chauhan-dairy-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (!/^https?:$/.test(new URL(req.url).protocol)) return;

  const store = res => {
    if (res && (res.ok || res.type === 'opaque')) {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
    }
    return res;
  };

  // Pages: network first (so updates show up immediately), cached copy when offline or slow.
  if (req.mode === 'navigate') {
    e.respondWith(
      Promise.race([
        fetch(req),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 4000))
      ]).then(store).catch(async () =>
        (await caches.match(req)) || (await caches.match('index.html')) || (await caches.match('./')) || Response.error()
      )
    );
    return;
  }

  // Everything else (fonts, PDF library, icons): cache first, refreshed in the background.
  e.respondWith(caches.match(req).then(cached => {
    const net = fetch(req).then(store).catch(() => cached || Response.error());
    return cached || net;
  }));
});
