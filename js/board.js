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
            <div class="addTaskBtn" onclick="openDialog()">
                Add Task
                <img src="./img/add.svg">
            </div>
            
        </div>
    </header>

    <div id="dialogBoard" class="dialog-bgBoard d-none" onclick="closeDialog()">
                <div class="dialogBoard" onclick="doNotClose(event)">

                </div>
        </div>

        <div class="statusHeader">
            <div class="statusHeadline">
                <h3 class="h3">to do</h3>
                <div class="addTaskHeader" onclick="openDialog()"><img src="img/plusB.svg"></div>
            </div>
            <div class="statusHeadline">
                <h3>In progress</h3>
                <div class="addTaskHeader" onclick="openDialog()"><img src="img/plusB.svg"></div>
            </div>
            <div class="statusHeadline">
                <h3>Await feedback</h3>
                <div class="addTaskHeader" onclick="openDialog()"><img src="img/plusB.svg"></div>
            </div>
            <div class="statusHeadline">
                <h3>Done</h3>
                <div class="addTaskHeader" onclick="openDialog()"><img src="img/plusB.svg"></div>
            </div>
        </div>


        <div class="board">
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

function openDialog(){
    document.getElementById('dialogBoard').classList.remove('d-none')
}

function closeDialog(){
    document.getElementById('dialogBoard').classList.add('d-none')
}

function doNotClose(event){
    event.stopPropagation();
}