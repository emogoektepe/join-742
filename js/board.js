function renderBoard() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <h1>Board</h1>
    `;
    setActiveNav("board"); //für Navbar
}
    // Funktion, um ein anklickbares Element zu markieren
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