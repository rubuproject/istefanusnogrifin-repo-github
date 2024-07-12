document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.navbar');
    
    // Membuat tombol menu hamburger
    const menuBtn = document.createElement('div');
    menuBtn.classList.add('menu-btn');
    menuBtn.innerHTML = '☰';
    header.appendChild(menuBtn);

    // Fungsi untuk toggle menu
    function toggleMenu() {
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('active');
    }

    // Event listener untuk tombol menu
    menuBtn.addEventListener('click', toggleMenu);

    // Menutup menu saat link di klik
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    // Menutup menu saat di-scroll
    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});