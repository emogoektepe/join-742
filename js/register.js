let users = [{name: 'test', email: 'test@test.de', password: 'test123'}]

function addUser() {
    let inputName = document.getElementById("userNameInput").value;
    let inputEmail = document.getElementById("userEmailInput").value;
    let inputPassword = document.getElementById("userPasswordInput").value;
    let newUser = {name: inputName, email: inputEmail, password: inputPassword};

    users.push(newUser);
    console.log(inputName);
    
    successfulRegistration();

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
function toggleAcceptCheckbox() {
    let checkedBox = document.getElementById('acceptBoxChecked');
    let uncheckedBox = document.getElementById('acceptBoxUnchecked');

    if(checkedBox.style.display === "none"){
    checkedBox.style.display = "block";
    uncheckedBox.style.display = "none";
    }else{
    checkedBox.style.display = "none";
    uncheckedBox.style.display = "block";
    }
}