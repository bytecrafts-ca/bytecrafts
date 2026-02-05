(function () {
  'use strict';

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

  /* ----- Dictionary block: scroll reveal ----- */
  const dictionary = document.querySelector('.dictionary');
  if (dictionary) {
    gsap.fromTo(dictionary, { opacity: 0, y: 32 }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: dictionary,
        start: 'top 85%',
        end: 'top 50%',
        toggleActions: 'play none none none',
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

  /* ----- Project list: stagger items on scroll ----- */
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((item, i) => {
    const link = item.querySelector('.project-link');
    const imgWrap = item.querySelector('.project-image-wrap');
    const info = item.querySelector('.project-info');
    if (!link) return;

    gsap.set([imgWrap, info], { opacity: 0, y: 40 });
    gsap.to([imgWrap, info], {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        end: 'top 55%',
        toggleActions: 'play none none none',
      },
    });

    /* Letter-by-letter reveal on project name (on scroll into view) */
    const chars = item.querySelectorAll('.project-name .char');
    if (chars.length) {
      gsap.set(chars, { y: '100%', opacity: 0 });
      gsap.to(chars, {
        y: '0%',
        opacity: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });
    }
  });

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

  /* ----- Header: hide on scroll down, show on scroll up ----- */
  const header = document.querySelector('.header');
  if (header) {
    let lastY = window.scrollY;
    const delta = 60;
    window.addEventListener('scroll', function () {
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
})();
