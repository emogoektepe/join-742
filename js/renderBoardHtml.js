function renderBoardHtml(){
    return /*html*/`
     <header id="headerContent">
      <div class="headline"><h1>Board</h1></div>
        <div class="headBar">
            <form class="formArea" action="#">
                <input id="searchBoard" class="inputArea"  type="text" placeholder="Find Task">
               <div><img src="./img/borderDash.svg"></div> 
                    <img onclick="updateBoardHtml()" class="searchBoard" src="./img/search.svg">
                </form>
            <div class="addTaskBtn" onclick="openDialog('dialogAddTaskBoard','addTaskWindow')">
                Add Task
                <img src="./img/add.svg">
            </div>
            
        </div>
    </header>

    <div id="dialogAddTaskBoard" class="dialog-bgBoard d-none" onclick="closeDialog('dialogAddTaskBoard','addTaskWindow')">
                <div id="addTaskWindow" style="transform: translateX(200%);" class="dialogAddTaskBoard" onclick="doNotClose(event)">

                </div>
    </div>

    <div id="dialogShowCard" class="dialog-bgBoard d-none" onclick="closeDialog('dialogShowCard','taskOverlay')">

    </div>


        <div class="statusHeader">
            <div class="statusHeadline">
                <h3 class="h3">To do</h3>
                <div class="addTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard')"><img src="img/plusB.svg"></div>
            </div>
            <div class="statusHeadline">
                <h3>In progress</h3>
                <div class="addTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard')"><img src="img/plusB.svg"></div>
            </div>
            <div class="statusHeadline">
                <h3>Await feedback</h3>
                <div class="addTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard')"><img src="img/plusB.svg"></div>
            </div>
            <div class="statusHeadline">
                <h3>Done</h3>
                <div class="addTaskHeader filterBlue" onclick="openDialog('dialogAddTaskBoard')"><img src="img/plusB.svg"></div>
            </div>
        </div>


    <div class="board">

        <div id="todo" ondrop="moveTo('todo')" class="todos" ondragover="allowDrop(event); highlight('todo')" ondragleave="removeHighlight('todo')">
            <div class="noTasks">
                No Tasks to do
            </div>
        </div>

        <div id="inProgress" ondrop="moveTo('inProgress')" class="todos" ondragover="allowDrop(event); highlight('inProgress')" ondragleave="removeHighlight('inProgress')">
            <div class="noTasks">
                No Tasks to do
            </div>
        </div>

        <div id="awaitFeedback" ondrop="moveTo('awaitFeedback')" class="todos" ondragover="allowDrop(event); highlight('awaitFeedback')" ondragleave="removeHighlight('awaitFeedback')">
            <div class="noTasks">
                No Tasks to do
            </div>
        </div>
        <div id="done" class="todos" ondrop="moveTo('done')" ondragover="allowDrop(event); highlight('done')" ondragleave="removeHighlight('done')">
            <div class="noTasks">
                No Tasks to do
            </div>
        </div>
    </div>`

}