// Carousel/Infinite Scroller functionality for partners & products

class Carousel {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.options = {
            speed: options.speed || 30, // px/sec
            direction: options.direction || 'left',
            pauseOnHover: options.pauseOnHover !== false,
            ...options
        };

        this.isPaused = false;
        this.init();
    }

    init() {
        this.track = this.container.querySelector('.carousel-track');
        if (!this.track) return;

        // Clone items for infinite scroll
        this.cloneItems();

        // Start animation
        this.animate();

        // Pause on hover
        if (this.options.pauseOnHover) {
            this.container.addEventListener('mouseenter', () => this.pause());
            this.container.addEventListener('mouseleave', () => this.resume());
        }
    }

    cloneItems() {
        const items = Array.from(this.track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            this.track.appendChild(clone);
        });
    }

    animate() {
        let position = 0;
        const trackWidth = this.track.scrollWidth / 2;

        const step = () => {
            if (!this.isPaused) {
                if (this.options.direction === 'left') {
                    position -= this.options.speed / 60;
                    if (position <= -trackWidth) {
                        position = 0;
                    }
                } else {
                    position += this.options.speed / 60;
                    if (position >= trackWidth) {
                        position = 0;
                    }
                }

                this.track.style.transform = `translateX(${position}px)`;
            }

            requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }
}

// Alternative: Manual carousel with buttons (for products)
class ManualCarousel {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.options = {
            itemsPerView: options.itemsPerView || 3,
            gap: options.gap || 16,
            autoplay: options.autoplay || false,
            autoplaySpeed: options.autoplaySpeed || 5000,
            ...options
        };

        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.init();
    }

    init() {
        this.track = this.container.querySelector('.carousel-track');
        this.prevBtn = this.container.querySelector('.carousel-btn.prev');
        this.nextBtn = this.container.querySelector('.carousel-btn.next');
        this.items = Array.from(this.track?.children || []);

        if (!this.track || this.items.length === 0) return;

        // Event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // Autoplay
        if (this.options.autoplay) {
            this.startAutoplay();
            this.container.addEventListener('mouseenter', () => this.stopAutoplay());
            this.container.addEventListener('mouseleave', () => this.startAutoplay());
        }

        this.updateCarousel();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateCarousel();
    }

    updateCarousel() {
        const itemWidth = this.items[0].offsetWidth + this.options.gap;
        const offset = -this.currentIndex * itemWidth;

        gsap.to(this.track, {
            x: offset,
            duration: 0.6,
            ease: 'power2.inOut'
        });
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.next(), this.options.autoplaySpeed);
    }

    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }
}

// Initialize carousels when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Infinite partner logo scroller
    const partnerCarousel = document.getElementById('partner-carousel');
    if (partnerCarousel) {
        new Carousel('partner-carousel', {
            speed: 20,
            direction: 'left',
            pauseOnHover: true
        });
    }

    // Product carousel (if exists)
    const productCarousel = document.getElementById('product-carousel');
    if (productCarousel) {
        new ManualCarousel('product-carousel', {
            itemsPerView: 3,
            gap: 24,
            autoplay: false
        });
    }
});
