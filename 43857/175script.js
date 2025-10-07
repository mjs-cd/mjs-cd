// Mobile menu toggle
function toggleMobileMenu() {
  if (window.innerWidth <= 768) {
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      body.classList.remove('menu-open');
    } else {
      mobileMenu.classList.add('active');
      body.classList.add('menu-open');
    }
  }
}

// Smooth scroll
function scrollToSection(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
  
  // Update active nav button
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-section="${id}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// Toggle file categories
function toggleFiles(id) {
  const filesList = document.getElementById(`files-${id}`);
  const chevron = document.getElementById(`chevron-${id}`);
  
  if (filesList.classList.contains('expanded')) {
    filesList.classList.remove('expanded');
    chevron.classList.remove('rotated');
  } else {
    filesList.classList.add('expanded');
    chevron.classList.add('rotated');
  }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle older updates
function toggleOlderUpdates() {
  const olderUpdates = document.getElementById('olderUpdates');
  const viewMoreBtn = document.querySelector('.view-more-btn');
  const viewMoreText = document.getElementById('viewMoreText');
  const viewMoreIcon = document.getElementById('viewMoreIcon');
  
  if (olderUpdates.classList.contains('expanded')) {
    olderUpdates.classList.remove('expanded');
    viewMoreBtn.classList.remove('active');
    viewMoreText.textContent = 'View More Updates';
  } else {
    olderUpdates.classList.add('expanded');
    viewMoreBtn.classList.add('active');
    viewMoreText.textContent = 'View Less Updates';
  }
}