document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navUl = document.querySelector('nav ul');

  // Ouvrir/fermer menu au clic sur hamburger
  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // éviter la fermeture immédiate
    navUl.classList.toggle('show');
  });

  // Fermer le menu si on clique ailleurs sur la page
  document.addEventListener('click', (e) => {
    if (navUl.classList.contains('show') && !navUl.contains(e.target) && e.target !== toggle) {
      navUl.classList.remove('show');
    }
  });

  // Empêcher la fermeture si on clique dans le menu
  navUl.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
