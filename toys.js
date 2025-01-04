document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * (itemWidth + 20)}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Add to Cart Functionality
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const toyCard = button.closest('.carousel-item');
            const toyName = toyCard.getAttribute('data-name');
            const toyPrice = parseFloat(toyCard.getAttribute('data-price'));

            // Add to cart
            cart.push({ name: toyName, price: toyPrice });

            // Update cart count
            cartCount.textContent = cart.length;

            // Button animation
            button.textContent = "Ajouté ! ✅";
            setTimeout(() => {
                button.textContent = "Ajouter au panier 🛒";
            }, 1000);
        });
    });
});
