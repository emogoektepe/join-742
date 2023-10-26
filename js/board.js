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
    let searchingFor = document.getElementById('searchBoard').value
    document.getElementById('todo').innerHTML = '';

    if (todos.length != 0) {
        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            searchingFor.toLowerCase();

            if(todo['title'].includes(searchingFor) || todo['category'].includes(searchingFor) || todo['description'].includes(searchingFor)){
              document.getElementById('todo').innerHTML += `${generateCard(todo,i)} ` 
            }
        }
    } else {
        document.getElementById('todo').innerHTML = `<div class="noTasks">
                                                         No Tasks to do
                                                      </div>` 
    }
}



function renderInProgressContent(){
    document.getElementById('inProgress').innerHTML = '';
    let searchingFor = document.getElementById('searchBoard').value
    let progressTodos = testTodos.filter(p => p['category']== 'inProgress')
    
    if(progressTodos.length != 0){
        for (let i = 0; i < progressTodos.length; i++) {
            const progressTodo = progressTodos[i];
            if(progressTodo['title'].includes(searchingFor) || progressTodo['category'].includes(searchingFor) || progressTodo['description'].includes(searchingFor)){

            document.getElementById('inProgress').innerHTML += `${generateCard(progressTodo,i)}`
            }
        }
    }else{
        document.getElementById('inProgress').innerHTML = `<div class="noTasks">
                                                                No Tasks to do
                                                           </div>` 

    }
}

function renderAwaitFeedbackContent(){
    document.getElementById('awaitFeedback').innerHTML = '';
    let searchingFor = document.getElementById('searchBoard').value
    let feedbackTodos = testTodos.filter(f => f['category']== 'awaitFeedback')

    if(feedbackTodos.length != 0){

        for (let i = 0; i < feedbackTodos.length; i++) {
            const feedbackTodo = feedbackTodos[i];
            if(feedbackTodo['title'].includes(searchingFor) || feedbackTodo['category'].includes(searchingFor) || feedbackTodo['description'].includes(searchingFor)){
            document.getElementById('awaitFeedback').innerHTML += `${generateCard(feedbackTodo,i)}`
            }
        
            }
        }else{
            document.getElementById('awaitFeedback').innerHTML = `<div class="noTasks">
                                                                    No Tasks to do
                                                                  </div>` 
        }
}

function renderDoneContent(){
    document.getElementById('done').innerHTML = '';
    let searchingFor = document.getElementById('searchBoard').value
    let doneTodos = testTodos.filter(d => d['category'] == 'done')

    if (doneTodos.length != 0) {
        for (let i = 0; i < doneTodos.length; i++) {
            const doneTodo = doneTodos[i];
            if(doneTodo['title'].includes(searchingFor) || doneTodo['category'].includes(searchingFor) || doneTodo['description'].includes(searchingFor)){
                document.getElementById('done').innerHTML += `${generateCard(doneTodo,i)}`
            }
        }
    } else {
        document.getElementById('done').innerHTML = `<div class="noTasks">
                                                                    No Tasks to do
                                                               </div>` 
    }
    
    
}

function renderBoard() {
 

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <header id="headerContent">
      <div class="headline"><h1>Board</h1></div>
        <div class="headBar">
            <form class="formArea" action="false">
                <input onkeydown="updateBoardHtml()" id="searchBoard" class="inputArea" type="text" placeholder="Find Task">
               <div><img src="./img/borderDash.svg"></div> 
                    <img class="searchBoard" src="./img/search.svg">
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

    <div id="dialogShowCard" class="dialog-bgBoard d-none" onclick="closeDialog('dialogShowCard')"></div>


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
    </div>
    `;
    setActiveNav("board"); //für Navbar
    updateBoardHtml()

}

function highlight(id){
    document.getElementById(id).classList.add('dragAreaHighlight')
}

function removeHighlight(id){
    document.getElementById(id).classList.remove('dragAreaHighlight')
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

function generateCard(todo,i){

    return /*html*/`

    <div class="card"  ondragstart="startDragging(${todo['id']})">
        <div onclick="generateTaskOverlay(${i}); openDialog('dialogShowCard')">
            <div draggable="true" class="cardContent">
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

function generateTaskOverlay(i){

    document.getElementById('dialogShowCard').innerHTML =  /*html*/ `
    
    
    <div class="dialogShowCard" onclick="doNotClose(event)">
    
        <div class="cardHead">
           <p class="category">Category</p> 
            <img onclick="closeDialog('dialogShowCard')" class="editCard" src="img/close.svg">
        </div>
        <h1 class="headline">${testTodos[i]['title']}</h1>
        <span>
            <p>${testTodos[i]['description']}</p>
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
            

    </div>`
}