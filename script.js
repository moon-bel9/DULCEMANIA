document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});


 // Toggle mobile menu
 const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
 const mobileMenu = document.getElementById('mobile-menu');

 mobileMenuToggle.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
 });