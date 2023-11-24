let contactsJson = [];
let contactsFirstLetter = [];
let contactPosition = 0;
let contactColorsMap = new Map();

function renderContacts() {
    let content = document.getElementById('content');
    content.innerHTML = tempRenderContactContent();
    getFirstLetter();
    fillContactListHeader();
    content.innerHTML += tempAddContactForm('contacts');
    content.innerHTML += tempEditForm();
    setActiveNavItem("contacts"); //für Navbar
}

function addNewContact() {
    document.getElementById('addNewContactForm').style.display = "block";
}

function closePopup() {
    let form = document.getElementById('addNewContactForm');
    let formEdit = document.getElementById('editForm');
    if (formEdit) {
        formEdit.style.display = "none";
    }
    form.style.display = "none";
    resetInputFields();
}

function doNotClose(event) {
    event.stopPropagation();
}

function renderEditForm(i) {
    contactPosition = i;
    document.getElementById('editForm').style.display = "block"
    let inputNameEdit = document.getElementById('inputNameEdit');
    let inputEmailEdit = document.getElementById('inputEmailEdit');
    let inputPhoneEdit = document.getElementById('inputPhoneEdit');
    let formProfile = document.getElementById('formProfile');
    let contactListImg = document.getElementById(`contactInListImg${i}`);
    formProfile.innerHTML = getInitials(i);
    formProfile.style.backgroundColor = contactListImg.style.backgroundColor;
    inputNameEdit.value = contactsJson[i].fullName;
    inputEmailEdit.value = contactsJson[i].email;
    inputPhoneEdit.value = contactsJson[i].phone;
}

function saveEdit() {
    let inputNameEdit = document.getElementById('inputNameEdit').value;
    let inputEmailEdit = document.getElementById('inputEmailEdit').value;
    let inputPhoneEdit = document.getElementById('inputPhoneEdit').value;
    contactsJson[contactPosition].fullName = inputNameEdit;
    contactsJson[contactPosition].email = inputEmailEdit;
    contactsJson[contactPosition].phone = inputPhoneEdit;
    getFirstLetter();
    setContactsStorage();
    renderContacts();
    setActualContact(contactPosition);
    closePopup();
}

function getFirstLetter() {
    contactsFirstLetter = [];
    for (let i = 0; i < contactsJson.length; i++) {
        if (contactsFirstLetter.indexOf(contactsJson[i].fullName.charAt(0).toUpperCase()) == -1) {
            contactsFirstLetter.push(contactsJson[i].fullName.charAt(0).toUpperCase());
            contactsFirstLetter.sort();
        }
    }
}

function fillContactListHeader() {
    let contactsList = document.getElementById('contactsList');
    for (let i = 0; i < contactsFirstLetter.length; i++) {
        contactsList.innerHTML += tempRenderContactsList(i);
        fillContactWithHeader(contactsFirstLetter[i]);
    }
}

function fillContactWithHeader(i) {
    let contactsUnderHeader = document.getElementById(`contactsUnderHeader${i}`);
    for (let i = 0; i < contactsJson.length; i++) {
        if (contactsUnderHeader.id.slice(-1) == contactsJson[i].fullName.charAt(0).toUpperCase()) {
            contactsUnderHeader.innerHTML += tempRenderContactsUnderHeader(i);
            setContactListImgColor(i);
        }
    }
}

function getInitials(i) {
    if (contactsJson[i].fullName.split(' ').length > 1) {
        return contactsJson[i].fullName.split(' ')[0].charAt(0).toUpperCase() + contactsJson[i].fullName.split(' ')[1].charAt(0).toUpperCase();
    } else {
        return contactsJson[i].fullName.split(' ')[0].charAt(0).toUpperCase();
    }
}

function setContactListImgColor(i) {
    const color = ["#ff7a00", "#ff5eb3", "#6e52ff", "#9327ff", "#00bee8", "#1fd7c1", "#ff745e", "#ffa35e", "#fc71ff", "#ffc701", "#0038ff", "#c3ff2b", "#ffe62b", "#ff4646", "#ffbb2b"];
    i = i % color.length;
    const contactColor = color[i];
    let imgColor = document.getElementById(`contactInListImg${i}`);
    imgColor.style.backgroundColor = contactColor;
    contactColorsMap.set(contactsJson[i].fullName, contactColor);
}

function renderContactInfoSection(i) {
    let infoSectionContact = document.getElementById('infoSectionContact');
    let imgColor = document.getElementById(`contactInListImg${i}`);
    infoSectionContact.innerHTML = tempRenderContact(i, imgColor);
    let contactSection = document.getElementById('contactSection');
    let contactSectionRight = document.getElementById('contactSectionRight');
    if(window.innerWidth <= 1050) {
        contactSection.style.display = 'none';
        contactSectionRight.style.display = 'block';
    }
}

function backToContacts() {
    let contactSection = document.getElementById('contactSection');
    let contactSectionRight = document.getElementById('contactSectionRight');
    contactSection.style.display = 'block';
    contactSectionRight.style.display = 'none';
}

let activeElement = false;
function setActiveBackgroundColor(element) {
    if (activeElement === element) {
        element.style.backgroundColor = '';
        element.classList.add('contactInListHover');
        element.children[1].children[0].style.color = '';
        activeElement = false;
    } else {
        if (activeElement) {
            activeElement.style.backgroundColor = '';
            activeElement.classList.add('contactInListHover');
            activeElement.children[1].children[0].style.color = '';
        }
    }
    element.style.backgroundColor = "#2A3647";
    element.classList.remove('contactInListHover');
    element.children[1].children[0].style.color = "#fff";
    activeElement = element;
}

function createContact(page) {
    const inputName = document.getElementById('inputName').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputPhone = document.getElementById('inputPhone').value;
    const newContact = { fullName: inputName, email: inputEmail, phone: inputPhone };
    contactsJson.push(newContact)
    setContactsStorage();
    if (page.innerText == 'AddTask') {
        renderDropDownContacts();
        document.getElementById(`contactInListImg${contactsJson.length - 1}`).scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (page.innerText == 'Contacts') {
        renderContacts();
        const lastIndex = contactsJson.length - 1;
        setActualContact(lastIndex);
    }
    closePopup();
}

function resetInputFields() {
    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
}

function deleteContact(i) {
    contactsJson.splice(i, 1);
    setContactsStorage();
    renderContacts();
}

function deleteContactInForm() {
    contactsJson.splice(contactPosition, 1);
    setContactsStorage();
    closePopup();
    renderContacts();
}

function setActualContact(position) {
    document.getElementById('infoSectionContact').innerHTML = tempRenderContact(position, document.getElementById(`contactInListImg${position}`));
    setActiveBackgroundColor(document.getElementById(`contactInList${position}`));
    document.getElementById(`contactInList${position}`).scrollIntoView({ behavior: "smooth", block: "center" });
}

async function loadContactsFromStorage() {
    let storageParse = await getItem('contacts');
    contactsJson = JSON.parse(storageParse.data.value);
}

function setContactsStorage() {
    let contactAsString = JSON.stringify(contactsJson);
    setItem('contacts', contactAsString);
}

function validateInputChars(input) {
    input.value = input.value.replace(/[^a-zA-ZäöüÄÖÜ\s]+/g, ''); // Alle unerwünschten Zeichen entfernen
    input.value = input.value.replace(/^[\s]+/, ''); // Leerzeichen am Anfang entfernen
}

function validateInputNumbers(input) {
    input.value = input.value.replace(/[^0-9\s]+/g, ''); // Nur Zahlen und Leerzeichen erlauben
    input.value = input.value.replace(/^[\s]+/, ''); // Leerzeichen am Anfang entfernen
}