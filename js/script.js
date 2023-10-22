function init() {
    // renderSummary();
    renderContacts();
}

function setActiveNav(activeId) {
    const navItems = document.querySelectorAll(".navItems div");
    navItems.forEach(item => {
        if (item.id === activeId) {
            item.style.backgroundColor = "#091931";
        } else {
            item.style.backgroundColor = ""; // Setzt die Hintergrundfarbe zurück
        }
    });
}