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
                <div class="contacts">
                    <!-- TODO: Cotacts in List -->
                </div>
            </div>
            <div>
                <div class="infoSectionHeader">
                    <h1>Contacts</h1>
                    <div class="separator"></div>
                    <h3>Better with a team</h3>
                </div>
                <div class="infoSectionContact">
                    <div class="infoSectionProfile">
                        <div class="contactPicture">
                            AM
                        </div>
                        <div class="contactName">
                            <p>Anton Mayer</p>
                            <div class="contactButton">
                                <div onclick="renderEditForm()"><img src="../img/edit.svg" alt="">Edit</div>
                                <div><img src="../img/delete.svg" alt="">Delete</div>
                            </div>
                        </div>
                    </div>
                    <div class="contactInformationHeader">Contact Information</div>
                    <div class="contactInformation">
                        <p>Email</p>
                        <a class="contactInformationEmail" href="mailto:antom@gmail.com">antom@gmail.com</a>
                        <p>Phone</p>
                        <a class="contactInformationPhone" href="tel: +491111111">0111111</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    content.innerHTML += tempAddContactForm();
    content.innerHTML += tempEditForm();
    setActiveNav("contacts"); //für Navbar
}

function addNewContact() {
    document.getElementById('addNewContactForm').style.display = "block"
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