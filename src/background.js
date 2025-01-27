export function setupGalaxyBackground() {
  const container = document.createElement('div');
  const overlay = document.createElement('div');
  container.className = 'galaxy-background';
  overlay.className = 'galaxy-background-overlay';
  document.body.prepend(overlay);
  document.body.prepend(container);

  // Array of direct galaxy/space image URLs
  const GALAXY_IMAGES = [
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
    'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86',
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a',
    'https://images.unsplash.com/photo-1543722530-d2c3201371e7',
    'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3',
    'https://images.unsplash.com/photo-1465101162946-4377e57745c3'
  ];

  let currentIndex = 0;
  let nextImage = new Image();

  function preloadNextImage() {
    const nextIndex = (currentIndex + 1) % GALAXY_IMAGES.length;
    nextImage.src = GALAXY_IMAGES[nextIndex];
  }

  function updateBackground() {
    container.classList.add('fade-out');
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % GALAXY_IMAGES.length;
      container.style.backgroundImage = `url(${GALAXY_IMAGES[currentIndex]})`;
      container.classList.remove('fade-out');
      preloadNextImage();
    }, 500);
  }

  // Initial setup
  container.style.backgroundImage = `url(${GALAXY_IMAGES[0]})`;
  preloadNextImage();

  // Update background every 5 seconds
  setInterval(updateBackground, 5000);
} 