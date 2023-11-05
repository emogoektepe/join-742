function login() {
    let email = document.getElementById("loginMailInput").value;
    let password = document.getElementById("loginPasswordInput").value;

    // Hier sollte ich eine sichere Passwortüberprüfung implementieren, z.B. Hashing und Salting.

    // Überprüfung der Übereinstimung
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        console.log('Benutzer gefunden');
        window.location.href = 'application.html'; //weiterleitung//
     } else {
        console.log('Benutzer nicht gefunden');
        return false; // Das Formular wird nicht gesendet
    }
}