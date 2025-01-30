document.addEventListener('DOMContentLoaded', () => {
    // Alterna la visibilidad del menú en desktop (si es necesario)
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('hidden');
    });

    // Alterna la visibilidad del menú móvil al hacer clic en el ícono de las tres rayas
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); // Alterna la clase 'hidden' para mostrar/ocultar el menú
    });
});
