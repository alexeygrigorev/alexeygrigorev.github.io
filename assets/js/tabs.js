// Tab navigation functionality
(function() {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Update tab buttons
      tabs.forEach(function(t) {
        t.classList.remove('active');
      });
      this.classList.add('active');
      
      // Update tab content
      tabContents.forEach(function(content) {
        content.classList.remove('active');
      });
      document.getElementById('tab-' + targetTab).classList.add('active');
    });
  });
  
  // Generate contribution graph
  generateContributionGraph();
})();

function generateContributionGraph() {
  var container = document.getElementById('contribution-graph');
  if (!container) return;
  
  // Generate 52 weeks of data
  for (var week = 0; week < 52; week++) {
    var weekDiv = document.createElement('div');
    weekDiv.className = 'graph-week';
    
    for (var day = 0; day < 7; day++) {
      var dayDiv = document.createElement('div');
      dayDiv.className = 'graph-day';
      
      // Random contribution level
      var rand = Math.random();
      if (rand > 0.8) {
        dayDiv.classList.add('level-4');
      } else if (rand > 0.6) {
        dayDiv.classList.add('level-3');
      } else if (rand > 0.4) {
        dayDiv.classList.add('level-2');
      } else if (rand > 0.2) {
        dayDiv.classList.add('level-1');
      }
      
      weekDiv.appendChild(dayDiv);
    }
    
    container.appendChild(weekDiv);
  }
}
