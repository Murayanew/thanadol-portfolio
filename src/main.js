import './style.css';
import { videoWorks } from './data/video-works.js';
import { photoWorks } from './data/photo-works.js';
import { Navbar } from './components/Navbar.js';
import { Hero } from './sections/Hero.js';
import { About } from './sections/About.js';
import { Experience } from './sections/Experience.js';
import { Education } from './sections/Education.js';
import { Skills } from './sections/Skills.js';
import { Portfolio } from './sections/Portfolio.js';
import { Contact } from './sections/Contact.js';
import { Modal } from './components/Modal.js';

// Assemble the page
const app = document.getElementById('app');
app.innerHTML = `
  ${Navbar()}
  <main class="flex-grow">
    ${Hero()}
    ${About()}
    ${Experience()}
    ${Education()}
    ${Skills()}
    ${Portfolio(videoWorks, photoWorks)}
    ${Contact()}
  </main>
  ${Modal()}
  
  <!-- Footer -->
  <footer class="bg-bg-primary border-t-4 border-black py-8 text-center text-xs md:text-sm text-paper-cream font-bold">
    <div class="max-w-6xl mx-auto px-4">
      <p class="mb-2">© 2026 ธนดล จิตรการนทีกิจ. All Rights Reserved.</p>
      <p class="text-pop-yellow font-heading uppercase tracking-widest">// Built with Vite + Vanilla JS + Tailwind CSS v4</p>
    </div>
  </footer>
`;

// Setup interactive features
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScrollHighlight();
  initCopyToClipboard();
  initPortfolioModal();
  initMobileMenu();
});

// 1. Scroll-MT classes setting on sections
document.querySelectorAll('section[id]').forEach(section => {
  section.classList.add('scroll-mt-20');
});

// 2. Active Navbar Item on Scroll
function initNavbarScrollHighlight() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -40% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Map child sections back to main nav anchors
        let activeSection = id;
        if (id === 'about' || id === 'education' || id === 'skills') {
          activeSection = 'profile';
        }
        
        const updateLinks = (links) => {
          links.forEach(link => {
            if (link.getAttribute('data-section') === activeSection) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        };

        updateLinks(navLinks);
        updateLinks(mobileLinks);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Safe reset when scrolled back to top
  window.addEventListener('scroll', () => {
    if (window.scrollY < 100) {
      const resetLinks = (links) => {
        links.forEach(link => {
          if (link.getAttribute('data-section') === 'profile') {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      };
      resetLinks(navLinks);
      resetLinks(mobileLinks);
    }
  });
}

// 2.5. Mobile Hamburger Menu Toggle Controller
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  if (!menuToggle || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = menuToggle.classList.contains('open');
    if (isOpen) {
      // Close mobile menu with transform transition slide-up
      menuToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      setTimeout(() => {
        // Double check it wasn't re-opened during delay
        if (!menuToggle.classList.contains('open')) {
          mobileMenu.classList.add('hidden');
        }
      }, 300);
      document.body.classList.remove('overflow-hidden');
    } else {
      // Open mobile menu
      mobileMenu.classList.remove('hidden');
      // Delay to ensure hidden display change propagates before transition transform triggers
      requestAnimationFrame(() => {
        menuToggle.classList.add('open');
        mobileMenu.classList.add('open');
      });
      document.body.classList.add('overflow-hidden');
    }
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking links
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });
}


// 3. Copy-to-clipboard functionality
function initCopyToClipboard() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation(); // Avoid card click triggers if nested
      
      const targetId = btn.getAttribute('data-copy-target');
      const textToCopy = document.getElementById(targetId)?.textContent || '';
      
      if (!textToCopy) return;
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Show success visual state
        const originalText = btn.innerHTML;
        btn.innerHTML = `คัดลอกแล้ว!`;
        btn.classList.remove('bg-pop-pink', 'bg-pop-yellow', 'text-black');
        btn.classList.add('bg-emerald-400', 'text-black');
        
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('bg-emerald-400', 'text-black');
          btn.classList.add(btn.getAttribute('data-copy-target') === 'email-text' ? 'bg-pop-yellow' : 'bg-pop-pink', 'text-black');
        }, 2000);
        
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });
}

// 4. Portfolio Lightbox Modal Details
function initPortfolioModal() {
  const modal = document.getElementById('project-modal');
  const modalWrapper = document.getElementById('modal-wrapper');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalRoles = document.getElementById('modal-roles');
  const modalLink = document.getElementById('modal-link');
  const modalLikeBtn = document.getElementById('modal-like-btn');
  const heartIcon = document.getElementById('heart-icon');
  const likeText = document.getElementById('like-text');
  
  // Track liked photos in memory
  const likedPhotos = new Set();
  let currentPhotoIdx = null;

  const closeTriggers = [
    document.getElementById('modal-close'),
    document.getElementById('modal-close-footer'),
    modal
  ];

  // Open modal
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const gridId = card.getAttribute('data-grid-id');
      const idx = parseInt(card.getAttribute('data-index'), 10);
      
      // Select the database list based on data-grid-id
      const items = gridId === 'video-grid' ? videoWorks : photoWorks;
      const project = items[idx];
      
      if (!project) return;
      
      // Inject details
      modalImg.src = project.cover;
      modalImg.alt = project.title;
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description || '';
      
      // Inject tags
      modalRoles.innerHTML = project.tags.map((tag, tIdx) => {
        const tagColors = [
          "bg-pop-pink text-white",
          "bg-pop-yellow text-black",
          "bg-pop-cyan text-black",
          "bg-pop-red text-white",
          "bg-pop-navy text-white",
          "bg-emerald-400 text-black",
          "bg-orange-400 text-black"
        ];
        const color = tagColors[(tIdx + idx) % tagColors.length];
        return `<span class="px-2.5 py-0.5 text-[10px] font-black border-2 border-black ${color} rounded-full shadow-[1.5px_1.5px_0px_#000] uppercase tracking-wide">${tag}</span>`;
      }).join('');
      
      // Configure Dynamic Buttons for Video vs Photo grid
      if (gridId === 'photo-grid') {
        modalLink.classList.add('hidden');
        modalLikeBtn.classList.remove('hidden');
        currentPhotoIdx = idx;
        
        // Show current checked state
        if (likedPhotos.has(idx)) {
          heartIcon.setAttribute('fill', 'currentColor');
          heartIcon.classList.add('text-pop-pink');
          likeText.textContent = "ถูกใจแล้ว!";
        } else {
          heartIcon.setAttribute('fill', 'none');
          heartIcon.classList.remove('text-pop-pink');
          likeText.textContent = "ถูกใจสิ่งนี้";
        }
      } else {
        modalLikeBtn.classList.add('hidden');
        currentPhotoIdx = null;
        
        // Set link button visibility for Video works
        if (project.link && project.link.trim() !== '') {
          modalLink.href = project.link;
          modalLink.classList.remove('hidden');
        } else {
          modalLink.href = '';
          modalLink.classList.add('hidden');
        }
      }
      
      // Show Modal animations
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      modalWrapper.classList.remove('scale-95', 'opacity-0');
      modalWrapper.classList.add('scale-100', 'opacity-100');
      
      // Disable background scrolling
      document.body.classList.add('overflow-hidden');
    });
  });

  // Like Button toggle event
  modalLikeBtn.addEventListener('click', () => {
    if (currentPhotoIdx === null) return;
    
    if (likedPhotos.has(currentPhotoIdx)) {
      likedPhotos.delete(currentPhotoIdx);
      heartIcon.setAttribute('fill', 'none');
      heartIcon.classList.remove('text-pop-pink');
      likeText.textContent = "ถูกใจสิ่งนี้";
    } else {
      likedPhotos.add(currentPhotoIdx);
      heartIcon.setAttribute('fill', 'currentColor');
      heartIcon.classList.add('text-pop-pink');
      likeText.textContent = "ถูกใจแล้ว!";
      
      // Scale pop micro-animation
      heartIcon.classList.add('scale-125');
      setTimeout(() => {
        heartIcon.classList.remove('scale-125');
      }, 150);
    }
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalWrapper.classList.remove('scale-100', 'opacity-100');
    modalWrapper.classList.add('scale-95', 'opacity-0');
    document.body.classList.remove('overflow-hidden');
  };

  closeTriggers.forEach(trigger => {
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      if (e.target === modal || e.currentTarget !== modal) {
        closeModal();
      }
    });
  });

  // Esc key closure
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
      closeModal();
    }
  });
}
