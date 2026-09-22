# IECS Styleguide & Component Reference

Quick reference for all design tokens, components, and patterns.

## 🎨 Design Tokens

### Colors - Scale System (50-950)

Full shade ramps, styleguide-driven. Only hues we actually use: **Primary** (brand), **Neutral** (grays), **Red** (error), **Green** (success), **Orange** (warning — kept separate from Primary).

```css
/* PRIMARY - brand blue/indigo (per client styleguide) */
--color-primary-50-eef2ff   --color-primary-600-4f39f6
--color-primary-100-e0e7ff  --color-primary-700-432dd7
--color-primary-200-c6d2ff  --color-primary-800-372aac
--color-primary-300-a3b3ff  --color-primary-900-312c85
--color-primary-400-7c86ff  --color-primary-950-1e1a4d
--color-primary-500-615fff  (BRAND COLOR)

/* NEUTRAL - grays */
--color-neutral-50-fafafa   --color-neutral-600-52525c
--color-neutral-100-f4f4f5  --color-neutral-700-3f3f46
--color-neutral-200-e4e4e7  --color-neutral-800-27272a
--color-neutral-300-d4d4d8  --color-neutral-900-18181b
--color-neutral-400-9f9fa9  --color-neutral-950-09090b
--color-neutral-500-71717b

/* RED - error */
--color-red-500-fb2c36 (+ 50-950 full ramp)

/* GREEN - success */
--color-green-500-00c951 (+ 50-950 full ramp)

/* ORANGE - warning (distinct hue from Primary) */
--color-orange-500-ff6900 (+ 50-950 full ramp)

/* BASE */
--color-black-000000: #000000
--color-white-ffffff: #ffffff
```

### Semantic Tokens (use these in components, not raw scale)

```css
--foreground: var(--color-primary-950-1e1a4d)        /* main text */
--muted-foreground: var(--color-neutral-500-71717b)  /* secondary text */
--disabled-foreground: var(--color-neutral-300-d4d4d8)
--border: var(--color-neutral-200-e4e4e7)             /* lines/dividers */
--background: var(--color-white-ffffff)               /* page bg */
--muted-bg: var(--color-neutral-50-fafafa)            /* section bg */

--primary: var(--color-primary-500-615fff)            /* CTAs */
--primary-hover: var(--color-primary-600-4f39f6)
--primary-active: var(--color-primary-700-432dd7)
--primary-subtle: var(--color-primary-50-eef2ff)

--error: var(--color-red-500-fb2c36)
--success: var(--color-green-500-00c951)
--warning: var(--color-orange-500-ff6900)
```

**Rule**: components reference semantic tokens (`--foreground`, `--primary`, `--border`, etc), never raw scale values directly. Raw scale exists for edge cases only (e.g. a lighter tint of primary for a badge background → `--color-primary-50-eef2ff`).

### Typography - Golden Ratio (1.618x)
```
--fontSize-heading2-53px: 3.330rem (53px) - Host Grotesk 600/700
--fontSize-heading3-33px: 2.058rem (33px) - Host Grotesk 600
--fontSize-lg-20px: 1.272rem (20px) - Host Grotesk 600
--fontSize-body-14px: 14px - Inter 400/600 (body text)
--fontSize-sm-13px: 0.786rem (13px) - Inter 400 (small text)
--fontSize-xs-10px: 0.618rem (10px) - Inter 400 (extra small)

Line Heights:
--lineHeight-tight-1-2: 1.2 (headings)
--lineHeight-normal-1-6: 1.6 (body text)
--lineHeight-relaxed-1-8: 1.8 (spaced text)
```

### Spacing - 4px & 8px Grid
```
--space-4px: 4px       --space-36px: 36px
--space-8px: 8px       --space-40px: 40px
--space-12px: 12px     --space-48px: 48px
--space-16px: 16px     --space-64px: 64px
--space-20px: 20px     --space-80px: 80px
--space-24px: 24px     --space-96px: 96px
--space-28px: 28px
--space-32px: 32px
```

### Border Radius
```
--radius-button-8px: 8px
--radius-card-12px: 12px
--radius-input-8px: 8px

Nested radius rule: outer-radius = inner-radius + padding
Example: Card (12px) + padding (8px) = nested elements (20px max)
```

### Shadows - Soft Only
```
--shadow-sm-2px-8px: 0 2px 8px rgba(0,0,0,0.06)      /* Subtle elevation */
--shadow-md-4px-16px: 0 4px 16px rgba(0,0,0,0.08)    /* Cards hover state */
--shadow-lg-8px-24px: 0 8px 24px rgba(0,0,0,0.10)    /* Lifted elements */
--shadow-xl-12px-32px: 0 12px 32px rgba(0,0,0,0.12)  /* Deep elevation */
```

### Transitions
```
--transition-fast-150ms: 150ms ease-out
--transition-base-250ms: 250ms ease-out
--transition-slow-350ms: 350ms ease-out
```

### Z-Index Layers
```
--z-dropdown-100: 100
--z-sticky-200: 200
--z-fixed-300: 300 (navbar)
--z-modal-400: 400
```

---

## 🧩 Components

### Button States

**Primary Button**
```html
<button class="btn btn-primary">Click me</button>
```
- Background: #615fff
- Hover: #4f39f6 + shadow-md
- Active: scale 0.98

**Secondary Button**
```html
<button class="btn btn-secondary">Outline</button>
```
- Border: 2px #615fff
- Hover: Fill with primary color

**Ghost Button**
```html
<button class="btn btn-ghost">Minimal</button>
```
- Border: 2px #e0e0e0
- Hover: Border #615fff, text #615fff

### Cards

**Base Card**
```html
<div class="card">
  <div class="card-icon primary">
    <svg>...</svg>
  </div>
  <h3>Title</h3>
  <p>Description</p>
</div>
```
- Padding: 24px
- Border-radius: 12px
- Box-shadow: shadow-sm
- Hover: shadow-md + translateY(-4px)

**Compact Card**
```html
<div class="card card-compact">
  <!-- Content -->
</div>
```
- Padding: 16px only

### Service Card Pattern

```html
<div class="card service-card">
  <div class="card-icon primary">
    <svg class="icon" width="32" height="32">...</svg>
  </div>
  <h4>Service Name</h4>
  <p>Brief description of the service offering.</p>
</div>
```

---

## 🎬 Animations

### Scroll Reveals
```html
<!-- Fade in on scroll -->
<div class="fade-in-on-scroll">Content</div>

<!-- Slide up on scroll -->
<div class="slide-in-on-scroll">Content</div>
```

### Entrance Animations
```html
<!-- Fade in -->
<div class="fade-in">Content</div>

<!-- Slide from top -->
<div class="slide-in-up">Content</div>

<!-- Slide from left -->
<div class="slide-in-left">Content</div>

<!-- Scale in -->
<div class="scale-in">Content</div>
```

### Hover Animations
```html
<!-- Lift on hover -->
<div class="hover-lift">Card</div>

<!-- Scale on hover -->
<button class="btn hover-scale">Button</button>

<!-- Color change on hover -->
<a class="hover-color">Link</a>
```

### Staggered List
```html
<ul class="stagger">
  <li class="fade-in">Item 1</li>
  <li class="fade-in">Item 2</li>
  <li class="fade-in">Item 3</li>
</ul>
```

---

## 🔧 Layout Utilities

### Container
```html
<div class="container">
  <!-- Max-width 1280px, auto margins -->
</div>
```

### Grids
```html
<!-- 2-column grid, responsive -->
<div class="grid grid-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 3-column grid -->
<div class="grid grid-3">...</div>

<!-- 4-column grid -->
<div class="grid grid-4">...</div>
```

### Flexbox
```html
<div class="flex">
  <!-- Flex container -->
</div>

<div class="flex-center">
  <!-- Centered both ways -->
</div>

<div class="flex-between">
  <!-- Space between items -->
</div>

<div class="flex-col">
  <!-- Column direction -->
</div>
```

### Spacing Utilities
```html
<!-- Margin top -->
<div class="mt-4">4px top margin</div>
<div class="mt-8">8px top margin</div>
<div class="mt-16">64px top margin</div>

<!-- Margin bottom -->
<div class="mb-4">4px bottom margin</div>

<!-- Padding -->
<div class="px-4">4px left & right padding</div>
<div class="py-8">8px top & bottom padding</div>
```

---

## 📱 Section Structure

### Standard Section
```html
<section id="section-name" class="section">
  <div class="container">
    <div class="section-title">
      <h2>Section Title</h2>
    </div>
    <!-- Content -->
  </div>
</section>
```

### Dark Section
```html
<section class="section section-dark">
  <!-- White text automatically -->
</section>
```

### Light Background
```html
<section class="section section-light">
  <!-- Light gray background -->
</section>
```

---

## 🎯 Common Patterns

### Hero Section
```html
<section class="hero">
  <div class="container">
    <div class="grid grid-2">
      <div class="hero-content">
        <h1>Main headline</h1>
        <p>Subheading or description</p>
        <div class="flex gap-4 mt-8">
          <button class="btn btn-primary">Primary CTA</button>
          <button class="btn btn-secondary">Secondary CTA</button>
        </div>
      </div>
      <div class="hero-image">
        <img src="" alt="">
      </div>
    </div>
  </div>
</section>
```

### Why IECS Section
```html
<section class="why-iecs section">
  <div class="container">
    <div class="section-title">
      <h2>Why Choose IECS?</h2>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <div class="card-icon primary">
          <svg>...</svg>
        </div>
        <h3>Benefit</h3>
        <p>Description</p>
      </div>
      <!-- More cards -->
    </div>
  </div>
</section>
```

### Service Showcase
```html
<section class="services section">
  <div class="container">
    <div class="section-title">
      <h2>Our Services</h2>
    </div>
    <div class="grid grid-4">
      <div class="card service-card">
        <div class="card-icon primary">
          <svg class="icon">...</svg>
        </div>
        <h4>Service Name</h4>
        <p>Description</p>
      </div>
      <!-- More service cards -->
    </div>
  </div>
</section>
```

---

## 🚀 GSAP Animation Patterns

### Scroll Trigger Animation
```javascript
gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
    }
});
```

### Staggered Elements
```javascript
gsap.from(elements, {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out'
});
```

### Parallax Effect
```javascript
gsap.to(element, {
    y: () => window.innerHeight * 0.3,
    scrollTrigger: {
        trigger: '.hero',
        scrub: 1,
        end: 'bottom top'
    }
});
```

---

## ✅ Quality Checklist

- [ ] Blue/Indigo (#615fff) used for all primary actions
- [ ] Soft shadows only (no hard edges)
- [ ] Plenty of white space (min spacing between sections)
- [ ] Button radius: 8px
- [ ] Card hover: lift + shadow
- [ ] Navbar: floating + auto-hide on scroll
- [ ] Mobile: responsive, single column
- [ ] Animations: purposeful, not excessive
- [ ] No broken links or navigation
- [ ] All text readable (contrast, sizing)
- [ ] Golden ratio typography respected

---

## 🎯 Quick Reference - All Variables

| Category | CSS Variable | Value | Use |
|---|---|---|---|
| **Semantic (use these)** | `--foreground` | primary-950 (#1e1a4d) | Text, headings |
| | `--muted-foreground` | neutral-500 (#71717b) | Body/secondary text |
| | `--disabled-foreground` | neutral-300 (#d4d4d8) | Disabled state text |
| | `--border` | neutral-200 (#e4e4e7) | Lines, dividers |
| | `--background` | white (#ffffff) | Page background |
| | `--muted-bg` | neutral-50 (#fafafa) | Section backgrounds |
| | `--primary` | primary-500 (#615fff) | CTAs, accents |
| | `--primary-hover` | primary-600 (#4f39f6) | Hover states |
| | `--primary-active` | primary-700 (#432dd7) | Active/pressed states |
| | `--error` | red-500 (#fb2c36) | Error states |
| | `--success` | green-500 (#00c951) | Success states |
| | `--warning` | orange-500 (#ff6900) | Warning states |
| **Colors - Raw Scale** | `--color-primary-50-eef2ff` … `--color-primary-950-1e1a4d` | 11-step ramp | Fine-grained tints/shades |
| | `--color-neutral-50-fafafa` … `--color-neutral-950-09090b` | 11-step ramp | Grays |
| | `--color-red-50-fef2f2` … `--color-red-950-460809` | 11-step ramp | Error scale |
| | `--color-green-50-f0fdf4` … `--color-green-950-032e15` | 11-step ramp | Success scale |
| | `--color-orange-50-fff7ed` … `--color-orange-950-441306` | 11-step ramp | Warning scale |
| **Typography** | `--fontSize-heading2-53px` | 3.330rem | H1 |
| | `--fontSize-heading3-33px` | 2.058rem | H2 |
| | `--fontSize-lg-20px` | 1.272rem | H3 |
| | `--fontSize-body-14px` | 14px | Body text |
| | `--fontSize-sm-13px` | 0.786rem | Small text |
| | `--fontSize-xs-10px` | 0.618rem | Extra small |
| **Spacing** | `--space-4px` to `--space-96px` | 4px - 96px | All spacing |
| **Radius** | `--radius-button-8px` | 8px | Buttons |
| | `--radius-card-12px` | 12px | Cards |
| **Shadows** | `--shadow-sm-2px-8px` | Subtle | Baseline |
| | `--shadow-md-4px-16px` | Medium | Hover states |
| | `--shadow-lg-8px-24px` | Large | Lifted |
| | `--shadow-xl-12px-32px` | X-Large | Deep elevation |
| **Transitions** | `--transition-fast-150ms` | 150ms | Quick |
| | `--transition-base-250ms` | 250ms | Standard |
| | `--transition-slow-350ms` | 350ms | Slow |
| **Z-Index** | `--z-fixed-300` | 300 | Navbar |
| | `--z-modal-400` | 400 | Modals |

---

**Last updated**: 2026-09-20
