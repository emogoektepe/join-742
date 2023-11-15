function init() {
    includeHTML();
    loadContactsFromStorage();
    initRegister();
    renderSummary();
}

function setActiveNavItem(activeId) {
    const navItems = document.querySelectorAll(".navItem");
    navItems.forEach(item => {
        if (item.id === activeId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

function renderGreetingMessage() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = "";

    if (currentHour >= 6 && currentHour < 12) {
        greeting = `Good morning`;
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = `Good afternoon`;
    } else if (currentHour >= 17 && currentHour < 21) {
        greeting = `Good evening`;
    } else {
        greeting = "Hello";
    }

    document.getElementById('greetingMessage').innerHTML = greeting;
    renderCurrentUser();
};

function logOutUser(){
    currentUser.splice(0,1)
    saveCurrentUser();
}  

function renderCurrentUser(){

    let user = currentUser[0]['name'];
     document.getElementById('currentUserName').innerHTML = user || '';
}