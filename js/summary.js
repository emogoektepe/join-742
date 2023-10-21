function renderSummary() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `

        <section class="summaryHeader" >
            <h1>Join 360</h1>
            <div class="separatorHeader"></div>
            <h3>Key Metrics at a Glance</h3>
        </section>

        <section class="summaryContainer">
            <div class="summaryLeftSide">
                <div class="firstRow">
                    <div class="toDo">
                        <div class="toDoLeft">
                            <img class="summaryIcons" src="../img/summaryPencil.svg" alt="">
                        </div>
                        <div class="toDoRight">
                            <span class="taskNumber">1</span>
                            <span class="taskText">To-do</span>
                        </div>
                    </div>
                    <div class="done">
                        <div class="doneLeft">
                            <img class="summaryIcons" src="../img/summaryCheck.svg" alt="">
                        </div>
                        <div class="doneRight">
                            <span class="taskNumber">1</span>
                            <span class="taskText">Done</span>
                        </div>
                    </div>
                </div>
                <div class="secondRow">
                    <div class="urgent">
                        <img src="../img/summaryUrgent.svg" alt="">
                        <div class="separatorUrgent"></div>
                        <div class="calendar">
                            <span class="calendarDate">Oktober 16, 2022</span>
                            <span class="calendarEvent">Upcoming Deadline</span>
                        </div>
                    </div>
                </div>
                <div class="thirdRow">
                    <div class="tasksInBoard">
                        <span class="taskNumber">5</span>
                        <span class="taskText">Tasks in Board</span>
                    </div>
                    <div class="tasksInProgress">
                        <span class="taskNumber">2</span>
                        <span class="taskText">Tasks in Progress</span>
                    </div>
                    <div class="awaitingFeedback">
                        <span class="taskNumber">2</span>
                        <span class="taskText">Awaiting Feedback</span>
                    </div>
                </div>
            </div>

            <div class="summaryRightSide">
                <div class="greetingsBox">
                    <h2>Good morning,</h2>
                    <span>Sofia Müller</span>
                </div>
            </div>
            
        </section>
    
    `;

    setActiveNav("summary"); //für navbar
}
// Funktion, um ein anklickbares Element zu markieren
function setActiveNav(activeId) {
    const navItems = document.querySelectorAll(".navItems div");
    navItems.forEach(item => {
        if (item.id === activeId) {
            item.style.backgroundColor = "#4a5878";
        } else {
            item.style.backgroundColor = ""; // Setzt die Hintergrundfarbe zurück
        }
    });
}