function validateEmail() {
    let emailContainer = document.getElementById("loginMailInputContainer");
    let emailInput = document.getElementById("loginMailInput");
    let email = emailInput.value;
    let emailMsg = document.getElementById("loginMailInputMsg");

    if (!email.includes('@') || email.length < 6) {
        emailContainer.style.borderColor = "red";
        emailMsg.style.display = "block"; // Fehlermeldung anzeigen
        return false;
    } else {
        emailInput.style.borderColor = "";
        emailMsg.style.display = "none"; // Fehlermeldung ausblenden
        return true;
    }
}

function validatePassword() {
    let passwordContainer = document.getElementById("loginPasswordInputContainer");
    let passwordInput = document.getElementById("loginPasswordInput");
    let password = passwordInput.value;
    let passwordMsg = document.getElementById("loginPasswordInputMsg");

    if (password.length < 6) {
        passwordContainer.style.borderColor = "red";
        passwordMsg.style.display = "block"; // Fehlermeldung anzeigen
        return false;
    } else {
        passwordInput.style.borderColor = "";
        passwordMsg.style.display = "none"; // Fehlermeldung ausblenden
        return true;
    }
}

function login() {
    // Überprüfung der E-Mail und des Passworts mit den Validierungsfunktionen
    if (!validateEmail() || !validatePassword()) {
        return false; // Das Formular wird nicht gesendet, wenn die Validierung fehlschlägt
    }

    let email = document.getElementById("loginMailInput").value;
    let password = document.getElementById("loginPasswordInput").value;

    // Hier sollte ich eine sichere Passwortüberprüfung implementieren, z.B. Hashing und Salting.

    // Überprüfung der Übereinstimmung
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        console.log('Benutzer gefunden');
        window.location.href = 'application.html'; // Weiterleitung
    } else {
        console.log('Benutzer nicht gefunden');
        return false; // Das Formular wird nicht gesendet
    }
}
