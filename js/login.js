function login() {
    let email = document.getElementById("contactEmail");
    let password = document.getElementById("contactPassword");
    let user = users.find( u => u.email == email.value && u.password == password.value);
    console.log(user);
    if(user) {
        console.log('user gefunden')
    };

    //weiterleitung//
    window.location.href='application.html'
}