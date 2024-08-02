// Existing search, cart, and login form toggles
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
};

let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () => {
    loginForm.classList.toggle('active');
};

// Product slider functionality
const productSlider = document.querySelector('.product-slider .wrapper');
const productSliderBoxes = document.querySelectorAll('.product-slider .box');
let productCurrentIndex = 0;

function slideProduct(direction) {
    const boxWidth = productSliderBoxes[0].clientWidth + 16; // box width + margin
    if (direction === 'next') {
        if (productCurrentIndex < productSliderBoxes.length - 4) { // Adjust for visible boxes
            productCurrentIndex++;
            productSlider.style.transform = `translateX(-${boxWidth * productCurrentIndex}px)`;
        }
    } else if (direction === 'prev') {
        if (productCurrentIndex > 0) {
            productCurrentIndex--;
            productSlider.style.transform = `translateX(-${boxWidth * productCurrentIndex}px)`;
        }
    }
}

document.querySelector('.product-slider .prev').addEventListener('click', () => slideProduct('next'));
document.querySelector('.product-slider .next').addEventListener('click', () => slideProduct('prev'));

// Review slider functionality
const reviewSlider = document.querySelector('.review-slider .wrapper');
const reviewSliderBoxes = document.querySelectorAll('.review-slider .box');
let reviewCurrentIndex = 0;

function slideReview(direction) {
    const boxWidth = reviewSliderBoxes[0].clientWidth + 16; // box width + margin
    if (direction === 'next') {
        if (reviewCurrentIndex < reviewSliderBoxes.length - 3) { // Adjust for visible boxes
            reviewCurrentIndex++;
            reviewSlider.style.transform = `translateX(-${boxWidth * reviewCurrentIndex}px)`;
        }
    } else if (direction === 'prev') {
        if (reviewCurrentIndex > 0) {
            reviewCurrentIndex--;
            reviewSlider.style.transform = `translateX(-${boxWidth * reviewCurrentIndex}px)`;
        }
    }
}

// Add navigation buttons for review slider
const reviewPrevBtn = document.createElement('span');
const reviewNextBtn = document.createElement('span');

reviewPrevBtn.className = 'btn prev';
reviewNextBtn.className = 'btn next';

reviewPrevBtn.innerHTML = '<i class="ri-arrow-left-s-line"></i>';
reviewNextBtn.innerHTML = '<i class="ri-arrow-right-s-line"></i>';

document.querySelector('.review-slider').appendChild(reviewPrevBtn);
document.querySelector('.review-slider').appendChild(reviewNextBtn);

document.querySelector('.review-slider .prev').addEventListener('click', () => slideReview('prev'));
document.querySelector('.review-slider .next').addEventListener('click', () => slideReview('next'));


