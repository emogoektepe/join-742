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
    document.getElementById('mobileGreetingMessage').innerHTML = greeting;
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

function renderInitials(){
    let fullname = currentUser[0]['name'];
    let names = fullname.split(" ")
    let firstNameCharacter = names[0].charAt(0)
    
    if(names.length > 1){
        renderDoubleInitials(names,firstNameCharacter);
    }else{
        renderSingleinitials(firstNameCharacter);
    }
}

function renderDoubleInitials(names,firstNameCharacter){

    let secondNameCharacter = names[1].charAt(0)
    document.getElementById('initials').innerHTML += `${firstNameCharacter}${secondNameCharacter}`;
}

function renderSingleinitials(firstNameCharacter){
    document.getElementById('initials').innerHTML = `${firstNameCharacter}`;
}