let users = []

function initRegister() {
    loadUsers();
}

async function loadUsers() {
    try {
        let parseStorage = await getItem('users');
        users = JSON.parse(parseStorage.data.value);
    } catch (e) {
        console.warning('Loading error:', e);
    }
}

function register() {
    passwordMatching();
    usersPush();
    resetForm();
    successfulRegistration();
}

async function usersPush() {
    users.push({
        email: userEmailInput.value,
        password: userPasswordInput.value,
    });
    await setItem('users', JSON.stringify(users));
}

function successfulRegistration() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";

    setTimeout(function () {
        overlay.style.display = "none";
        window.location.href = 'index.html'; //weiterleitung//
    }, 700);
}

function checkAcceptance() {
    let registerBtn = document.getElementById('registerBtn');
    let acceptBoxChecked = document.getElementById('acceptBoxChecked');

    if (acceptBoxChecked.style.display === "block") {
        registerBtn.disabled = false;
    } else {
        registerBtn.disabled = true;
    }
}

function passwordMatching() {
    let userPasswordInput = document.getElementById("userPasswordInput");
    let confirmPasswordInput = document.getElementById("confirmPasswordInput");
    let confirmPasswordContainer = document.getElementById("confirmPasswordContainer");
    let confirmMsg = document.getElementById("confirmMsg");
    let password = userPasswordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        confirmPasswordContainer.style.borderColor = "red";
        confirmMsg.style.display = "block"; // Fehlermeldung anzeigen
        return false;
    } else {
        confirmPasswordContainer.style.borderColor = "";
        confirmMsg.style.display = "none"; // Fehlermeldung ausblenden
        return true;
    }
}

function toggleAcceptCheckbox() {
    let checkedBox = document.getElementById('acceptBoxChecked');
    let uncheckedBox = document.getElementById('acceptBoxUnchecked');

    if (checkedBox.style.display === "" || checkedBox.style.display === "none") {
        checkedBox.style.display = "block";
        uncheckedBox.style.display = "none";
    } else {
        checkedBox.style.display = "none";
        uncheckedBox.style.display = "block";
    }

    checkAcceptance();
}

function resetForm() {
    userEmailInput.value = '';
    userPasswordInput.value = '';
}