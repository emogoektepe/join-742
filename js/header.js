function toggleDropdown() {
    let dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function closeDropdown(event) {
    let dropdown = document.getElementById("dropdown");
    let initials = document.getElementById("initials");

    if (event.target !== dropdown && event.target !== initials) {
        dropdown.style.display = "none";
    }
}