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
                                <div class="formProfile">
                                    <img src="../img/person.svg" alt="">
                                </div>
                                <div class="formContactDetails">
                                    <div class="formInput"><input type="text" placeholder="Name"><img class="personGrey" src="../img/person-grey.svg" alt=""></div>
                                    <div class="formInput"><input type="text" placeholder="Email"><img class="mailGrey" src="../img/mail-grey.svg" alt=""></div>
                                    <div class="formInput"><input type="text" placeholder="Phone"><img class="phoneGrey" src="../img/phone-grey.svg" alt=""></div>
                                    <div class="formButtonsEdit">
                                        <div class="buttonUnfilled buttonDelete">
                                            Delete
                                        </div>
                                        <div class="buttonFilled buttonSave">
                                            Save
                                            <img src="../img/check-white.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
}