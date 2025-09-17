document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      toggleButton.textContent = '☀️';
    } else {
      toggleButton.textContent = '🌙';
    }
  });
});

