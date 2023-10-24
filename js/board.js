function renderBoard() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <header id="headerContent">
      <div class="headline"><h1>Board</h1></div>
        <div class="headBar">
            <form class="formArea">
                <input class="inputArea" type="text"  placeholder="Find Task">
               <div><img src="./img/borderDash.svg"></div> 
                <button class="buttonBoard"><img class="searchBoard" src="./img/search.svg"></button> 
                </form>
            <div class="addTaskBtn" onclick="openDialog('dialogAddTaskBoard')">
                Add Task
                <img src="./img/add.svg">
            </div>
            
        </div>
    </header>

    <div id="dialogAddTaskBoard" class="dialog-bgBoard d-none" onclick="closeDialog('dialogAddTaskBoard')">
                <div class="dialogAddTaskBoard" onclick="doNotClose(event)">

                </div>
    </div>

    <div id="dialogShowCard" class="dialog-bgBoard d-none" onclick="closeDialog('dialogShowCard')">
                <div class="dialogShowCard" onclick="doNotClose(event)">
                
                    <div class="cardHead">
                       <p class="category">Category</p> 
                        <img onclick="closeDialog('dialogShowCard')" class="editCard" src="img/close.svg">
                    </div>
                    <h1 class="headline">This is a really big title</h1>
                    <span>
                        <p>Here comes the description of this Card</p>
                    </span>
                   
                    <div class="dueDate"> 
                        <span class="grey">Due date:</span>
                        <span>DD/MM/YYYY</span>
                    </div>
      
        
                        
                    <div class="dueDate">
                       <span class="grey">Priority: </span>  
                        <div class="cardPrio">Medium <img src="img/prio.svg"></div>
                     </div>
                       
                       <p class="grey">Assigned to:</p> 
                    <div class="cardContact">
                        <img src="img/ellipse0.svg">Emmanuel Bauer
                    </div>
                    <div class="cardContact">
                        <img src="img/ellipse1.svg">    Marcel Bauer   
                    </div>
                                 
                    <h3>Subtasks</h3>
                    <div class="subtask">
                        <div><img class="checkIcon" src="img/checked.svg"></div>The first Subtask
                    </div>
                    <div class="subtask">
                        <div><img class="notCheckedIcon" src="img/notChecked.svg"></div>The second Subtask
                    </div>
                        
                    <div class="closeSection">
                        <div class="closeSectionItem filterBlue">Delete <img src="./img/delete.svg"></div>  
                        <div class="closeSectionItem filterBlue">Edit <img src="./img/edit.svg"></div>    
                    </div>
                        

                </div>
    </div>


        <div class="statusHeader">
            <div class="statusHeadline">
                <h3 class="h3">to do</h3>
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
            <div class="todos">
                <div onclick="openDialog('dialogShowCard')" class="card" draggable="true" class="todos">
                    <div class="cardContent">
                        <div class="category">
                            Category
                        </div>
                        <h4>This is a the Title</h4>
                        <p>Here comes the description of this Card</p>

                        <div class="progressBar">
                            <progress id="file" max="100" value="50"></progress>
                            1/2 Subtasks
                        </div>
                        <div class="endSection">
                            <div class="avatars">
                                <img src="img/ellipse0.svg">
                                <img src="img/ellipse1.svg">
                                <img src="img/ellipse2.svg">
                            </div>
                            <div>
                                <img src="img/prio.svg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="todos">
                <div class="card" draggable="true" class="todos">
                    <div class="cardContent">
                        <div class="category">
                            Category
                        </div>
                        <h4>This is a the Title</h4>
                        <p>Here comes the description of this Card</p>

                        <div class="progressBar">
                            <progress id="file" max="100" value="50"></progress>
                            1/2 Subtasks
                        </div>
                        <div class="endSection">
                            <div class="avatars">
                                <img src="img/ellipse0.svg">
                                <img src="img/ellipse1.svg">
                                <img src="img/ellipse2.svg">
                            </div>
                            <div>
                                <img src="img/prio.svg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="todos">
                <div class="noTasks">
                    No Tasks to do
                </div>
            </div>
            <div class="todos">
                <div class="noTasks">
                    No Tasks to do
                </div>
            </div>
        </div>
    `;
    setActiveNav("board"); //für Navbar
}

function openDialog(id){
    document.getElementById(id).classList.remove('d-none')
}

function closeDialog(id){
    document.getElementById(id).classList.add('d-none')
}

function doNotClose(event){
    event.stopPropagation();
}