let testContacts = [
    {
        fullName: 'Emre Göktepe',
        email: 'test@gmx.de',
        phone: '+49 91239199123'
    },
    {
        fullName: 'Johannes Braun',
        email: 'jo@gmx.de',
        phone: '+49 241241413'
    },
    {
        fullName: 'Simon Brost',
        email: 'simon@gmx.de',
        phone: '+49 123139123'
    },
    {
        fullName: 'Aimon Brost',
        email: 'simon@gmx.de',
        phone: '+49 123139123'
    }
];

let contactsFirstLetter = [];

function renderContacts() {
    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <div class="contactsContent">
            <div class="contactSection">
                <div class="contactSectionHeader">
                    <div class="buttonFilled addNewContactButton" onclick="addNewContact()">
                        Add new contact
                        <img src="../img/person_add.svg" alt="">
                    </div>
                </div>
                <div class="contactsUnderButton">
                    <div class="contacts" id="contactsList">
                        <!-- TODO: Cotacts in List -->
                    </div>
                </div>
            </div>
            <div>
                <div class="infoSectionHeader">
                    <h1>Contacts</h1>
                    <div class="separator"></div>
                    <h3>Better with a team</h3>
                </div>
                <div class="infoSectionContact" id="infoSectionContact">
                    
                </div>
            </div>
        </div>
    `;
    getFirstLetter();
    fillContactListHeader();
    content.innerHTML += tempAddContactForm();
    content.innerHTML += tempEditForm();
    setActiveNav("contacts"); //für Navbar
}

function addNewContact() {
    document.getElementById('addNewContactForm').style.display = "block";

}

function closePopup() {
    let form = document.getElementById('addNewContactForm');
    let formEdit = document.getElementById('editForm');
    form.style.display = "none";
    formEdit.style.display = "none";
}

function doNotClose(event) {
    event.stopPropagation();
}

function renderEditForm() {
    let content = document.getElementById('content');
    document.getElementById('editForm').style.display = "block"
    content.innerHTML += tempEditForm();
}

function getFirstLetter() {
    for (let i = 0; i < testContacts.length; i++) {
        if (contactsFirstLetter.indexOf(testContacts[i].fullName.charAt(0)) == -1) {
            contactsFirstLetter.push(testContacts[i].fullName.charAt(0));
            contactsFirstLetter.sort();
        }
    }
}

function fillContactListHeader() {
    let contactsList = document.getElementById('contactsList');
    for (let i = 0; i < contactsFirstLetter.length; i++) {
        contactsList.innerHTML += /*html*/ `
            <div class="contactsHeader">
                <span>${contactsFirstLetter[i]}</span>
            </div>
            <div class="contactsUnderHeader" id="contactsUnderHeader${contactsFirstLetter[i]}"></div>`;
        fillContactWithHeader(contactsFirstLetter[i]);
    }
}

function fillContactWithHeader(i) {
    let contactsUnderHeader = document.getElementById(`contactsUnderHeader${i}`);
    for (let i = 0; i < testContacts.length; i++) {
        const contact = testContacts[i];
        if (contactsUnderHeader.id.slice(-1) == contact.fullName.charAt(0)) {
            contactsUnderHeader.innerHTML +=
                `<div class="contactInList contactInListHover" onclick="renderContact(${i}), setActive(this)">
                    <div class="contactInListImg" id="contactInListImg${i}">${getInitials(i)}</div>
                    <div class="contactInListInfo">
                        <div class="contactInListName">${contact.fullName}</div>
                        <span class="contactInListMail">${contact.email}</span>
                    </div>
                </div>`;
            setContactListImgColor(i);
        }
    }
}

function getInitials(i) {
    if (testContacts[i].fullName.split(' ').length > 1) {
        return testContacts[i].fullName.split(' ')[0].charAt(0) + testContacts[i].fullName.split(' ')[1].charAt(0);
    } else {
        return testContacts[i].fullName.split(' ')[0].charAt(0);
    }
}

function setContactListImgColor(i) {
    let imgColor = document.getElementById(`contactInListImg${i}`);
    const color = ["#ff7a00", "#ff5eb3", "#6e52ff", "#9327ff", "#00bee8", "#1fd7c1", "#ff745e", "#ffa35e", "#fc71ff", "#ffc701", "#0038ff", "#c3ff2b", "#ffe62b", "#ff4646", "#ffbb2b"];
    i = i % color.length;
    imgColor.style.backgroundColor = color[i];
}

function renderContact(i) {
    let infoSectionContact = document.getElementById('infoSectionContact');
    let imgColor = document.getElementById(`contactInListImg${i}`);
    infoSectionContact.innerHTML = tempRenderContact(i, imgColor);
}

let activeElement = false;
function setActive(element) {
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