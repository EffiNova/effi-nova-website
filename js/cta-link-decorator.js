/**
 * CTA-Link-Decorator
 *
 * Hängt Marketing-Parameter (gclid, fbclid, utm_*) der aktuellen Page-URL
 * an alle CTA-Links Richtung funnel.effi-nova.de an, damit die Attribution
 * über den Subdomain-Wechsel hinweg erhalten bleibt.
 *
 * O-067 / D-067 (effi-nova-funnel-Repo) — Cross-Domain-Marketing-Parameter-Passthrough.
 * Consent-frei: URL-Parameter sind keine Cookies / kein Browser-Storage.
 */
(function () {
  try {
    var PASSTHROUGH_KEYS = [
      'gclid',
      'fbclid',
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content'
    ];

    var params = new URLSearchParams(window.location.search);
    var relevant = PASSTHROUGH_KEYS.filter(function (k) { return params.has(k); });
    if (relevant.length === 0) return;

    function decorate() {
      var links = document.querySelectorAll('a[href*="funnel.effi-nova.de"]');
      links.forEach(function (link) {
        try {
          var url = new URL(link.href);
          relevant.forEach(function (k) {
            url.searchParams.set(k, params.get(k));
          });
          link.href = url.toString();
        } catch (e) {
          // einzelner ungültiger href bricht den Decorator nicht
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', decorate);
    } else {
      decorate();
    }
  } catch (e) {
    // Decorator-Fehler darf das Pageload nicht beeinträchtigen
  }
})();
