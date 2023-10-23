function renderContacts() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <div class="addNewContactForm" id="addNewContactForm" onclick="closePopup()">
            <div class="addNewContactFormContent" onclick="doNotClose(event)">
                <div class="formLeftSideContact">
                    <img src="../img/logo-white.svg" alt="">
                    <div class="formLeftSideText">
                        <p>Add contact</p>
                        <span>Tasks are better with a team!</span>
                        <div class="underlineContact"></div>
                    </div>
                </div>
                <div class="formRightSideContact">
                    <img onclick="closePopup()" class="formCloseImg" src="../img/close.svg" alt="">
                    <div class="formProfile">
                        <img src="../img/person.svg" alt="">
                    </div>
                    <div class="formContactDetails">
                        <div class="formInput"><input type="text" placeholder="Name"><img class="personGrey" src="../img/person-grey.svg" alt=""></div>
                        <div class="formInput"><input type="text" placeholder="Email"><img class="mailGrey" src="../img/mail-grey.svg" alt=""></div>
                        <div class="formInput"><input type="text" placeholder="Phone"><img class="phoneGrey" src="../img/phone-grey.svg" alt=""></div>
                        <div class="formButtons">
                            <div class="buttonUnfilled buttonCancel" onclick="closePopup()">
                                Cancel
                                <img src="../img/close.svg" alt="">
                            </div>
                            <div class="buttonFilled buttonCheck">
                                Create contact
                                <img src="../img/check-white.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contactsContent">
            <div class="contactSection">
                <div class="contactSectionHeader">
                    <div class="buttonFilled addNewContactButton" onclick="addNewContact()">
                        Add new contact
                        <img src="../img/person_add.svg" alt="">
                    </div>
                </div>
                <div class="contacts">
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
                                <div><img src="../img/edit.svg" alt="">Edit</div>
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
    setActiveNav("contacts"); //für Navbar
}

function addNewContact() {
    document.getElementById('addNewContactForm').style.display = "block"
}

function closePopup() {
    let form = document.getElementById('addNewContactForm');
    form.style.display = "none";
}

function doNotClose(event) {
    event.stopPropagation();
}