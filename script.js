document.addEventListener('DOMContentLoaded', () => {
  // Animation fade-in progressive des éléments .presentation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.presentation').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Menu hamburger responsive
  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche de déclencher le clic sur document
    nav.classList.toggle('show');
  });

  // Fermer le menu si on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('show');
    }
  });

  // Fermer le menu quand on clique sur un lien du menu
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
});
