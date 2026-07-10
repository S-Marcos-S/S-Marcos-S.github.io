function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        // Smoothly scroll to top of page when changing views
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Dynamic Navbar Highlighting
    const navAbout = document.getElementById('nav-item-about');
    const navProjects = document.getElementById('nav-item-projects');

    if (navAbout) navAbout.classList.remove('active-tab');
    if (navProjects) navProjects.classList.remove('active-tab');

    if (sectionId === 'about' && navAbout) {
        navAbout.classList.add('active-tab');
    } else if (sectionId === 'projects' && navProjects) {
        navProjects.classList.add('active-tab');
    }
}

// Automatically navigate to section based on URL hash (e.g., index.html#projects)
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (hash === 'projects') {
        showSection('projects');
    } else {
        showSection('about');
    }
});