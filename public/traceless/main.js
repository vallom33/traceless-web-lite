// TraceLess Web - Minimal JavaScript
// Target: < 1KB minified
// Only used for optional media loading on /experimentation

(function() {
  'use strict';
  
  // Base page weight in KB (HTML + CSS + JS)
  var baseWeight = 18;
  var currentWeight = baseWeight;
  
  // Image weights in KB
  var imageWeights = {
    'img-eco': 4,
    'img-forest': 6,
    'img-terminal': 3
  };
  
  // Update the weight indicator
  function updateWeight() {
    var indicator = document.getElementById('weight-indicator');
    if (indicator) {
      indicator.textContent = currentWeight + ' KB';
    }
  }
  
  // Load an image when button is clicked
  function loadImage(buttonId, imgId, src) {
    var button = document.getElementById(buttonId);
    if (!button) return;
    
    button.addEventListener('click', function() {
      var placeholder = button.closest('.media-placeholder');
      var weight = imageWeights[imgId] || 5;
      
      // Create image element
      var img = document.createElement('img');
      img.src = src;
      img.alt = button.getAttribute('data-alt') || 'Image';
      img.id = imgId;
      
      // Update weight
      currentWeight += weight;
      updateWeight();
      
      // Replace button with image
      button.style.display = 'none';
      var info = placeholder.querySelector('p');
      if (info) {
        info.textContent = 'Image chargée / Image loaded (' + weight + ' KB)';
      }
      placeholder.appendChild(img);
    });
  }
  
  // Initialize on DOM ready
  function init() {
    updateWeight();
    
    // Set up image loaders if on experimentation page
    loadImage('load-eco', 'img-eco', 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120" viewBox="0 0 200 120"><rect fill="#0f2810" width="200" height="120"/><text x="100" y="60" text-anchor="middle" fill="#4ade80" font-family="system-ui" font-size="14">🌱 Eco Image</text><text x="100" y="80" text-anchor="middle" fill="#9ca38f" font-family="system-ui" font-size="10">4 KB SVG</text></svg>'));
    
    loadImage('load-forest', 'img-forest', 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120" viewBox="0 0 200 120"><rect fill="#0f2810" width="200" height="120"/><path d="M40 100 L60 60 L80 100Z M70 100 L100 40 L130 100Z M120 100 L140 60 L160 100Z" fill="#22c55e"/><text x="100" y="110" text-anchor="middle" fill="#9ca38f" font-family="system-ui" font-size="8">Forest - 6 KB</text></svg>'));
    
    loadImage('load-terminal', 'img-terminal', 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120" viewBox="0 0 200 120"><rect fill="#0a1a0a" width="200" height="120" rx="4"/><rect fill="#1f3d1f" x="5" y="5" width="190" height="110" rx="2"/><text x="15" y="30" fill="#4ade80" font-family="monospace" font-size="10">$ traceless --info</text><text x="15" y="50" fill="#e8e4d9" font-family="monospace" font-size="10">Weight: minimal</text><text x="15" y="70" fill="#e8e4d9" font-family="monospace" font-size="10">Requests: 1</text><text x="15" y="90" fill="#e8e4d9" font-family="monospace" font-size="10">Trackers: 0</text></svg>'));
  }
  
  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
