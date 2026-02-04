/* ============================================
   BYTECRAFTS.CA — MAIN JAVASCRIPT
   ============================================ */

// State
const state = {
  reducedMotion: false,
  observers: [],
  rafId: null
};

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initReducedMotion();
  initScrollProgress();
  initScrollReveal();
  initTextReveal();
  initScrollSpy();
  initParallax();
  initMobileMenu();
  initModal();
  initAccordion();
  initFilters();
  initActiveNav();
});

// ============================================
// REDUCED MOTION
// ============================================

function initReducedMotion() {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  state.reducedMotion = mediaQuery.matches;
  
  mediaQuery.addEventListener('change', () => {
    state.reducedMotion = mediaQuery.matches;
  });
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress__bar');
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', () => {
    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
    }
    state.rafId = requestAnimationFrame(updateProgress);
  }, { passive: true });
}

// ============================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================

function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (elements.length === 0) return;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add revealed class after a small delay for better effect
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, 100);
        
        // Optional: unobserve after reveal (remove if you want elements to animate out when scrolling up)
        // observer.unobserve(entry.target);
      } else {
        // Optional: remove revealed class when element goes out of view
        // entry.target.classList.remove('revealed');
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
  state.observers.push(observer);
}

// ============================================
// TEXT REVEAL (Line-by-line animation)
// ============================================

function initTextReveal() {
  const textElements = document.querySelectorAll('[data-reveal="line"]');
  if (textElements.length === 0) return;

  textElements.forEach(element => {
    // Split text into lines and wrap each in span
    const text = element.textContent;
    const words = text.split(' ');
    
    element.innerHTML = '';
    
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.transitionDelay = `${index * 0.05}s`;
      element.appendChild(span);
      
      // Add space after each word except the last
      if (index < words.length - 1) {
        element.appendChild(document.createTextNode(' '));
      }
    });
  });

  // Use scroll reveal to trigger
  initScrollReveal();
}

// ============================================
// SCROLL SPY (Active nav on scroll)
// ============================================

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  
  if (sections.length === 0 || navLinks.length === 0) return;

  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current link
        const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));
  state.observers.push(observer);
}

// ============================================
// PARALLAX (Subtle scroll-based movement)
// ============================================

function initParallax() {
  if (state.reducedMotion) return;

  const parallaxElements = document.querySelectorAll('.parallax');
  if (parallaxElements.length === 0) return;

  const handleParallax = () => {
    const scrollTop = window.pageYOffset;

    parallaxElements.forEach(el => {
      const speed = el.dataset.parallaxSpeed || 0.5;
      const yPos = -(scrollTop * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  };

  window.addEventListener('scroll', () => {
    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
    }
    state.rafId = requestAnimationFrame(handleParallax);
  }, { passive: true });
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const isActive = nav.classList.contains('active');
    toggle.textContent = isActive ? '×' : '☰';
  });

  // Close menu when link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.textContent = '☰';
    });
  });
}

// ============================================
// MODAL
// ============================================

function initModal() {
  const modalTriggers = document.querySelectorAll('[data-modal-open]');
  const modalClose = document.querySelectorAll('[data-modal-close]');
  const modals = document.querySelectorAll('.modal');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalClose.forEach(close => {
    close.addEventListener('click', () => {
      modals.forEach(modal => modal.classList.remove('active'));
      document.body.style.overflow = '';
    });
  });

  // Close on background click
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => modal.classList.remove('active'));
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// ACCORDION
// ============================================

function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion__header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all items
      document.querySelectorAll('.accordion__item').forEach(i => {
        i.classList.remove('active');
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ============================================
// FILTERS (Work page)
// ============================================

function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          // Re-trigger animation
          card.classList.remove('revealed');
          setTimeout(() => {
            card.classList.add('revealed');
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============================================
// ACTIVE NAV (Set current page link active)
// ============================================

function initActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (currentPath === href || 
        (currentPath === '/' && href === '/index.html') ||
        (currentPath.includes(href) && href !== '/index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================
// TIMELINE (Highlight active step on scroll)
// ============================================

function initTimelineHighlight() {
  const timelineItems = document.querySelectorAll('.timeline__item');
  if (timelineItems.length === 0) return;

  const options = {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active from all
        timelineItems.forEach(item => item.classList.remove('active'));
        // Add active to current
        entry.target.classList.add('active');
      }
    });
  }, options);

  timelineItems.forEach(item => observer.observe(item));
  state.observers.push(observer);
}

// Initialize timeline if on services page
if (document.querySelector('.timeline')) {
  document.addEventListener('DOMContentLoaded', initTimelineHighlight);
}

// ============================================
// FORM HANDLING
// ============================================

function initForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send to a backend
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', initForm);

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 100; // Account for fixed header
      
      window.scrollTo({
        top: offsetTop,
        behavior: state.reducedMotion ? 'auto' : 'smooth'
      });
    }
  });
});

// ============================================
// CLEANUP
// ============================================

window.addEventListener('beforeunload', () => {
  // Clean up observers
  state.observers.forEach(observer => observer.disconnect());
  
  // Cancel RAF
  if (state.rafId) {
    cancelAnimationFrame(state.rafId);
  }
});
