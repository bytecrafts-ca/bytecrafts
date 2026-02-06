(function () {
  'use strict';

  if (!document.body.classList.contains('page-contact')) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  /* ----- Hero: label, title words, copy on load (smooth, polished) ----- */
  const heroLabel = document.querySelector('.contact-hero-label');
  const heroTitleWords = document.querySelectorAll('.contact-hero-title .word');
  const heroCopy = document.querySelector('.contact-hero-copy');

  if (heroLabel) {
    gsap.fromTo(heroLabel, { opacity: 0, y: 28 }, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.2,
    });
  }
  if (heroTitleWords.length) {
    gsap.set(heroTitleWords, { y: '100%' });
    gsap.to(heroTitleWords, {
      y: '0%',
      duration: 0.8,
      stagger: 0.07,
      ease: 'power3.out',
      delay: 0.45,
    });
  }
  if (heroCopy) {
    gsap.fromTo(heroCopy, { opacity: 0, y: 32 }, {
      opacity: 1,
      y: 0,
      duration: 0.95,
      ease: 'power3.out',
      delay: 1.15,
    });
  }

  /* ----- Contact content: form + info block with strong stagger ----- */
  const contentSection = document.querySelector('.contact-page-content');
  const formWrap = document.querySelector('.contact-form-wrap');
  const formFields = document.querySelectorAll('.contact-form .contact-field');
  const submitBtn = document.querySelector('.contact-submit');
  const infoBlock = document.querySelector('.contact-info-block');
  const infoTitle = infoBlock ? infoBlock.querySelector('.contact-info-title') : null;
  const infoItems = infoBlock ? infoBlock.querySelectorAll('.contact-info-item, .contact-social-link') : [];
  const contactSocial = document.querySelector('.contact-social');
  const socialLinks = contactSocial ? contactSocial.querySelectorAll('.contact-social-link') : [];

  if (formWrap) {
    gsap.set(formWrap, { opacity: 0, y: 56 });
    gsap.to(formWrap, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contentSection,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    });
  }

  formFields.forEach(function (field, i) {
    const input = field.querySelector('.contact-input, .contact-select, .contact-textarea');
    gsap.set(field, { opacity: 0, x: -24 });
    gsap.to(field, {
      opacity: 1,
      x: 0,
      duration: 0.75,
      delay: 0.08 * i,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contentSection,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });
  });

  if (submitBtn) {
    gsap.set(submitBtn, { opacity: 0, y: 12 });
    gsap.to(submitBtn, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contentSection,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });
  }

  if (infoBlock) {
    gsap.set(infoBlock, { opacity: 0, y: 40 });
    gsap.to(infoBlock, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contentSection,
        start: 'top 72%',
        toggleActions: 'play none none none',
      },
    });
  }

  if (infoTitle) {
    gsap.set(infoTitle, { opacity: 0 });
    gsap.to(infoTitle, {
      opacity: 1,
      duration: 0.6,
      scrollTrigger: {
        trigger: infoBlock,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  infoItems.forEach(function (item, i) {
    gsap.set(item, { opacity: 0, x: 16 });
    gsap.to(item, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.06,
      delay: 0.1 * i,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: infoBlock,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  });

  if (socialLinks.length) {
    gsap.set(socialLinks, { opacity: 0, y: 8 });
    gsap.to(socialLinks, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: contactSocial,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Footer ----- */
  const footer = document.querySelector('.footer');
  if (footer) {
    gsap.fromTo(footer, { opacity: 0 }, {
      opacity: 1,
      duration: 0.9,
      scrollTrigger: {
        trigger: footer,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Header: hide on scroll down, show on scroll up ----- */
  const header = document.querySelector('.header');
  if (header) {
    var lastY = window.scrollY;
    var delta = 60;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > 120 && y > lastY + delta) {
        gsap.to(header, { y: -100, duration: 0.3, ease: 'power2.out' });
        lastY = y;
      } else if (y < lastY - delta || y < 60) {
        gsap.to(header, { y: 0, duration: 0.3, ease: 'power2.out' });
        lastY = y;
      }
    }, { passive: true });
  }
})();
