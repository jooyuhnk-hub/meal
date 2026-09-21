// Minimal service worker — only exists so Chrome/Android treats the page as
// an installable app ("홈 화면에 추가" -> real app icon, no browser bar).
// It intentionally does NOT cache anything: every open should load whatever
// is actually on the server / synced from Firestore, never a stale copy.
self.addEventListener("install", function (e) {
  self.skipWaiting();
});
self.addEventListener("activate", function (e) {
  self.clients.claim();
});
self.addEventListener("fetch", function (e) {
  // no respondWith() -> browser's normal network fetch happens as usual
});
