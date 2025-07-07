document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navUl = document.querySelector('nav ul');

  // Ouvrir/fermer le menu au clic sur le bouton hamburger
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // empêcher la propagation au document
    navUl.classList.toggle('show');
  });

  // Cacher le menu si on clique en dehors
  document.addEventListener('click', (e) => {
    if (navUl.classList.contains('show') && !navUl.contains(e.target) && e.target !== menuToggle) {
      navUl.classList.remove('show');
    }
  });

  // Optionnel : fermer le menu quand on clique sur un lien (sur mobile)
  navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('show');
    });
  });
});
