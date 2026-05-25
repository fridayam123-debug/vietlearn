const CACHE = 'vietlearn-v2'

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([
      '/',
      '/alphabet',
      '/tones',
    ]))
  )
  self.skipWaiting()
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url)

  // Skip non-GET and cross-origin
  if (e.request.method !== 'GET') return
  if (url.origin !== self.location.origin) return

  // Network-first for HTML pages, stale-while-revalidate for assets
  const isPage = !url.pathname.includes('.')
  if (isPage) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()))
          return res
        })
        .catch(() => caches.match(e.request))
    )
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => {
        const fresh = fetch(e.request).then(res => {
          if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()))
          return res
        }).catch(() => cached)
        return cached || fresh
      })
    )
  }
})
