function init() {
    renderSummary();
}

function setActiveNav(activeId) {
    const navItems = document.querySelectorAll(".navItems div");
    navItems.forEach(item => {
        if (item.id === activeId) {
            item.style.backgroundColor = "#091931";
            item.lastElementChild.style.filter= "brightness(0) invert(1)";
            item.style.color= "#ffffff";
        } else {
            item.style.backgroundColor = ""; // Setzt die Hintergrundfarbe zurück
            item.lastElementChild.style.filter= "";
            item.style.color= "";
        }
    });
}