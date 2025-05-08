document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // Get the href attribute
        const href = link.getAttribute('href');
        
        // If the current path includes the href (excluding index.html for home page)
        if (currentPath === '/' && href === 'index.html') {
            link.classList.add('active');
        } else if (currentPath.includes(href) && href !== 'index.html') {
            link.classList.add('active');
        }
    });
});

// PDF Modal functions
function openPdfModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closePdfModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closePdfModal(event.target.id);
    }
};
