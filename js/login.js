function validateEmail(email) {
    return email.includes('@');
}

function validatePassword(password) {
    return password.length >= 6;
}

function login() {
    let emailInput = document.getElementById("loginMailInput");
    let passwordInput = document.getElementById("loginPasswordInput");
    let email = emailInput.value;
    let password = passwordInput.value;

    if (!validateEmail(email)) {
        emailInput.style.borderColor = "red";
        return false;
    } else {
        emailInput.style.borderColor = "";
    }

    if (!validatePassword(password)) {
        passwordInput.style.borderColor = "red";
        return false;
    } else {
        passwordInput.style.borderColor = "";
    }

    // Weitere Validierungen
}

    // Hier sollte ich eine sichere Passwortüberprüfung implementieren, z.B. Hashing und Salting.
    
    // Überprüfung der Übereinstimung
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        console.log('Benutzer gefunden');
        window.location.href = 'application.html'; //weiterleitung//
     } else {
        console.log('Benutzer nicht gefunden');
        alert("Anmeldung fehlgeschlagen")
        return false; // Das Formular wird nicht gesendet
    }
