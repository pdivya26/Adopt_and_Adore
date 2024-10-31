function moveCarousel(carouselId, direction) {
    const carouselContainer = document.querySelector(`#${carouselId} .carousel-container`);
    const cards = carouselContainer.children;
    const totalCards = cards.length;
    const visibleCards = 3; // Number of cards visible at once
    let currentIndex = parseInt(carouselContainer.dataset.currentIndex) || 0;

    // Calculate the new index
    currentIndex += direction;

    // Ensure the new index is within the bounds of the cards array
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = totalCards - visibleCards;
    }

    // Update the transform property to show the current set of cards
    carouselContainer.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
    
    // Update the current index in the dataset
    carouselContainer.dataset.currentIndex = currentIndex;
}

// Optional: Add event listeners to handle the initial setup for carousels
document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        carousel.dataset.currentIndex = 0; // Initialize current index for each carousel
    });
});
