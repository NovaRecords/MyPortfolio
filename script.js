document.addEventListener('DOMContentLoaded', function() {
    // Get current page path and handle both root and index.html as home
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // Get the href attribute
        const href = link.getAttribute('href');
        
        // Reset active class
        link.classList.remove('active');
        
        // Check if current page matches the link
        if ((currentPage === 'index.html' && href === 'index.html') || 
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else if (currentPage === href) {
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
