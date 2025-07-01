function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    mobileMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
    
    // Add overlay when menu is open
    let overlay = document.getElementById('menuOverlay');
    if (mobileMenu.classList.contains('active')) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'menuOverlay';
            overlay.className = 'fixed inset-0 bg-black/20 backdrop-blur-sm z-40';
            overlay.onclick = toggleMobileMenu;
            document.body.appendChild(overlay);
        }
    } else if (overlay) {
        overlay.remove();
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    const overlay = document.getElementById('menuOverlay');
    
    mobileMenu.classList.remove('active');
    body.classList.remove('overflow-hidden');
    if (overlay) {
        overlay.remove();
    }
}

function toggleMobileSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    const arrow = document.getElementById(submenuId === 'productsSubmenu' ? 'productsArrow' : 'spicesArrow');
    
    submenu.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
}

// Add event listeners to all mobile menu links
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});


