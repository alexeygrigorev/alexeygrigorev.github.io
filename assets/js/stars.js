// Star button functionality
(function() {
  // Load starred projects from localStorage
  function getStarredProjects() {
    const starred = localStorage.getItem('starredProjects');
    return starred ? JSON.parse(starred) : [];
  }

  // Save starred projects to localStorage
  function saveStarredProjects(starred) {
    localStorage.setItem('starredProjects', JSON.stringify(starred));
  }

  // Initialize star buttons
  function initStarButtons() {
    const starButtons = document.querySelectorAll('.star-btn');
    const starredProjects = getStarredProjects();

    starButtons.forEach(function(button) {
      const projectName = button.getAttribute('data-project');
      const outlineIcon = button.querySelector('.star-icon-outline');
      const filledIcon = button.querySelector('.star-icon-filled');
      
      // Set initial state
      if (starredProjects.includes(projectName)) {
        button.classList.add('starred');
        button.querySelector('.star-text').textContent = 'Starred';
        outlineIcon.style.display = 'none';
        filledIcon.style.display = '';
      }

      // Add click handler
      button.addEventListener('click', function(e) {
        e.preventDefault();
        toggleStar(button, projectName);
      });
    });
  }

  // Toggle star state
  function toggleStar(button, projectName) {
    let starredProjects = getStarredProjects();
    const isStarred = button.classList.contains('starred');
    const textElement = button.querySelector('.star-text');
    const outlineIcon = button.querySelector('.star-icon-outline');
    const filledIcon = button.querySelector('.star-icon-filled');

    if (isStarred) {
      // Unstar
      button.classList.remove('starred');
      textElement.textContent = 'Star';
      outlineIcon.style.display = '';
      filledIcon.style.display = 'none';
      starredProjects = starredProjects.filter(function(name) {
        return name !== projectName;
      });
    } else {
      // Star
      button.classList.add('starred');
      textElement.textContent = 'Starred';
      outlineIcon.style.display = 'none';
      filledIcon.style.display = '';
      starredProjects.push(projectName);
    }

    saveStarredProjects(starredProjects);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStarButtons);
  } else {
    initStarButtons();
  }
})();
