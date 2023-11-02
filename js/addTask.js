let selectedElement = false;
let selectedContacts = [];
let searchValue = "";

function renderAddTask() {
    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <div class="addTaskContent">
            <h1>Add Task</h1>
            <div class="form">
                <div class="formLeftSide">
                    <div class="firstBlock">
                        <span data-end="*">Title</span>
                        <input type="text" name="" id="" placeholder="Enter a title">
                        <span class="requiredFieldText">This field is required</span>
                    </div>
                    <div class="secondBlock">
                        <span data-end="*">Description</span>
                        <textarea placeholder="Enter a Description"></textarea>
                        <span class="requiredFieldText">This field is required</span>
                    </div>
                    <div class="thirdBlock">
                        <span>Assigned to</span>
                        <div class="dropDownWithInput">
                            <div class="assignedTo" onclick="openContactDropDown()">
                                <input type="text" value="Select contacts to assign" id="assignedToInput" onkeyup="searchContactInDropDown()">
                                <div class="dropDownArrow" onclick="getFocus()">
                                    <img id="dropDownImage" src="./img/arrow_drop_down_down.svg" alt="">
                                </div>
                            </div>
                            <div id="imageFromDropDown">Image With Color and initials</div>
                            <div id="dropDownContact">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="formSeparator"></div>
                <div class="formRightSide">
                    <div class="dateBlock">
                        <span data-end="*">Due Date</span>
                    </div>
                    <div class="prioBlock">
                        <span>Prio</span>
                        <div class="prio">
                            <div onclick="changePrioColor(this, '#FF3D00')">Urgent<img src="./img/prioUp.svg" alt=""></div>
                            <div onclick="changePrioColor(this, '#FFA800')">Medium<img src="./img/prioMid.svg" alt=""></div>
                            <div onclick="changePrioColor(this, '#7AE229')">Low<img src="./img/prioLow.svg" alt=""></div>
                        </div>
                    </div>
                    <div class="categoryBlock">
                        <span data-end="*">Category</span>
                        
                    </div>
                    <div class="subtasksBlock">
                        <span>Subtasks</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    content.innerHTML += tempAddContactForm('addTask');
    setActiveNav("addTask"); //für Navbar
}

function getFocus() {
    document.getElementById("assignedToInput").focus();
}

function changePrioColor(element, color) {
    if (selectedElement === element) {
        element.style = '';
        element.lastChild.style = '';
        selectedElement = false;
    } else {
        if (selectedElement) {
            selectedElement.style = '';
            selectedElement.lastChild.style = '';
        }
        element.style.backgroundColor = color;
        element.style.boxShadow = 'none';
        element.style.color = '#ffffff';
        element.lastChild.style.filter = "brightness(0) invert(1)";
        element.style.fontWeight = '700';
        element.style.fontSize = '21px';
        selectedElement = element;
    }
}

function openContactDropDown() {
    document.getElementById('assignedToInput').value = "";
    let dropDownImage = document.getElementById('dropDownImage');
    let dropDownContact = document.getElementById('dropDownContact');
    if (dropDownImage.src.includes('down_down')) {
        dropDownImage.src = './img/arrow_drop_down_up.svg';
        dropDownContact.innerHTML = /*html*/ `
            <div class="dropDownSection" id="dropDownSection"></div>
            <div class="addContactButtonDropDown">
                <div class="buttonFilled addNewContactButton" onclick="addNewContact()">
                    Add new contact
                    <img src="../img/person_add.svg" alt="">
                </div>
            </div>
                `;
        renderDropDownContacts();
        dropDownContact.style.display = "block";
    } else {
        dropDownImage.src = './img/arrow_drop_down_down.svg';
        dropDownContact.style.display = "none";
        document.getElementById('assignedToInput').value = "Select contacts to assign";
    }
}

function renderDropDownContacts() {
    let dropDownSection = document.getElementById('dropDownSection');
    dropDownSection.innerHTML = '';
    for (let i = 0; i < contactsJson.length; i++) {
        if (contactsJson[i].fullName.toLowerCase().includes(searchValue.toLowerCase())) {
            dropDownSection.innerHTML += /*html*/ `
            <div class="contactsInMenu" id="contactsInMenu${i}" onclick="selectContactInDropDown(${i})">
                <div class="imgAndName">
                    <div class="contactsInMenuimg" id="contactInListImg${i}">
                        ${getInitials(i)}
                    </div>
                    <p>${contactsJson[i].fullName}</p>
                </div>
                <img src="./img/checkboxEmpty.svg" alt="checkbox">
            </div>
        `;
            let contactsInMenu = document.getElementById(`contactsInMenu${i}`);
            if (selectedContacts.indexOf(contactsInMenu.children[0].children[1].innerHTML) > -1) {
                selectContactInDropDown(i);
            }
            setContactListImgColor(i);
        }
    }
}

function selectContactInDropDown(i) {
    let contactsInMenu = document.getElementById(`contactsInMenu${i}`);
    let isSelected = contactsInMenu.classList.contains('selected');

    if (isSelected) {
        selectedContacts.splice(selectedContacts.indexOf(contactsInMenu.children[0].children[1].innerHTML), 1);
        contactsInMenu.children[0].children[1].style.color = '';
        contactsInMenu.style.backgroundColor = '';
        contactsInMenu.lastElementChild.src = './img/checkboxEmpty.svg';
    } else {
        if (selectedContacts.indexOf(contactsInMenu.children[0].children[1].innerHTML) == -1) {
            selectedContacts.push(contactsInMenu.children[0].children[1].innerHTML);
        }
        contactsInMenu.children[0].children[1].style.color = '#fff';
        contactsInMenu.style.backgroundColor = '#2a3647';
        contactsInMenu.lastElementChild.src = './img/checkboxChecked.svg';
    }
    contactsInMenu.classList.toggle('selected');
}

function searchContactInDropDown() {
    searchValue = document.getElementById('assignedToInput').value;
    renderDropDownContacts();
}