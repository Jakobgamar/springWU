
function toggleMenu() {
    const menu = document.getElementById('hamburgerMenu');
    menu.classList.toggle('open');
}

document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.hamburger-wrapper');
    if (!wrapper.contains(e.target)) {
        document.getElementById('hamburgerMenu').classList.remove('open');
    }
});