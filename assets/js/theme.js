// Theme toggle functionality
(function() {
  var themeToggle = document.getElementById('theme-toggle');
  var body = document.body;
  
  // Check for saved theme preference or default to light
  var savedTheme = 'light';
  try {
    savedTheme = localStorage.getItem('theme') || 'light';
  } catch (e) {
    // localStorage not available (e.g., private browsing)
  }
  
  body.classList.remove('light', 'dark');
  body.classList.add(savedTheme);
  
  themeToggle.addEventListener('click', function() {
    var currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.classList.remove(currentTheme);
    body.classList.add(newTheme);
    
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // localStorage not available
    }
  });
})();
