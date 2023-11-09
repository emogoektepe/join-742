function renderBoardHtml(){
    return /*html*/`
    <header class="boardHeaderContent" id="headerContent">
        <div class="boardHeadline">
           <h1>Board</h1> 
        </div>
        <div class="headBar">
            <form class="formArea" action="#">
                <input id="searchBoard" class="inputArea" onkeydown="updateBoardHtml()"  type="text" placeholder="Find Task">
                <div>
                    <img src="./img/borderDash.svg">
                </div> 
                <img onclick="updateBoardHtml()" class="searchBoard" src="./img/search.svg">
            </form>
            <div class="addTaskBtn" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                Add Task
                <img src="./img/add.svg">
            </div>
            <div class="respBtn" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                <img src="./img/responsiveAddButton.svg">
            </div>
            
        </div>

    </header>

    <form class="respFormArea" action="#">
        <input id="searchBoard" class="inputArea" onkeydown="updateBoardHtml()"  type="text" placeholder="Find Task">
        <div>
            <img src="./img/borderDash.svg">
        </div> 
            <img onclick="updateBoardHtml()" class="searchBoard" src="./img/search.svg">
    </form>

    <div id="dialogAddTaskBoard" class="dialog-bgBoard d-none" onclick="closeDialog('dialogAddTaskBoard','addTaskWindow')">
                <div id="addTaskWindow" style="transform: translateX(200%);" class="dialogAddTaskBoard" onclick="doNotClose(event)">

                </div>
    </div>

    <div id="dialogShowCard" class="dialog-bgBoard d-none" onclick="closeDialog('dialogShowCard','taskOverlay')">

    </div>


        <div class="board">
            <div class="todoSection">
                <div class="statusheader">
                    <h3>To do</h3>
                    <div class="addTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                        <img src="img/plusB.svg">
                    </div>
                    <div class="respAddTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                        <img src="./img/responsiveAddPlus.svg">
                    </div>
                </div>
                <div id="todo" ondrop="moveTo('todo')" class="todos" ondragover="allowDrop(event); highlight('todo')" ondragleave="removeHighlight('todo')">
                    <div class="noTasks">
                        No Tasks to do
                    </div>
                </div>
            </div>

            <div class="todoSection">
                <div class="statusheader">
                    <h3>In progress</h3>
                    <div class="addTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                        <img src="img/plusB.svg">
                    </div>
                    <div class="respAddTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                        <img src="./img/responsiveAddPlus.svg">
                    </div>
                </div>
                <div id="inProgress" ondrop="moveTo('inProgress')" class="todos" ondragover="allowDrop(event); highlight('inProgress')" ondragleave="removeHighlight('inProgress')">
                    <div class="noTasks">
                        No Tasks to do
                    </div>
                </div>
            </div>

            <div class="todoSection">
                <div class="statusheader">
                    <h3>Await feedback</h3>
                    <div class="addTaskHeader filterBlue"  onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                        <img src="img/plusB.svg">
                    </div>
                    <div class="respAddTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                        <img src="./img/responsiveAddPlus.svg">
                    </div>
                </div>
                <div id="awaitFeedback" ondrop="moveTo('awaitFeedback')" class="todos" ondragover="allowDrop(event); highlight('awaitFeedback')" ondragleave="removeHighlight('awaitFeedback')">
                    <div class="noTasks">
                        No Tasks to do
                    </div>
                </div>
            </div>

            <div class="todoSection">
                <div class="statusheader">
                    <h3>Done</h3>
                    <div class="addTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                        <img src="img/plusB.svg">
                    </div>
                    <div class="respAddTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                        <img src="./img/responsiveAddPlus.svg">
                    </div>
                </div>
                <div id="done" class="todos" ondrop="moveTo('done')" ondragover="allowDrop(event); highlight('done')" ondragleave="removeHighlight('done')">
                    <div class="noTasks">
                        No Tasks to do
                    </div>
                </div> 
            </div>
        </div>`

}