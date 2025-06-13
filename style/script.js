function toggleMode() {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('.toggle-btn i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.replace('fa-adjust', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-adjust');
    }
}