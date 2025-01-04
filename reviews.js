/*const form = document.getElementById("review-form");
const reviewsList = document.getElementById("reviews-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const reviewText = document.getElementById("review-text").value;
    const rating = document.getElementById("rating").value;

    const review = document.createElement("div");
    review.classList.add("review");
    review.innerHTML = `<p><strong>Évaluation :</strong> ${rating} étoiles</p><p>${reviewText}</p>`;
    reviewsList.appendChild(review);

    form.reset();
});*/
const form = document.getElementById('review-form');
const reviewsList = document.getElementById('reviews-list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the form
    const reviewText = document.getElementById('review-text').value;
    const rating = document.getElementById('rating').value;

    // Create a new review element
    const newReview = document.createElement('div');
    newReview.classList.add('review');

    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

    newReview.innerHTML = `
        <div class="stars">${stars}</div>
        <p><strong>Anonyme:</strong> ${reviewText}</p>
    `;

    // Add the new review to the list
    reviewsList.prepend(newReview);

    // Clear the form
    form.reset();
});

