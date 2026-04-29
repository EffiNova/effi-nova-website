/**
 * GTM Button-Click Tracking
 * Pusht ein "button_clicked"-Event mit dem Button-Text in den dataLayer.
 */
document.addEventListener('click', function (e) {
  var el = e.target.closest('a, button');
  if (!el) return;

  var text = (el.textContent || '').replace(/\s+/g, ' ').trim();
  if (!text) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'button_clicked',
    button_text: text
  });
});
