document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mainNav = document.querySelector('.main-nav');

    // Ensure the menu starts in a closed state
    console.log('Before removing active:', mainNav.classList);
    mainNav.classList.remove('active');
    console.log('After removing active:', mainNav.classList);

    menuToggle.addEventListener('click', () => {
        mainNav.classList.add('active');
        console.log('Menu opened:', mainNav.classList);
    });

    closeMenu.addEventListener('click', () => {
        mainNav.classList.remove('active');
        console.log('Menu closed:', mainNav.classList);
    });

    // Close the menu if a click occurs outside it
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('active');
            console.log('Menu closed by outside click:', mainNav.classList);
        }
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const peekingImage = document.querySelector('.peeking-image');

    window.addEventListener('scroll', () => {
        const footerPosition = document.querySelector('footer').getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerPosition <= windowHeight) {
            peekingImage.classList.add('active');
        } else {
            peekingImage.classList.remove('active');
        }
    });
});

function showFullImage(image) {
    const modal = document.getElementById('image-modal');
    const fullImage = document.getElementById('full-image');
    fullImage.src = image.src;
    modal.style.display = 'flex';
}

function hideFullImage() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}