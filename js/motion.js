// Motion layer: scroll progress, hero parallax, count-up numbers, card glow,
// back-to-top. Everything here is decorative and respects prefers-reduced-motion.

(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // ---------- Scroll progress bar + back-to-top + hero parallax ----------
    // One rAF-throttled scroll handler drives all three; each only touches
    // transform / opacity on its own element.
    function initScrollEffects() {
        const bar = document.createElement('div');
        bar.className = 'scroll-progress';
        bar.setAttribute('aria-hidden', 'true');
        document.body.appendChild(bar);

        const toTop = document.createElement('button');
        toTop.className = 'to-top';
        toTop.type = 'button';
        toTop.setAttribute('aria-label', 'Back to top');
        toTop.innerHTML =
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
            'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M12 19V5M5 12l7-7 7 7"/></svg>';
        toTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        });
        document.body.appendChild(toTop);

        const heroBg = reduceMotion ? null : document.querySelector('.hero-bg');
        let ticking = false;

        function update() {
            const y = window.scrollY;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
            toTop.classList.toggle('visible', y > 700);

            // Parallax: the image drifts down at a quarter of the scroll speed. The
            // gap this opens is always above the viewport, so it is never visible.
            if (heroBg && y < window.innerHeight * 1.2) {
                heroBg.style.translate = `0 ${(y * 0.25).toFixed(1)}px`;
            }
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        }, { passive: true });
        window.addEventListener('resize', update);
        update();
    }

    // ---------- Count-up numbers ("10+", "20+ ...") ----------
    function initCountUp() {
        const targets = document.querySelectorAll('.about-stat strong, .hero-stat-row strong');
        if (!targets.length) return;

        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

        function run(el, delay) {
            const match = el.textContent.trim().match(/^(\d+)(.*)$/);
            if (!match) return; // "End-to-End" etc. stay as text
            const end = parseInt(match[1], 10);
            const suffix = match[2];
            el.setAttribute('aria-label', el.textContent.trim());

            setTimeout(() => {
                const duration = 1100;
                const start = performance.now();
                (function frame(now) {
                    const t = Math.min((now - start) / duration, 1);
                    el.textContent = Math.round(end * easeOutCubic(t)) + suffix;
                    if (t < 1) requestAnimationFrame(frame);
                })(start);
            }, delay);
        }

        if (reduceMotion) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                observer.unobserve(entry.target);
                // The hero stat row fades in after 0.8s, so wait for it.
                run(entry.target, entry.target.closest('.hero-stat-row') ? 900 : 150);
            });
        }, { threshold: 0.6 });

        targets.forEach(el => observer.observe(el));
    }

    // ---------- Pointer-following glow on cards ----------
    function initCardGlow() {
        if (reduceMotion || !finePointer) return;

        const selector = '.card, .contact-card, .catalog-section .product-card';
        let frame = null;

        document.addEventListener('pointermove', (e) => {
            const card = e.target.closest && e.target.closest(selector);
            if (!card) return;
            if (frame) cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                card.style.setProperty('--my', `${e.clientY - rect.top}px`);
            });
        }, { passive: true });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initScrollEffects();
        initCountUp();
        initCardGlow();
    });
})();
