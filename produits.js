document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('show');
  });

  // Clic en dehors ferme le menu
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('show');
    }
  });

  // Fermer menu au clic sur lien
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
});
