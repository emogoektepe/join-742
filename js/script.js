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
function renderGreetingMessage() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = "";

    if (currentHour >= 6 && currentHour < 12) {
        greeting = "Good morning,";
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good afternoon,";
    } else if (currentHour >= 17 && currentHour < 21) {
        greeting = "Good evening,";
    } else {
        greeting = "Hello,";
    }

    document.getElementById('greetingMessage').innerHTML = greeting;
};