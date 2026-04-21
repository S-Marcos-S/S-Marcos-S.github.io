function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(function(section) {
        section.ClassList.remove(active);
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}