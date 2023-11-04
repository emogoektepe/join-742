let users = []

function addUser() {
    let inputName = document.getElementById("userNameInput").value;
    let inputEmail = document.getElementById("userEmailInput").value;
    let inputPassword = document.getElementById("userPasswordInput").value;
    let newUser = {name: inputName, email: inputEmail, password: inputPassword};

    users.push(newUser);
    console.log(inputName);
    
    //  Nachricht anzeigen, dass die Registrierung erfolgreich war

    // window.location.href = 'index.html';
    return false; // neuladen hindern 
}