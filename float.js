let topBtn = document.querySelector('.float');

function toggleButtonVisibility() {
    if (window.scrollY > 500) {
        topBtn.style.display = 'flex';
    } else {
        topBtn.style.display = 'none';
    }
}
window.addEventListener('scroll', toggleButtonVisibility);
toggleButtonVisibility();
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});