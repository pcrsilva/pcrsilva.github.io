/**
 * PAULO CÉZAR - FLUTTER DEVELOPER & SOFTWARE ENGINEER
 * Main Interactions, PIX Clipboard, and UI Enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. PIX Copy to Clipboard with Toast Notification
  const copyPixBtn = document.getElementById('copyPixBtn');
  const pixKeyText = document.getElementById('pixKeyText');
  const copyToast = document.getElementById('copyToast');

  if (copyPixBtn && pixKeyText) {
    copyPixBtn.addEventListener('click', () => {
      const keyToCopy = pixKeyText.innerText.trim();

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(keyToCopy)
          .then(() => triggerToast())
          .catch(() => fallbackCopy(keyToCopy));
      } else {
        fallbackCopy(keyToCopy);
      }
    });
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      triggerToast();
    } catch (err) {
      console.error('Falha ao copiar texto: ', err);
      alert('Chave PIX: ' + text);
    }
    textArea.remove();
  }

  function triggerToast() {
    if (!copyToast) return;
    copyToast.classList.remove('show');
    // Trigger reflow to restart animation
    void copyToast.offsetWidth;
    copyToast.classList.add('show');
    
    // Also temporarily change button text
    if (copyPixBtn) {
      const originalHTML = copyPixBtn.innerHTML;
      copyPixBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Copiado!
      `;
      setTimeout(() => {
        copyPixBtn.innerHTML = originalHTML;
      }, 2500);
    }
  }

  // 3. Scroll Spy for Active Navigation Link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // 4. Smooth Anchor Scrolling with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 5. Interactive Hardware Blueprint Pulse Simulation
  const diagramNodes = document.querySelectorAll('.diagram-node');
  if (diagramNodes.length > 0) {
    let activeNodeIndex = 0;
    setInterval(() => {
      diagramNodes.forEach((node, idx) => {
        if (idx === activeNodeIndex) {
          node.style.borderColor = 'var(--cyan)';
          node.style.boxShadow = '0 0 16px var(--cyan-glow)';
        } else {
          node.style.borderColor = 'var(--border-subtle)';
          node.style.boxShadow = 'none';
        }
      });
      activeNodeIndex = (activeNodeIndex + 1) % diagramNodes.length;
    }, 2400);
  }
});
