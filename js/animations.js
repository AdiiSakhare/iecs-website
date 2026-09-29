// Advanced GSAP animations

gsap.registerPlugin(ScrollTrigger);

// Hero section entrance animation
function animateHeroSection() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timeline = gsap.timeline();

    timeline.from('.hero-content h1', {
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: 'expo.out'
    })
    .from('.hero-content p', {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power2.out'
    }, '-=0.4');

    // CTA buttons and stat row use pure-CSS entrance animation (see animations.css),
    // not chained onto the GSAP timeline, so they're never left stuck at opacity:0
    // if the JS ticker stalls (backgrounded/unfocused tab, slow device, etc.) - a
    // permanently invisible primary CTA is worse than a missing fade-in.
}

// Card/button hover effects live in css/motion.css (CSS transitions are
// interruptible and keep the hover state in one place). They used to be
// GSAP tweens here, which wrote inline transforms and shadows that fought the CSS.

// Number counter animation
function animateCounters() {
    const counters = gsap.utils.toArray('.counter-value');
    if (counters.length === 0) return;

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target')) || 0;
        const duration = parseInt(counter.getAttribute('data-duration')) || 2;

        gsap.to(counter, {
            innerText: target,
            duration: duration,
            snap: { innerText: 1 },
            ease: 'power2.out',
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Stagger list items
function animateListItems() {
    const lists = gsap.utils.toArray('.list-stagger');
    if (lists.length === 0) return;

    lists.forEach(list => {
        const items = list.children;

        gsap.from(items, {
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: list,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Gradient background animation (for special sections)
function animateGradientBackground() {
    const gradientElements = gsap.utils.toArray('.gradient-bg');
    if (gradientElements.length === 0) return;

    gradientElements.forEach(element => {
        gsap.to(element, {
            duration: 0.8,
            opacity: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        animateHeroSection();
        animateCounters();
        animateListItems();
        animateGradientBackground();
    }, 100);
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
