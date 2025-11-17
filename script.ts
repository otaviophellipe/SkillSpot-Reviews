interface Movie {
  title: string;
  image: string;
  rating: string;
  description: string;
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton: HTMLElement | null = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      if (document.body.classList.contains('dark')) {
        toggleButton.textContent = '☀️';
      } else {
        toggleButton.textContent = '🌙';
      }
    });
  }

  // Funcionalidade de favoritar
  const moviesList: HTMLElement | null = document.getElementById('movies-list');
  if (moviesList) {
    moviesList.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('.favorite')) {
        const favoriteIcon: HTMLImageElement | null = target.closest('.favorite')?.querySelector('img') as HTMLImageElement;
        if (favoriteIcon) {
          const isFavorited: boolean = favoriteIcon.src.includes('heart-fill.svg');
          if (isFavorited) {
            favoriteIcon.src = 'images/heart.svg';
          } else {
            favoriteIcon.src = 'images/heart-fill.svg';
          }
        }
      }

      // Funcionalidade de expandir descrição
      if (target.classList.contains('expand-btn')) {
        const btn: HTMLElement = target;
        const descText: HTMLElement | null = btn.previousElementSibling as HTMLElement;
        const isExpanded: boolean = btn.dataset.expanded === 'true';
        if (isExpanded) {
          const fullDesc: string = btn.dataset.full || '';
          const truncated: string = fullDesc.length > 100 ? fullDesc.substring(0, 100) + '...' : fullDesc;
          if (descText) descText.textContent = truncated;
          btn.textContent = 'Exibir mais';
          btn.dataset.expanded = 'false';
        } else {
          const fullDesc: string = btn.dataset.full || '';
          if (descText) descText.textContent = fullDesc;
          btn.textContent = 'Exibir menos';
          btn.dataset.expanded = 'true';
        }
      }
    });
  }
});
