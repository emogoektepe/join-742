/**
 * This function renders the content of the summary 
 */
function renderSummary() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `

    <div class="summaryContent">
        
        <section class="summaryHeader" >
            <h1>Join 360</h1>
            <div class="separatorHeader"></div>
            <h3>Key Metrics at a Glance</h3>
        </section>

        <section class="summaryContainer">
            <div class="summaryLeftSide">
                <div class="firstRow">
                    <div class="toDo" onclick="renderBoard()">
                        <div class="toDoLeft">
                            <img class="summaryIcons" src="../img/summaryPencil.svg" alt="">
                        </div>
                        <div class="toDoRight">
                            <span id="toDoNumber" class="taskNumber"></span>
                            <span class="taskText">To-do</span>
                        </div>
                    </div>
                    <div class="done" onclick="renderBoard()">
                        <div class="doneLeft">
                            <img class="summaryIcons" src="../img/summaryCheck.svg" alt="">
                        </div>
                        <div class="doneRight">
                            <span id="doneNumber" class="taskNumber"></span>
                            <span class="taskText">Done</span>
                        </div>
                    </div>
                </div>
                <div class="secondRow">
                    <div class="urgent" onclick="renderBoard()">
                        <div class="urgentLeft">
                            <div class="urgentImg">
                                <img src="../img/summaryUrgent.svg" alt="">
                            </div>
                            <div class="urgentCount"> 
                                <span id="urgentNumber" class="urgentNumber"></span>
                                <span class="urgentText">Urgent</span>
                            </div>
                        </div>
                        <div class="separatorUrgent"></div>
                        <div class="calendar">
                            <span class="calendarDate">Oktober 16, 2022</span>
                            <span class="calendarEvent">Upcoming Deadline</span>
                        </div>
                    </div>
                </div>
                <div class="thirdRow">
                    <div class="tasksInBoard" onclick="renderBoard()">
                        <span id="TasksInBoardNumber" class="taskNumber"></span>
                        <span class="taskText">Tasks in Board</span>
                    </div>
                    <div class="tasksInProgress" onclick="renderBoard()">
                        <span id="TasksInProgressNumber" class="taskNumber"></span>
                        <span class="taskText">Tasks in Progress</span>
                    </div>
                    <div class="awaitingFeedback" onclick="renderBoard()">
                        <span id="awaitingFeedbackNumber" class="taskNumber"></span>
                        <span class="taskText">Awaiting Feedback</span>
                    </div>
                </div>
            </div>

            <div class="summaryRightSide">
                <div class="greetingsBox">
                    <h2 id="greetingMessage" class="greetingMessage"></h2>
                    <span id="currentUserName" class="userName"></span>
                </div>
            </div>
            
        </section>
    </div>
    <div id="mobileGreetingBox" class="mobileGreetingBox">
        <h2 id="mobileGreetingMessage" class="greetingMessage"></h2>
        <span id="mobileCurrentUserName" class="userName"></span>
    </div>

    `;
    setActiveNavItem("summary");
    renderGreetingMessage();
    updateSummaryNumbers();
    renderInitials();
}

/**
 * This function is utilized to display the amount of different tasks in their category
 */
function updateSummaryNumbers() {
    const toDoNumber = allTasks.filter(item => item.status === 'todo').length;
    const doneNumber = allTasks.filter(item => item.status === 'done').length;
    const urgentNumber = allTasks.filter(item => item.prio === 'urgent').length;
    const TasksInBoardNumber = allTasks.length;
    const TasksInProgressNumber = allTasks.filter(item => item.status === 'inProgress').length;
    const awaitingFeedbackNumber = allTasks.filter(item => item.status === 'awaitFeedback').length;

    document.getElementById('toDoNumber').innerText = toDoNumber;
    document.getElementById('doneNumber').innerText = doneNumber;
    document.getElementById('urgentNumber').innerText = urgentNumber;
    document.getElementById('TasksInBoardNumber').innerText = TasksInBoardNumber;
    document.getElementById('TasksInProgressNumber').innerText = TasksInProgressNumber;
    document.getElementById('awaitingFeedbackNumber').innerText = awaitingFeedbackNumber;
}