(function () {
  'use strict';

  /* ----- Mobile nav: hamburger + overlay + stunning animation ----- */
  (function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const overlay = document.getElementById('nav-overlay');
    const overlayLinks = overlay ? overlay.querySelectorAll('.nav-overlay-link') : [];
    const overlayBg = overlay ? overlay.querySelector('.nav-overlay-bg') : null;
    const useMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function openNav() {
      if (!overlay) return;
      document.body.classList.add('nav-open');
      overlay.classList.add('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
      overlay.setAttribute('aria-hidden', 'false');

      /* GSAP stagger animation when available */
      if (useMotion && typeof gsap !== 'undefined' && overlayLinks.length) {
        overlay.classList.add('nav-anim-gsap');
        gsap.fromTo(overlayLinks, { y: 32, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.09,
          ease: 'power3.out',
          overwrite: true
        });
        const meta = overlay.querySelector('.nav-overlay-meta');
        if (meta) {
          gsap.fromTo(meta, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, delay: 0.4, ease: 'power2.out' });
        }
      }

      requestAnimationFrame(function () {
        overlayLinks[0]?.focus({ preventScroll: true });
      });
    }

    function closeNav() {
      if (!overlay) return;
      document.body.classList.remove('nav-open');
      overlay.classList.remove('is-open');
      overlay.classList.remove('nav-anim-gsap');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      overlay.setAttribute('aria-hidden', 'true');
      toggle?.focus();
    }

    function toggleNav() {
      overlay?.classList.contains('is-open') ? closeNav() : openNav();
    }

    if (toggle && overlay) {
      toggle.addEventListener('click', toggleNav);
      overlayBg?.addEventListener('click', closeNav);
      overlayLinks.forEach(function (link) {
        link.addEventListener('click', closeNav);
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay?.classList.contains('is-open')) {
          closeNav();
        }
      });

      /* Close on resize to desktop */
      window.matchMedia('(min-width: 900px)').addEventListener('change', function (m) {
        if (m.matches) closeNav();
      });
    }
  })();

  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  /* ----- Hero: mark + CTA on load ----- */
  const heroMark = document.querySelector('.hero-mark');
  const heroCta = document.querySelector('.hero-cta');
  if (heroMark) {
    gsap.fromTo(heroMark, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
  }
  if (heroCta) {
    gsap.fromTo(heroCta, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.5 });
  }

  /* ----- Scroll progress bar ----- */
  const scrollProgress = document.querySelector('.scroll-progress');
  if (scrollProgress) {
    gsap.to(scrollProgress, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 0,
        end: 'max',
        scrub: 0.2,
      },
    });
  }

  /* ----- Hero scroll cue: fade out after scroll ----- */
  const heroScrollCue = document.querySelector('.hero-scroll-cue');
  if (heroScrollCue) {
    gsap.to(heroScrollCue, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: '100px top',
        end: '400px top',
        scrub: 0.5,
      },
    });
  }

  /* ----- Headline: word-by-word reveal on scroll ----- */
  const headline = document.querySelector('.headline');
  const words = headline ? headline.querySelectorAll('.word') : [];
  if (words.length) {
    gsap.set(words, { y: '100%' });
    gsap.to(words, {
      y: '0%',
      duration: 0.6,
      stagger: 0.04,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headline,
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Intro copy: scroll reveal ----- */
  const introCopy = document.querySelector('.intro-copy');
  if (introCopy) {
    gsap.fromTo(introCopy, { opacity: 0, y: 24 }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: introCopy,
        start: 'top 85%',
        end: 'top 50%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Featured project: single showcase reveal ----- */
  const featuredProject = document.querySelector('.featured-project');
  if (featuredProject) {
    const imgWrap = featuredProject.querySelector('.featured-project-image-wrap');
    const info = featuredProject.querySelector('.featured-project-info');
    const chars = featuredProject.querySelectorAll('.featured-project-name .char');
    gsap.set([imgWrap, info], { opacity: 0, y: 40 });
    gsap.to([imgWrap, info], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: featuredProject,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
    if (chars.length) {
      gsap.set(chars, { y: '100%', opacity: 0 });
      gsap.to(chars, {
        y: '0%',
        opacity: 1,
        duration: 0.45,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuredProject,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }

  /* ----- Studio section: reveal ----- */
  const studio = document.querySelector('.studio');
  if (studio) {
    const studioCopy = studio.querySelector('.studio-copy');
    const stats = studio.querySelectorAll('.studio-stat');
    gsap.set([studio.querySelector('.studio-title'), studioCopy, ...stats], { opacity: 0, y: 28 });
    gsap.to([studio.querySelector('.studio-title'), studioCopy], {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: studio,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
    gsap.to(stats, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: studio,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Services: title + stagger cards ----- */
  const services = document.querySelector('.services');
  if (services) {
    const servicesTitle = services.querySelector('.services-title');
    const serviceCards = services.querySelectorAll('.service-card');
    gsap.set([servicesTitle, ...serviceCards], { opacity: 0, y: 32 });
    gsap.to(servicesTitle, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: services,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
    gsap.to(serviceCards, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: services,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Tech: title reveal ----- */
  const techSection = document.querySelector('.tech');
  if (techSection) {
    const techTitle = techSection.querySelector('.tech-title');
    if (techTitle) {
      gsap.fromTo(techTitle, { opacity: 0, y: 16 }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: techSection,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    }
  }

  /* ----- Contact section: fade in ----- */
  const contact = document.querySelector('.contact');
  if (contact) {
    const blocks = contact.querySelectorAll('.contact-block');
    gsap.set(blocks, { opacity: 0, y: 24 });
    gsap.to(blocks, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contact,
        start: 'top 85%',
        end: 'top 55%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Footer: subtle reveal ----- */
  const footer = document.querySelector('.footer');
  if (footer) {
    gsap.fromTo(footer, { opacity: 0 }, {
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: footer,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Header: hide on scroll down, show on scroll up (skip when nav open) ----- */
  const header = document.querySelector('.header');
  if (header) {
    let lastY = window.scrollY;
    const delta = 60;
    window.addEventListener('scroll', function () {
      if (document.body.classList.contains('nav-open')) return;
      const y = window.scrollY;
      if (y > 200 && y > lastY + delta) {
        gsap.to(header, { y: -100, duration: 0.3, ease: 'power2.out' });
        lastY = y;
      } else if (y < lastY - delta || y < 100) {
        gsap.to(header, { y: 0, duration: 0.3, ease: 'power2.out' });
        lastY = y;
      }
    }, { passive: true });
  }

  /* ----- Header: add scrolled class for backdrop ----- */
  const headerEl = document.querySelector('.header');
  if (headerEl) {
    window.addEventListener('scroll', function () {
      headerEl.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }
})();
