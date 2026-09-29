// Main initialization & Global setup

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initializeNavbar();
    initializeScrollAnimations();
    initializeIntersectionObserver();
    initializeScrollTriggers();
});

// Intersection Observer for scroll animations
function initializeIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        // Elements that enter in the same batch (a row of cards, a heading + its
        // paragraph) cascade 70ms apart instead of popping in together.
        let order = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.setProperty('--reveal-delay', `${Math.min(order, 5) * 70}ms`);
                order++;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in-on-scroll, .slide-in-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Global scroll trigger setup
function initializeScrollTriggers() {
    gsap.registerPlugin(ScrollTrigger);
}

// Smooth scroll for anchor links
function initializeScrollAnimations() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Utility: Add delay to staggered elements
function staggerAnimation(elements, duration = 0.6, delay = 0.1) {
    gsap.to(elements, {
        opacity: 1,
        y: 0,
        stagger: delay,
        duration: duration,
        ease: 'power2.out'
    });
}

// Utility: Animate on scroll
function animateOnScroll(selector, options = {}) {
    const defaults = {
        duration: 0.8,
        delay: 0,
        ease: 'power2.out',
        from: { opacity: 0, y: 30 }
    };

    const config = { ...defaults, ...options };

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(selector).forEach((element, index) => {
        gsap.fromTo(element, config.from, {
            opacity: 1,
            y: 0,
            duration: config.duration,
            delay: config.delay + (index * 0.1),
            ease: config.ease,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Utility: Parallax effect
function parallaxEffect(selector, speed = 0.5) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(selector).forEach(element => {
        gsap.to(element, {
            y: () => window.innerHeight * speed,
            scrollTrigger: {
                trigger: element,
                scrub: 1,
                end: 'bottom center'
            }
        });
    });
}

// Log initialization
console.log('IECS Website initialized');
