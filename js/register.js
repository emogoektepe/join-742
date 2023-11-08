let users = []

function initRegister() {
    loadUsers();
}

async function loadUsers(){
    try {
        let parseStorage = await getItem('users'); 
        users = JSON.parse(parseStorage.data.value);
    } catch(e){
        console.log('Loading error:', e);
    }
}

// async function addUser() {
//     let inputName = document.getElementById("userNameInput").value;
//     let inputEmail = document.getElementById("userEmailInput").value;
//     let inputPassword = document.getElementById("userPasswordInput").value;
//     let newUser = {name: inputName, email: inputEmail, password: inputPassword};

//     users.push(newUser);
    
//     await setItem('users', JSON.stringify(users));
//     successfulRegistration();
//     resetForm();
//     //return false; // neuladen hindern 
// }

async function register() {
    users.push({
        email: userEmailInput.value,
        password: userPasswordInput.value,
    });
    await setItem('users', JSON.stringify(users));
    resetForm();
    successfulRegistration();
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
 function resetForm() {
    userEmailInput.value = '';
    userPasswordInput.value = '';
 }