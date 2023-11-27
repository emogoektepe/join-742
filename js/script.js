let urlParams = new URLSearchParams(window.location.search);
let parameterWert = urlParams.get('parameter');

async function init() {
    await includeHTML();
    loadContactsFromStorage();
    initRegister();
    loadTasksFromStorage();
    if (parameterWert == 'privacyPolicy') {
        renderPrivacyPolicy();
        hideElements();
    } else if (parameterWert == 'legalNotice') {
        renderLegalNotice();
        hideElements();
    } else {
        renderSummary();
        renderInitials();
    }
}

function hideElements() {
    let headerRight = document.getElementById('headerRight');
    let summary = document.getElementById('summary');
    let addTask = document.getElementById('addTask');
    let board = document.getElementById('board');
    let contacts = document.getElementById('contacts');
    let navLogo = document.getElementById('navLogo');
    navLogo.onclick = null;
    navLogo.style.cursor = 'default';
    headerRight.style.display = 'none';
    summary.style.display = 'none';
    addTask.style.display = 'none';
    board.style.display = 'none';
    contacts.style.display = 'none';
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
    getCurrentUserName();
};

function renderInitials() {
    let params = new URLSearchParams(window.location.search);
    let username = params.get('username');

    if (username !== null) {
        let names = username.split(" ")
        let firstNameCharacter = names[0].charAt(0)
        if (names.length > 1) {
            renderDoubleInitials(names, firstNameCharacter);
        } else {
            renderSingleinitials(firstNameCharacter);
        }
    }
}

function renderDoubleInitials(names, firstNameCharacter) {

    let secondNameCharacter = names[1].charAt(0)
    document.getElementById('initials').innerHTML = `${firstNameCharacter}${secondNameCharacter}`;
}

function renderSingleinitials(firstNameCharacter) {
    document.getElementById('initials').innerHTML = `${firstNameCharacter}`;
}

function getCurrentUserName() {
    let params = new URLSearchParams(window.location.search);
    let username = params.get('username');
    document.getElementById('currentUserName').innerHTML = username
    document.getElementById('mobileCurrentUserName').innerHTML = username
}

function loadJoinSummery(){
    if (parameterWert == 'privacyPolicy') {
        window.location.href = 'index.html';
    } else if (parameterWert == 'legalNotice') {
        window.location.href = 'index.html';
    } else {
        renderSummary();
    }
}