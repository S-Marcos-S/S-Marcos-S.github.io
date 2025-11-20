document.addEventListener('DOMContentLoaded', () => {
    // Ordem de navegação das páginas
    const pages = ['index.html', 'aplicativos.html', 'sobre.html', 'roms.html'];
    
    // Encontra a página atual
    const currentPageName = window.location.pathname.split('/').pop() || 'index.html';
    const currentIndex = pages.indexOf(currentPageName);

    // Se a página atual não está na lista, não faz nada
    if (currentIndex === -1) return;

    let touchstartX = 0;
    let touchendX = 0;
    const swipeThreshold = 75; // Distância mínima para considerar um swipe (em pixels)

    function handleSwipe() {
        const swipeDistance = touchendX - touchstartX;

        // Ignora se o swipe for muito curto
        if (Math.abs(swipeDistance) < swipeThreshold) {
            return; 
        }

        if (swipeDistance < 0) { // Swipe para a Esquerda (->)
            const nextIndex = (currentIndex + 1) % pages.length;
            window.location.href = pages[nextIndex];
        } else { // Swipe para a Direita (<-)
            const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
            window.location.href = pages[prevIndex];
        }
    }

    document.body.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.body.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    });
});
