# IECS Website - Project Structure

Industrial Engineering Control Services - Modern, Animated Website

## 📁 Directory Structure

```
iecs/
├── index.html                 # Main entry point
├── css/
│   ├── reset.css             # CSS reset & normalize
│   ├── variables.css         # Design tokens & custom properties
│   ├── components.css        # Reusable components (buttons, cards, etc)
│   ├── animations.css        # Animation utilities & keyframes
│   └── main.css              # Global styles & layout
├── js/
│   ├── main.js               # Main initialization & global utilities
│   ├── navbar.js             # Navbar functionality (auto-hide, active links)
│   ├── animations.js         # GSAP animations (scroll, parallax, etc)
│   └── carousel.js           # Carousel & infinite scroller
├── assets/
│   ├── images/
│   │   ├── logo/             # Logo files
│   │   ├── icons/            # SVG icons
│   │   ├── products/         # Product/equipment images
│   │   └── partners/         # Partner logos
│   ├── fonts/                # Custom fonts (if needed)
│   └── videos/               # Background videos (if needed)
└── README.md                 # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#615fff` (Blue/Indigo)
- **Foreground**: `#1e1a4d` (primary-950)
- **Muted Foreground**: `#71717b` (neutral-500)
- **White**: `#ffffff`

Full 50-950 scale system — see [STYLEGUIDE.md](STYLEGUIDE.md) for complete token reference.

### Typography
- **Headings**: Host Grotesk (600, 700)
- **Body**: Inter (400, 500, 600)
- **Sizing**: Golden Ratio based (1.618)
- **Body Copy**: 14px

### Spacing & Radius
- **Grid**: 4px & 8px
- **Button Radius**: 8px
- **Card Radius**: 12px
- **Soft Shadows Only**: No hard shadows

### Animations
- **Scroll Triggers**: GSAP ScrollTrigger
- **Parallax**: Custom parallax on hero
- **Stagger**: Grouped animations with delays
- **Hover**: Subtle lift & scale effects
- **Auto-hide Navbar**: On scroll down, show on scroll up

## 🚀 Features

### Navbar
- Fixed, sticky positioning
- Auto-hide on scroll (smooth transitions)
- Active link highlighting
- Mobile-responsive menu toggle

### Sections
1. **Hero** - Full viewport intro with CTA
2. **Partners** - Infinite scrolling logo carousel
3. **Why IECS** - Value proposition with icons
4. **Services** - Grid of service offerings
5. **Products** - Equipment/solution showcase
6. **Contact** - Contact information (no form)
7. **Footer** - Sitemap, links, info

### Animations
- Scroll-triggered reveals (fade, slide)
- Parallax scrolling
- Staggered list animations
- Hover lift effects on cards
- Number counters
- Smooth transitions throughout

## 🔧 Utilities & Classes

### Layout
- `.container` - Max-width wrapper
- `.grid`, `.grid-2`, `.grid-3`, `.grid-4` - Grid systems
- `.flex`, `.flex-center`, `.flex-between` - Flex utilities

### Components
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost` - Buttons
- `.card` - Card styling
- `.section`, `.section-dark`, `.section-light` - Section styling

### Spacing (4px & 8px Grid)
- `.mt-4`, `.mt-8`, `.mt-12`, `.mt-16`, `.mt-20` - Margin top
- `.mb-*`, `.px-*`, `.py-*` - Margin/padding utilities

### Animations
- `.fade-in`, `.slide-in-up`, `.slide-in-left`, `.slide-in-right` - Entrance animations
- `.scale-in`, `.hover-lift`, `.hover-scale`, `.hover-color` - Interactive animations
- `.fade-in-on-scroll`, `.slide-in-on-scroll` - Scroll reveal animations

## 📱 Responsive Design

All components are mobile-first and responsive:
- Desktop: Full layout
- Tablet (768px): Adjusted spacing & sizing
- Mobile: Single column, optimized touch targets

## 🔗 External Libraries

- **GSAP 3.12.2**: Animation library
- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **Google Fonts**: Host Grotesk & Inter

## 📝 Quick Start

1. Open `index.html` in a browser
2. All CSS/JS is automatically loaded
3. Modify content in `index.html`
4. Update styles in `css/` folder
5. Add/edit animations in `js/animations.js`

## ✅ Design Principles

- **Minimal**: Clean, spacious design
- **Animated**: Smooth, purposeful motion
- **Microinteractions**: Subtle hover/scroll effects
- **Accessible**: Semantic HTML, good contrast
- **Performant**: Optimized animations, no jank
- **UX-First**: Clear flows, valid navigation, no dead ends

## 🎯 Color Palette (Blue/Indigo Theme)

| Token | Value | Use |
|-------|-------|-----|
| Primary | #615fff | CTAs, accents, highlights |
| Primary Hover | #4f39f6 | Hover states |
| Primary Active | #432dd7 | Active states |
| Foreground | #1e1a4d | Text, headings |
| Muted Foreground | #71717b | Body text |
| White | #ffffff | Backgrounds |

See [STYLEGUIDE.md](STYLEGUIDE.md) for the full 50-950 scale + semantic token reference.

---

**Status**: Ready for development
