function tempAddContactForm() {
    return /*html*/`<div class="addNewContactForm" id="addNewContactForm" onclick="closePopup()">
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
                        <form onsubmit="event.preventDefault(), createContact()" class="formContactDetails">
                            <div class="formInput"><input required autocomplete="off" style="text-transform: capitalize;" id="inputName" type="text" placeholder="Name"><img class="personGrey" src="../img/person-grey.svg" alt=""></div>
                            <div class="formInput"><input required autocomplete="off" id="inputEmail" type="email" placeholder="Email"><img class="mailGrey" src="../img/mail-grey.svg" alt=""></div>
                            <div class="formInput"><input minlength="7" required autocomplete="off" id="inputPhone" type="text" placeholder="Phone"><img class="phoneGrey" src="../img/phone-grey.svg" alt=""></div>
                            <div class="formButtons">
                                <div class="buttonUnfilled buttonCancel" onclick="closePopup()">
                                    Cancel
                                    <img src="../img/close.svg" alt="">
                                </div>
                                <button class="buttonFilled buttonCheck">
                                    Create contact
                                    <img src="../img/check-white.svg" alt="">
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>`;
}

function tempEditForm() {
    return /*html*/`<div class="addNewContactForm" id="editForm" onclick="closePopup()">
                <div class="addNewContactFormContent" onclick="doNotClose(event)">
                    <div class="formLeftSideContact">
                        <img src="../img/logo-white.svg" alt="">
                        <div class="formLeftSideText">
                            <p>Edit Contact</p>
                            <div class="underlineContact"></div>
                        </div>
                    </div>
                    <div class="formRightSideContact">
                        <img onclick="closePopup()" class="formCloseImg" src="../img/close.svg" alt="">
                        <div class="formProfile" id="formProfile"></div>
                        <div class="formContactDetails">
                            <div class="formInput"><input autocomplete="off" style="text-transform: capitalize;" id="inputNameEdit" type="text" placeholder="Name"><img class="personGrey" src="../img/person-grey.svg" alt=""></div>
                            <div class="formInput"><input autocomplete="off" id="inputEmailEdit" type="email" placeholder="Email"><img class="mailGrey" src="../img/mail-grey.svg" alt=""></div>
                            <div class="formInput"><input autocomplete="off" id="inputPhoneEdit" type="text" placeholder="Phone"><img class="phoneGrey" src="../img/phone-grey.svg" alt=""></div>
                            <div class="formButtonsEdit">
                                <div class="buttonUnfilled buttonDelete" onclick="deleteContactInForm()">
                                    Delete
                                </div>
                                <div class="buttonFilled buttonSave" onclick="saveEdit()">
                                    Save
                                    <img src="../img/check-white.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

function tempRenderContact(i, imgColor) {
    return /*html*/`<div class="infoSectionProfile">
                <div class="contactPicture" style="background: ${imgColor.style.backgroundColor}">${getInitials(i)}</div>
                <div class="contactName">
                    <p style="text-transform: capitalize;">${contactsJson[i].fullName}</p>
                    <div class="contactButton">
                        <div onclick="renderEditForm(${i})"><img src="../img/edit.svg" alt="">Edit</div>
                        <div onclick="deleteContact(${i})"><img src="../img/delete.svg" alt="">Delete</div>
                    </div>
                </div>
            </div>
            <div class="contactInformationHeader">Contact Information</div>
            <div class="contactInformation">
                <p>Email</p>
                <a class="contactInformationEmail" href="mailto:${contactsJson[i].email}">${contactsJson[i].email}</a>
                <p>Phone</p>
                <a class="contactInformationPhone" href="tel:${contactsJson[i].phone}">${contactsJson[i].phone}</a>
            </div>`;
}

function tempRenderContactContent() {
    return /*html*/`<div class="contactsContent">
                <div class="contactSection">
                    <div class="contactSectionHeader">
                        <div class="buttonFilled addNewContactButton" onclick="addNewContact()">
                            Add new contact
                            <img src="../img/person_add.svg" alt="">
                        </div>
                    </div>
                    <div class="contactsUnderButton">
                        <div class="contacts" id="contactsList"></div>
                    </div>
                </div>
                <div>
                    <div class="infoSectionHeader">
                        <h1>Contacts</h1>
                        <div class="separator"></div>
                        <h3>Better with a team</h3>
                    </div>
                    <div class="infoSectionContact" id="infoSectionContact"></div>
                </div>
            </div>`;
}

function tempRenderContactsUnderHeader(i) {
    return /*html*/`<div class="contactInList contactInListHover" id="contactInList${i}" onclick="renderContactInfoSection(${i}), setActiveBackgroundColor(this)">
                    <div class="contactInListImg" id="contactInListImg${i}">${getInitials(i)}</div>
                    <div class="contactInListInfo">
                        <div class="contactInListName">${contactsJson[i].fullName.charAt(0).toUpperCase() + contactsJson[i].fullName.substring(1)}</div>
                        <span class="contactInListMail">${contactsJson[i].email}</span>
                    </div>
                </div>`;
}

function tempRenderContactsList(i) {
    return /*html*/`<div class="contactsHeader">
                <span>${contactsFirstLetter[i]}</span>
            </div>
            <div class="contactsUnderHeader" id="contactsUnderHeader${contactsFirstLetter[i]}"></div>`;
}