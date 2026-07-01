// Theme toggle functionality.
// The initial theme is applied by an inline script in _layouts/default.html
// (before first paint) to avoid a flash of the wrong theme. This file only
// wires up the toggle button.
(function() {
  var themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  var body = document.body;

  themeToggle.addEventListener('click', function() {
    var currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.classList.remove(currentTheme);
    body.classList.add(newTheme);

    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // localStorage not available (e.g., private browsing)
    }
  });
})();
