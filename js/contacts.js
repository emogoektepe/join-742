function renderContacts() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
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
    `;

}