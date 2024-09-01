let currentSlide = 0;
const imagePath = 'clippy_images/';
const images = [
    'blockchain_expert_clippy.webp',
    'bowser_w_clippy.webp',
    'claymation_clippy_eating_burrito.webp',
    'clippy_playing_poker.webp',
    'clippy_w_burrito.webp',
    'evil_giant_clippy_towering_over_city.webp',
    'godzilla_vs_clippy.webp',
    'programmer_clippy_in_office.webp'
];
const captions = [
    'Blockchain Expert Clippy',
    'Bowser with Clippy',
    'Clippy Eating Burrito',
    'Clippy Playing Poker',
    'Clippy with Burrito',
    'Evil Giant Clippy Towering over City',
    'Godzilla vs. Clippy',
    'Programmer Clippy in Office'
];
function showSlides() {
    const gallery = document.getElementById('gallery');
    const caption = document.getElementById('caption');
    gallery.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const imgIndex = (currentSlide + i) % images.length;
        const img = document.createElement('img');
        img.src = imagePath + images[imgIndex];
        img.alt = captions[imgIndex];
        gallery.appendChild(img);
    }
    const middleIndex = (currentSlide + 1) % images.length;
    caption.innerText = captions[middleIndex];
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlides();
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlides();
}
window.onload = showSlides;