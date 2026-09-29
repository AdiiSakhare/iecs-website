// Products page - highlight the category pill for the section currently in view
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.catalog-nav-list a');
    const sections = [...links]
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);

    if (!links.length || !('IntersectionObserver' in window)) return;

    const setActive = (id) => {
        links.forEach(a => {
            const on = a.getAttribute('href') === '#' + id;
            a.classList.toggle('active', on);
            if (on) {
                // keep the active pill visible in the horizontally scrolling bar on phones
                const list = a.closest('.catalog-nav-list');
                list.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
            }
        });
    };

    // A section is "current" once it crosses the band just below the sticky bars.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    }, { rootMargin: '-160px 0px -60% 0px' });

    sections.forEach(section => observer.observe(section));
});
