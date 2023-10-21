function renderContacts() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <div class="contactsContent">
            <div class="contactSection">
                <div class="contactSectionHeader">
                    <div class="buttonFilled addNewContactButton">
                        Add new contact
                        <img src="../img/person_add.svg" alt="">
                    </div>
                </div>
                <div class="contacts">
                </div>
            </div>
            <div class="infoSectionHeader">
                <h1>Contacts</h1>
                <div class="separator"></div>
                <h3>Better with a team</h3>
            </div>
        </div>
    `;

}