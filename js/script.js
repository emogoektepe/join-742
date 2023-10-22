function init() {
    renderSummary();
}

function setActiveNav(activeId) {
    const navItems = document.querySelectorAll(".navItems div");
    navItems.forEach(item => {
        if (item.id === activeId) {
            item.style.backgroundColor = "#4a5878";
        } else {
            item.style.backgroundColor = ""; // Setzt die Hintergrundfarbe zurück
        }
    });
}