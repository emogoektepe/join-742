 let testTodos = [{  'id': 0,
                     'title': 'Build Drag and Drop',
                     'category': 'todo',
                     'description': 'using turtorial an js to build it'
                    },
                    {  'id': 1,
                     'title': 'Set variables',
                     'category': 'inProgress',
                     'description': 'gets the Html Code dynamic'
                    },
                    {  'id': 2,
                    'title': 'Ready CV',
                    'category': 'awaitFeedback',
                    'description':'write a CV an import projects'
                    },
                    { 'id': 3,
                    'title': 'layout',
                    'category': 'done',
                    'description': 'use CSS to build a layout for the Project'
                    }
        

        
        
        ]

let currentDraggedElement;

/**
 * render Board content
 */

function updateBoardHtml(){
    
    renderTodoContent();
    renderInProgressContent();
    renderAwaitFeedbackContent();
    renderDoneContent();
}

function renderTodoContent(){
    let todos = testTodos.filter(t => t['category']== 'todo');

    document.getElementById('todo').innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
          document.getElementById('todo').innerHTML += `${generateCard(todo)} ` 
    }
}

function renderInProgressContent(){
    document.getElementById('inProgress').innerHTML = '';

    let progressTodos = testTodos.filter(p => p['category']== 'inProgress')

    for (let i = 0; i < progressTodos.length; i++) {
        const progressTodo = progressTodos[i];

        document.getElementById('inProgress').innerHTML += `${generateCard(progressTodo)}`;
    }
}

function renderAwaitFeedbackContent(){
    document.getElementById('awaitFeedback').innerHTML = '';

    let feedbackTodos = testTodos.filter(f => f['category']== 'awaitFeedback')

    for (let i = 0; i < feedbackTodos.length; i++) {
        const feedbackTodo = feedbackTodos[i];

        document.getElementById('awaitFeedback').innerHTML += `${generateCard(feedbackTodo)}`
   
    }
}

function renderDoneContent(){
    document.getElementById('done').innerHTML = '';

    let doneTodos = testTodos.filter(d => d['category'] == 'done')

    for (let i = 0; i < doneTodos.length; i++) {
        const doneTodo = doneTodos[i];
        
        document.getElementById('done').innerHTML += `${generateCard(doneTodo)}`
    }
    
}

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
                    <h1 class="headline">${testTodos[0]['title']}</h1>
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

        <div id="todo" ondrop="moveTo('todo')"ondragover="allowDrop(event)" class="todos">
            <div class="noTasks">
                No Tasks to do
            </div>
        </div>

        <div id="inProgress" ondrop="moveTo('inProgress')" class="todos" ondragover="allowDrop(event)">
            <div class="noTasks">
                No Tasks to do
            </div>
        </div>

        <div id="awaitFeedback" ondrop="moveTo('awaitFeedback')" class="todos" ondragover="allowDrop(event)">
            <div class="noTasks">
                No Tasks to do
            </div>
        </div>
        <div id="done" class="todos" ondrop="moveTo('done')" ondragover="allowDrop(event)">
            <div class="noTasks">
                No Tasks to do
            </div>
        </div>
    </div>
    `;
    setActiveNav("board"); //für Navbar
    updateBoardHtml()

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

function startDragging(id){

    currentDraggedElement = id;

}

function allowDrop(ev) {
    ev.preventDefault();
  }

function moveTo(category){
    testTodos[currentDraggedElement]['category'] = category
    renderBoard()

}

function generateCard(todo){

return /*html*/`

<div class="card" draggable="true" ondragstart="startDragging(${todo['id']})">
    <div onclick="openDialog('dialogShowCard')">
        <div class="cardContent">
            <div class="category">
                Category
            </div>
            <h4>${todo['title']}</h4>
            <p>${todo['description']}</p>

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
</div>`


}

