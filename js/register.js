let users = [{name: 'test', email: 'test', password: 'test'}]

function addUser() {
    let inputName = document.getElementById("userNameInput").value;
    let inputEmail = document.getElementById("userEmailInput").value;
    let inputPassword = document.getElementById("userPasswordInput").value;
    let newUser = {name: inputName, email: inputEmail, password: inputPassword};

    users.push(newUser);
    console.log(inputName);
    
    // Rufen Sie die Erfolgsmeldung auf
    successfulRegistration();

    // window.location.href = 'index.html';
    return false; // neuladen hindern 
}

function successfulRegistration() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";

    setTimeout(function () {
        overlay.style.display = "none";
        window.location.href = 'index.html'; //weiterleitung//
    }, 700);
    
}
