document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            if (document.body.classList.contains('dark')) {
                toggleButton.textContent = '☀️';
            }
            else {
                toggleButton.textContent = '🌙';
            }
        });
    }
    // Funcionalidade de favoritar
    const moviesList = document.getElementById('movies-list');
    if (moviesList) {
        moviesList.addEventListener('click', (e) => {
            var _a;
            const target = e.target;
            if (target.closest('.favorite')) {
                const favoriteIcon = (_a = target.closest('.favorite')) === null || _a === void 0 ? void 0 : _a.querySelector('img');
                if (favoriteIcon) {
                    const isFavorited = favoriteIcon.src.includes('heart-fill.svg');
                    if (isFavorited) {
                        favoriteIcon.src = 'images/heart.svg';
                    }
                    else {
                        favoriteIcon.src = 'images/heart-fill.svg';
                    }
                }
            }
            // Funcionalidade de expandir descrição
            if (target.classList.contains('expand-btn')) {
                const btn = target;
                const descText = btn.previousElementSibling;
                const isExpanded = btn.dataset.expanded === 'true';
                if (isExpanded) {
                    const fullDesc = btn.dataset.full || '';
                    const truncated = fullDesc.length > 100 ? fullDesc.substring(0, 100) + '...' : fullDesc;
                    if (descText)
                        descText.textContent = truncated;
                    btn.textContent = 'Exibir mais';
                    btn.dataset.expanded = 'false';
                }
                else {
                    const fullDesc = btn.dataset.full || '';
                    if (descText)
                        descText.textContent = fullDesc;
                    btn.textContent = 'Exibir menos';
                    btn.dataset.expanded = 'true';
                }
            }
        });
    }
});
