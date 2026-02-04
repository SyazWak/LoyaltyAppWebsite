// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize animations for cards and rows
document.querySelectorAll('.product-row, .feature-card, .tech-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    observer.observe(el);
});

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// CONSOLE LOG (PORTFOLIO VERSION)
// ===================================

console.log('%c🎯 SW Loyalty Ecosystem | Portfolio Showcase', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cProject Architecture & Implementation by Waiz', 'font-size: 14px; color: #a855f7;');
console.log('%cInterested in the tech stack? Explore the repository for details.', 'font-size: 12px; color: #94a3b8;');

// ===================================
// LIGHTBOX / IMAGE MODAL
// ===================================

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-modal");

// Select only the main product images for expansion
const expandableImages = document.querySelectorAll('img[data-expandable]');

expandableImages.forEach(img => {
    img.onclick = function () {
        modal.classList.add('show');
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
});

// Close modal when clicking close button, the background, or ESC key
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

closeBtn.onclick = closeModal;

modal.onclick = function (e) {
    if (e.target === modal) {
        closeModal();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});
