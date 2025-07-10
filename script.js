
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('hidden');
}
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function toggleSearch() {
    const box = document.getElementById('searchBox');
    box.classList.toggle('hidden');
}
