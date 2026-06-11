(function () {
  var KEY = 'dara-theme';
  function get() { return localStorage.getItem(KEY); }
  function apply(t) {
    if (!t || t === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  }
  function icon(t) {
    return t === 'light' ? '☀️' : t === 'dark' ? '🌙' : '💻';
  }
  apply(get());
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-btn');
    if (!btn) return;
    btn.textContent = icon(get() || 'system');
    btn.addEventListener('click', function () {
      var cur = get() || 'system';
      var next = cur === 'system' ? 'light' : cur === 'light' ? 'dark' : 'system';
      localStorage.setItem(KEY, next);
      apply(next);
      btn.textContent = icon(next);
    });
  });
})();
