export function setupThemeToggle(element) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let isDark = prefersDark;

  // Set initial theme
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  element.textContent = isDark ? '☀️' : '🌙';

  element.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    element.textContent = isDark ? '☀️' : '🌙';
  });
} 