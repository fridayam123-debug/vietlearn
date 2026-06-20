const CACHE = 'vietlearn-v5'

const TOPICS = [
  'school','food','animals','family','daily',
  'numbers-time','travel','cooking','mart',
  'electronics','hotel','real-estate','business',
]

const TYPES    = ['word','verb']
const SESSIONS = [1,2,3,4]

// Build full page list
const PAGES = [
  '/',
  '/alphabet', '/alphabet/quiz',
  '/tones',    '/tones/quiz',
]

for (const t of TOPICS) {
  PAGES.push(`/topic/${t}`)
  PAGES.push(`/topic/${t}/conversation`)
  for (let s = 1; s <= 6; s++) PAGES.push(`/topic/${t}/fullquiz/${s}`)
  for (const type of TYPES) {
    for (const s of SESSIONS) {
      PAGES.push(`/topic/${t}/session/${type}-${s}`)
    }
  }
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => {
      // addAll fails if ANY request fails — use individual puts to be resilient
      return Promise.allSettled(
        PAGES.map(url =>
          fetch(url).then(res => { if (res.ok) c.put(url, res) }).catch(() => {})
        )
      )
    })
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
  if (e.request.method !== 'GET') return
  if (url.origin !== self.location.origin) return

  // /_next/static/ — immutable hashed assets: cache-first forever
  if (url.pathname.startsWith('/_next/static/')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached
        return fetch(e.request).then(res => {
          if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()))
          return res
        })
      })
    )
    return
  }

  // Icons / manifest
  if (url.pathname.startsWith('/icons/') || url.pathname === '/manifest.webmanifest') {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached
        return fetch(e.request).then(res => {
          if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()))
          return res
        })
      })
    )
    return
  }

  // HTML pages — network-first, fall back to cache for offline
  if (!url.pathname.includes('.') || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()))
          return res
        })
        .catch(() => caches.match(e.request))
    )
    return
  }

  // Everything else — stale-while-revalidate
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fresh = fetch(e.request).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()))
        return res
      }).catch(() => cached)
      return cached || fresh
    })
  )
})
