/**
 * This function is used to render the help page
 */
function renderHelp() {

    let content = document.getElementById('content');
    let originalText = /*html*/ `

<div class="helpContainer">

    <button class="backButton" onclick="renderSummary()"><img src="../img/arrow-left-line.svg" alt="back"></button>

    <div class="headline">
        <h1 class="helpH1">Help</h1>
    </div>

    <div class="helpText">
        <p class="helpParagraph">Welcome to the help page for Join, your guide to using our kanban project management tool. Here, we'll provide an overview of what Join is, how it can benefit you, and how to use it.</p>
        <h2 class="helpH2">What is Join?</h2>
        <p class="helpParagraph">Join is a kanban-based project management tool designed and built by a group of dedicated students as part of their web development bootcamp at the Developer Akademie.
        Kanban, a Japanese term meaning "billboard", is a highly effective method to visualize work, limit work-in-progress, and maximize efficiency (or flow). Join leverages the principles of kanban to help users manage their tasks and projects in an intuitive, visual interface.
        It is important to note that Join is designed as an educational exercise and is not intended for extensive business usage. While we strive to ensure the best possible user experience, we cannot guarantee consistent availability, reliability, accuracy, or other aspects of quality regarding Join.</p>
        <h2 class="helpH2">How to use it</h2>
        <p class="helpParagraph">Here is a step-by-step guide on how to use Join:</p>

    <div class="paragraphContainer">    
        <div class="paragraph">
            <div class="paragraphNumber">
                1.
            </div>
            <div class="paragraphText">  
                <h3 class="helpH3">Exploring the Board</h3>
                <p class="helpParagraph">When you log in to Join, you'll find a default board. This board represents your project and contains four default lists: "To Do", "In Progress", “Await feedback” and "Done".</p>
            </div>     
        </div>

        <div class="paragraph">
            <div class="paragraphNumber">
                2.
            </div>
            <div class="paragraphText">
                <h3 class="helpH3">Creating Contacts</h3>
                <p class="helpParagraph">In Join, you can add contacts to collaborate on your projects. Go to the "Contacts" section, click on "New contact", and fill in the required information. Once added, these contacts can be assigned tasks and they can interact with the tasks on the board.</p>
            </div>
        </div>

        <div class="paragraph">
            <div class="paragraphNumber">
                3.
            </div>
            <div class="paragraphText">
                <h3 class="helpH3">Adding Cards</h3>
                <p class="helpParagraph">Now that you've added your contacts, you can start adding cards. Cards represent individual tasks. Click the "+" button under the appropriate list to create a new card. Fill in the task details in the card, like task name, description, due date, assignees, etc.</p>
            </div>
        </div>

        <div class="paragraph">
            <div class="paragraphNumber">
                4.
            </div>
            <div class="paragraphText">
                <h3 class="helpH3">Moving Cards</h3>
                <p class="helpParagraph">As the task moves from one stage to another, you can reflect that on the board by dragging and dropping the card from one list to another.</p>
            </div>
        </div>
        
        <div class="paragraph">
            <div class="paragraphNumber">
                5.
            </div>
            <div class="paragraphText">
                <h3 class="helpH3">Deleting Cards</h3>
                <p class="helpParagraph">Once a task is completed, you can either move it to the "Done" list or delete it. Deleting a card will permanently remove it from the board. Please exercise caution when deleting cards, as this action is irreversible.
                Remember that using Join effectively requires consistent updates from you and your team to ensure the board reflects the current state of your project.
                Have more questions about Join? Feel free to contact us at [Your Contact Email]. We're here to help you!</p>
            </div>    
        </div>
    </div>
        <h2 class="helpH2">Enjoy using Join!</h2>
    </div>

</div>
    `;
        // Suchen und ersetzen Sie "Join" im Text durch "Join" mit der gewünschten Farbe.
        let coloredText = originalText.replace(/Join/g, '<span style="color: #29ABE2;">Join</span>');

        content.innerHTML = coloredText;
};