(function () {
  'use strict';

  if (!document.body.classList.contains('page-services')) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  /* ----- Hero: label, title words (letter-style stagger), copy on load ----- */
  const heroLabel = document.querySelector('.services-hero-label');
  const heroTitleWords = document.querySelectorAll('.services-hero-title .word');
  const heroCopy = document.querySelector('.services-hero-copy');

  if (heroLabel) {
    gsap.fromTo(heroLabel, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.15 });
  }
  if (heroTitleWords.length) {
    gsap.set(heroTitleWords, { y: '100%' });
    gsap.to(heroTitleWords, {
      y: '0%',
      duration: 0.75,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.4,
    });
  }
  if (heroCopy) {
    gsap.fromTo(heroCopy, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 1.1 });
  }

  /* ----- Pricing: cards scale + fade in with stagger (stronger than home) ----- */
  const pricingSection = document.querySelector('.pricing');
  const pricingLabel = document.querySelector('.pricing .section-label');
  const pricingCards = document.querySelectorAll('.pricing-card');
  const pricingDisclaimer = document.querySelector('.pricing-disclaimer');

  if (pricingSection) {
    gsap.set([pricingLabel, ...pricingCards, pricingDisclaimer], { opacity: 0, y: 48, scale: 0.96 });
    gsap.to(pricingLabel, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: pricingSection,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
    gsap.to(pricingCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.85,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: pricingSection,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    });
    if (pricingDisclaimer) {
      gsap.to(pricingDisclaimer, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pricingSection,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });
    }
  }

  /* ----- Service details section label ----- */
  const serviceDetailSection = document.querySelector('.service-detail-list');
  const serviceDetailLabel = serviceDetailSection ? serviceDetailSection.querySelector('.section-label') : null;
  if (serviceDetailLabel) {
    gsap.fromTo(serviceDetailLabel, { opacity: 0, y: 24 }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: serviceDetailSection,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Service details: number + content with line-reveal feel ----- */
  const serviceDetails = document.querySelectorAll('.service-detail');
  serviceDetails.forEach(function (block, i) {
    const number = block.querySelector('.service-detail-number');
    const content = block.querySelector('.service-detail-content');
    const title = block.querySelector('.service-detail-title');
    const lead = block.querySelector('.service-detail-lead');
    const desc = block.querySelector('.service-detail-desc');
    const list = block.querySelector('.service-detail-list-inner');
    const listItems = list ? list.querySelectorAll('li') : [];

    gsap.set([number, content], { opacity: 0 });
    gsap.set(content, { x: -32 });
    gsap.to(number, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: block,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
    gsap.to(content, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: block,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
    if (listItems.length) {
      gsap.set(listItems, { opacity: 0, x: -16 });
      gsap.to(listItems, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 72%',
          toggleActions: 'play none none none',
        },
      });
    }
  });

  /* ----- Process: step numbers count-up feel + content stagger ----- */
  const processSection = document.querySelector('.process');
  const processLabel = document.querySelector('.process .section-label');
  const processIntro = document.querySelector('.process-intro');
  const processSteps = document.querySelectorAll('.process-step');

  if (processLabel) {
    gsap.fromTo(processLabel, { opacity: 0, y: 24 }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: processSection,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  }
  if (processIntro) {
    gsap.fromTo(processIntro, { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: processSection,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  }
  processSteps.forEach(function (step, i) {
    const num = step.querySelector('.process-step-num');
    const stepContent = step.querySelector('.process-step-content');
    gsap.set([num, stepContent], { opacity: 0, y: 24 });
    gsap.to(num, {
      opacity: 0.6,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
    gsap.to(stepContent, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  /* ----- CTA: headline words + copy + link ----- */
  const ctaSection = document.querySelector('.services-cta');
  const ctaHeadline = document.querySelector('.services-cta-headline');
  const ctaWords = ctaHeadline ? ctaHeadline.querySelectorAll('.word') : [];
  const ctaCopy = document.querySelector('.services-cta-copy');
  const ctaLink = document.querySelector('.services-cta-link');

  if (ctaWords.length) {
    gsap.set(ctaWords, { y: '100%' });
    gsap.to(ctaWords, {
      y: '0%',
      duration: 0.65,
      stagger: 0.06,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }
  if (ctaCopy) {
    gsap.fromTo(ctaCopy, { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      delay: 0.25,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }
  if (ctaLink) {
    gsap.fromTo(ctaLink, { opacity: 0, y: 16 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ----- Footer: fade in ----- */
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
    var lastY = window.scrollY;
    var delta = 60;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > 150 && y > lastY + delta) {
        gsap.to(header, { y: -100, duration: 0.3, ease: 'power2.out' });
        lastY = y;
      } else if (y < lastY - delta || y < 80) {
        gsap.to(header, { y: 0, duration: 0.3, ease: 'power2.out' });
        lastY = y;
      }
    }, { passive: true });
  }
})();
