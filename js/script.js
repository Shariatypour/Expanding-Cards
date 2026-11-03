const cards = document.querySelectorAll('.card');

function activateCard(selectedCard) {
    cards.forEach((card) => {
        const isActive = card === selectedCard;
        card.classList.toggle('active', isActive);
        card.setAttribute('aria-pressed', String(isActive));
    });
}

cards.forEach((card) => {
    card.addEventListener('click', () => activateCard(card));
});
