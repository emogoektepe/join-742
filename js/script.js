function init() {
    includeHTML();
    loadContactsFromStorage();
    initRegister();
    renderSummary();
}

function setActiveNav(activeId) {
    const navItems = document.querySelectorAll(".navItems div");
    navItems.forEach(item => {
        if (item.id === activeId) {
            item.classList.add("active"); // Füge die "active"-Klasse hinzu
        } else {
            item.classList.remove("active"); // Entferne die "active"-Klasse
        }
    });
}

function renderGreetingMessage() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = "";

    if (currentHour >= 6 && currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
        greeting = "Good evening";
    } else {
        greeting = "Hello";
    }

    document.getElementById('greetingMessage').innerHTML = greeting;
};