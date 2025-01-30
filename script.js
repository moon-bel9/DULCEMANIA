// Toggle el menú de escritorio (si lo necesitas)
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});

// Toggle el menú móvil
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Alterna la visibilidad del menú móvil al hacer clic en el ícono
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');  // Se asegura de que el menú se muestre o se oculte
});
