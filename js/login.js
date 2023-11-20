let currentUser = [];

function validateEmail() {
    let emailContainer = document.getElementById("loginMailInputContainer");
    let emailInput = document.getElementById("loginMailInput");
    let email = emailInput.value;
    let emailMsg = document.getElementById("loginMailInputMsg");

    if (!email.includes('@')) {
        emailContainer.style.borderColor = "red";
        emailMsg.style.display = "block"; // Fehlermeldung anzeigen
        return false;
    } else {
        emailContainer.style.borderColor = "";
        emailMsg.style.display = "none"; // Fehlermeldung ausblenden
        return true;
    }
}

function validatePassword() {
    let passwordContainer = document.getElementById("loginPasswordInputContainer");
    let passwordInput = document.getElementById("loginPasswordInput");
    let password = passwordInput.value;
    let passwordMsg = document.getElementById("loginPasswordInputMsg");

    if (password.length < 3) {
        passwordContainer.style.borderColor = "red";
        passwordMsg.style.display = "block"; // Fehlermeldung anzeigen
        return false;
    } else {
        passwordContainer.style.borderColor = "";
        passwordMsg.style.display = "none"; // Fehlermeldung ausblenden
        return true;
    }
}

function checkUser(email, password) {
    let user = users.find(u => u.email === email && u.password === password);
    let passwordContainer = document.getElementById("loginPasswordInputContainer");
    let passwordMsg = document.getElementById("loginPasswordInputMsg");

    if (user) {
        currentUser.push(user);
        console.log('Benutzer gefunden');
        window.location.href = 'application.html'; // Weiterleitung
    } else {
        console.log('Benutzer nicht gefunden');
        passwordContainer.style.borderColor = "red";
        passwordMsg.style.display = "block"; // Fehlermeldung anzeigen
        return false; // Das Formular wird nicht gesendet
    }
}

function login() {
    // Überprüfung der E-Mail und des Passworts mit den Validierungsfunktionen
    if (!validateEmail() || !validatePassword()) {
        return false; // Das Formular wird nicht gesendet, wenn die Validierung fehlschlägt
    }

    let email = document.getElementById("loginMailInput").value;
    let password = document.getElementById("loginPasswordInput").value;

    // Benutzerüberprüfung
    return checkUser(email, password);
}

function toggleCheckBoxRememberMe() {
    let checkedBox = document.getElementById('checkBoxChecked');
    let uncheckedBox = document.getElementById('checkBoxUnchecked');

    if (checkedBox.style.display === "" || checkedBox.style.display === "none") {
    checkedBox.style.display = "block";
    uncheckedBox.style.display = "none";
    }else{
    checkedBox.style.display = "none";
    uncheckedBox.style.display = "block";
    }
}