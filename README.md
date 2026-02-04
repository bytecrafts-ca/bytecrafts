# bytecrafts.ca — Elite Web Design Portfolio

Award-level, Swiss editorial design website built with vanilla HTML, CSS, and JavaScript. Features comprehensive scroll-driven interactions and 98+ Lighthouse performance targets.

## 🎯 Project Overview

A multi-page agency website showcasing:
- **Black theme** with subtle gold accent (#d4a574)
- **Swiss editorial design** principles
- **Scroll-triggered animations** throughout
- **98+ Lighthouse scores** (mobile)
- **SEO-ready** structure
- **Zero frameworks** — pure vanilla web technologies

## 📁 File Structure

```
/
├── index.html          # Homepage with hero, work, services, process
├── work.html           # Portfolio with filterable projects
├── services.html       # Services overview with timeline
├── pricing.html        # Transparent pricing with FAQ
├── contact.html        # Contact form with info
├── css/
│   └── styles.css      # Single shared stylesheet
└── js/
    └── main.js         # Single shared JavaScript file
```

## ✨ Scroll Interactions (Verified)

All pages implement these scroll-driven features:

### 1. **Scroll Progress Bar**
- Fixed at top of viewport
- Fills dynamically as user scrolls
- Uses `requestAnimationFrame` for smooth updates

### 2. **Section Reveals**
- Elements hidden on page load (`opacity: 0`)
- Fade and translate up on scroll
- Triggered via `IntersectionObserver`
- Staggered delays for children

### 3. **Text Reveals**
- Hero headlines animate word-by-word
- `data-reveal="line"` attribute
- JavaScript wraps each word in `<span>`
- Opacity + translate animations

### 4. **Image/Card Mask Reveals**
- `data-reveal="mask"` attribute
- Pseudo-element wipe effect
- Triggered via `IntersectionObserver`

### 5. **ScrollSpy Navigation**
- Active nav item updates on scroll
- Smooth underline animation
- Tracks section visibility

### 6. **Timeline Highlights** (Services page)
- Timeline items highlight as they enter viewport
- Active indicator with glow effect

### 7. **Reduced Motion Support**
- Respects `prefers-reduced-motion`
- Disables transforms and parallax
- Simple fade-only animations

## 🚀 Getting Started

### Local Development

1. **Clone or download** the project
2. **Open with a local server** (required for proper navigation):

```bash
# Python 3
python3 -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

3. **Open browser** to `http://localhost:8000`

### No Build Process Required

This is pure HTML/CSS/JS — no npm install, no build step, no dependencies.

## 🎨 Design System

### Colors
```css
--black: #0a0a0a;        /* Deep black background */
--charcoal: #1a1a1a;     /* Cards and elevated surfaces */
--off-white: #e8e8e8;    /* Primary text */
--accent: #d4a574;       /* Subtle gold accent */
```

### Typography
- **System fonts** for speed and native feel
- **Fluid sizing** with `clamp()` for responsive scales
- **Swiss principles**: hierarchy, whitespace, legibility

### Layout
- **Strict grid** system
- **Max-width container**: 1400px
- **Fluid spacing** with CSS clamp
- **Responsive breakpoints** at 768px

## 📄 Page Breakdown

### index.html (Homepage)
- Hero with animated headline
- Featured work grid (4 projects)
- Services overview (6 cards)
- Process timeline (5 steps)
- CTA section

### work.html (Portfolio)
- Filterable project grid
- 8 sample projects
- Modal for case study details
- Category filters (automotive, luxury, startup, ecommerce)

### services.html (Services)
- 6 service cards with detailed descriptions
- Process timeline with scroll-triggered highlights
- Service-specific tech stacks

### pricing.html (Pricing)
- 3 pricing tiers (Starter, Professional, Elite)
- Add-on services grid
- 3 maintenance plans
- FAQ accordion

### contact.html (Contact)
- Multi-field contact form
- Contact information card
- FAQ section
- Form validation ready

## 🔧 JavaScript Functions

All implemented in `main.js`:

```javascript
initReducedMotion()      // Detects prefers-reduced-motion
initScrollProgress()     // Progress bar at top
initScrollReveal()       // IntersectionObserver for reveals
initTextReveal()         // Word-by-word text animation
initScrollSpy()          // Active nav on scroll
initParallax()           // Subtle parallax effects
initMobileMenu()         // Responsive menu toggle
initModal()              // Project case study modals
initAccordion()          // FAQ accordions
initFilters()            // Work page category filters
initActiveNav()          // Sets active nav on page load
initTimelineHighlight()  // Timeline active states
initForm()               // Form submission handling
```

## ✅ Scroll Interaction Checklist

- ✅ Elements NOT fully visible on page load
- ✅ Scrolling triggers visible animations
- ✅ Scroll progress bar moves with scroll
- ✅ Nav updates while scrolling (ScrollSpy)
- ✅ Sections reveal with fade + translate
- ✅ Text animates word-by-word
- ✅ Cards reveal with mask effect
- ✅ Timeline highlights active step
- ✅ Reduced motion disables transforms
- ✅ All animations use IntersectionObserver
- ✅ Scroll progress uses requestAnimationFrame

## 🎯 Performance Targets

- **98+ Lighthouse** (mobile)
- **Sub-2s load time**
- **SEO-optimized** HTML structure
- **Semantic markup**
- **Accessibility** considered

## 🛠️ Customization

### Change Accent Color

Edit `:root` in `css/styles.css`:

```css
:root {
  --accent: #d4a574; /* Change this */
}
```

### Add New Scroll Reveals

Add `data-reveal` attribute to any element:

```html
<div data-reveal="up">Content</div>
<div data-reveal="fade">Content</div>
<div data-reveal="mask">Content</div>
<div data-reveal="line">Text content</div>
```

### Adjust Animation Timing

Edit transition durations in `css/styles.css`:

```css
[data-reveal="up"] {
  transition: opacity 0.8s var(--transition-smooth),
              transform 0.8s var(--transition-smooth);
}
```

## 📱 Mobile Responsive

- Fully responsive on all devices
- Mobile menu with slide-in navigation
- Touch-friendly interactive elements
- Optimized font scales and spacing

## 🔍 SEO Features

- Semantic HTML5 structure
- Descriptive meta tags
- Proper heading hierarchy
- Alt text on images
- Clean URL structure
- Fast load times

## 🎓 Code Quality

- **No frameworks** or libraries
- **Clean, commented** JavaScript
- **Semantic HTML**
- **BEM-inspired** CSS naming
- **Progressive enhancement**
- **Accessible** interactions

## 📦 Deployment

Upload all files to any static host:
- Netlify
- Vercel
- GitHub Pages
- Traditional shared hosting

No server-side processing required.

## 🤝 Support

For questions or customization requests:
- Email: hello@bytecrafts.ca
- Phone: +1 (234) 567-890

---

**Built with precision. Designed for impact.**

© 2026 bytecrafts.ca — All rights reserved.
