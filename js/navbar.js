// Navbar functionality - transparent-over-hero to glassmorphic on scroll, sticky

function initializeNavbar() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) {
        // Navbar doesn't exist yet - will be created by HTML
        return;
    }

    // rAF-throttled so layout reads (offsetTop, scrollY) happen at most once
    // per frame instead of on every raw scroll event.
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateNavbarScrolledState();
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    });

    updateNavbarScrolledState();
}

function updateNavbarScrolledState() {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50;

    navbar.classList.toggle('scrolled', window.scrollY > scrollThreshold);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-menu a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarMenu) {
        navbarMenu.classList.toggle('active');
    }
}

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.querySelector('.navbar-menu');
            if (menu) {
                menu.classList.remove('active');
            }
        });
    });
});
