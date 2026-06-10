// Theme management — light / dark / system
(function () {
  const STORAGE_KEY = 'portfolio-theme';

  function getStored() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function applyTheme(theme) {
    if (theme === 'system' || !theme) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  function updateButton() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const stored = getStored() || 'system';
    const icons = { light: '☀️', dark: '🌙', system: '💻' };
    btn.textContent = icons[stored] || '💻';
    btn.title = `Theme: ${stored}. Click to cycle.`;
  }

  function cycleTheme() {
    const current = getStored() || 'system';
    const next = current === 'system' ? 'light' : current === 'light' ? 'dark' : 'system';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    updateButton();
  }

  // Apply on load immediately (before paint)
  applyTheme(getStored());

  document.addEventListener('DOMContentLoaded', function () {
    updateButton();
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', cycleTheme);
  });
})();
