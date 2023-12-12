let topBtn = document.querySelector('.float');

// Function to check scroll position and toggle button visibility
function toggleButtonVisibility() {
    if (window.scrollY > 500) {
        topBtn.style.display = 'flex'; // Show the button
    } else {
        topBtn.style.display = 'none'; // Hide the button
    }
}

// Add event listener for the scroll event
window.addEventListener('scroll', toggleButtonVisibility);

// Initially hide the button when the page loads
toggleButtonVisibility();

// Scroll to top when the button is clicked
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optionally, add smooth scrolling behavior
    });
});