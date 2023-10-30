/* let testTodos = [{  'id': 0,
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
        
]*/



let task = [{   'id': 0,
                'status': 'todo',
                'title': 'Build Drag and Drop',
                'description': 'using turtorial an js to build it',
                'assignedTo' : ['Emre Göktepe', 'Simon Brsot', 'Johannes Braun'],
                'dueDate': 14.05,
                'prio': ['urgent','<img src="img/prioUp.svg">'], 
                'category': ['User Stroy'],
                'subtasks': ['Aufgabe1', 'Aufgabe2']},
                
                {'id': 1,
                'status': 'todo',
                'title': 'Set variables',
                'description': 'gets the Html Code dynamic',
                'assignedTo' : ['Simon Brsot', 'Johannes Braun'],
                'dueDate': 15.05,
                'prio':['medium','<img src="img/prioMid.svg">'], 
                'category': 'User Stroy',
                'subtasks': ['Aufgabe1', 'Aufgabe2']},
                
                {'id': 2,
                'status': 'todo',
                'title': 'Ready CV',
                'description': 'write a CV an import projects',
                'assignedTo' : ['Emre Göktepe', 'Simon Brsot',],
                'dueDate': 16.05,
                'prio': ['low','<img src="img/prioLow.svg">'], 
                'category': 'User Stroy',
                'subtasks': ['Aufgabe1', 'Aufgabe2']},

                {'id': 3,
                'status': 'todo',
                'title': 'layout',
                'description': 'use CSS to build a layout for the Project',
                'assignedTo' : ['Emre Göktepe', 'Johannes Braun'],
                'dueDate': 17.05,
                'prio': ['urgent','<img src="img/prioUp.svg">'], 
                'category': 'User Stroy',
                'subtasks': ['Aufgabe1', 'Aufgabe2']}
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
    let todos = task.filter(t => t['status']== 'todo');
    let searchingFor = document.getElementById('searchBoard').value
    document.getElementById('todo').innerHTML = '';

    if (todos.length != 0) {
        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            searchingFor.toLowerCase(); 
            shouldRender(todo,searchingFor,i);
        }
    } else{
        document.getElementById('todo').innerHTML = `${renderEmptyCategory()}`
    } 
}

function renderInProgressContent(){
    let progressTodos = task.filter(p => p['status']== 'inProgress');
    let searchingFor = document.getElementById('searchBoard').value
    document.getElementById('inProgress').innerHTML = '';
    
    if(progressTodos.length != 0){
        for (let i = 0; i < progressTodos.length; i++) {
            const progressTodo = progressTodos[i];
            searchingFor.toLowerCase();

            shouldRender(progressTodo,searchingFor,i);
        }
    }else{
        document.getElementById('inProgress').innerHTML = `${renderEmptyCategory()}`
    }
}

function renderAwaitFeedbackContent(){
    let feedbackTodos = task.filter(f => f['status']== 'awaitFeedback')
    document.getElementById('awaitFeedback').innerHTML = '';
    let searchingFor = document.getElementById('searchBoard').value


    if(feedbackTodos.length != 0){

        for (let i = 0; i < feedbackTodos.length; i++) {
            const feedbackTodo = feedbackTodos[i];
        
                shouldRender(feedbackTodo,searchingFor,i);
            }
    } else{
        document.getElementById('awaitFeedback').innerHTML = `${renderEmptyCategory()}`
    }
}

function renderDoneContent(){
    let doneTodos = task.filter(d => d['status'] == 'done')
    document.getElementById('done').innerHTML = '';
    let searchingFor = document.getElementById('searchBoard').value
    
    if (doneTodos.length != 0) {
        for (let i = 0; i < doneTodos.length; i++) {
            const doneTodo = doneTodos[i];
            shouldRender(doneTodo,searchingFor,i);
        }
    }else{
        document.getElementById('done').innerHTML = `${renderEmptyCategory()}`
    } 
}

function renderEmptyCategory(){
  return /*html*/`<div class="noTasks">No Tasks to do</div>` 
}

function shouldRender(todo,searchingFor,i){

    let shouldRender = todo['title'].includes(searchingFor) || todo['category'].includes(searchingFor) || todo['description'].includes(searchingFor);
    shouldRender ? `${renderCardHtml(todo, i)} ` : ``
}

function renderBoard() {
 
    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `${renderBoardHtml()}`;
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
    task[currentDraggedElement]['status'] = category
    renderBoard()
}

function rotateCard(id){

   document.getElementById(id).classList.remove('card');
    document.getElementById(id).classList.add('rotateCard');

}

function renderAssignedTo(i,idOfContainer){

    let assigned = task[i]['assignedTo']

    for (let j = 0; j < assigned.length; j++) {
        const fullname = assigned[j]

        let names = fullname.split(" ")
        
        let firstNameCharacter = names[0].charAt(0)
        let secondNameCharacter = names[1].charAt(0)

        document.getElementById(idOfContainer).innerHTML += /*html*/`
        <div class="assignedContact">
            <div class="avatar">${firstNameCharacter}${secondNameCharacter}</div> ${fullname}
        </div>`
    }
}

function renderCardAssignedTo(idOfContainer,todo){

    let assigned = todo['assignedTo']

    for (let j = 0; j < assigned.length; j++) {
        const fullname = assigned[j]

        let names = fullname.split(" ")
        
        let firstNameCharacter = names[0].charAt(0)
        let secondNameCharacter = names[1].charAt(0)

        document.getElementById(idOfContainer).innerHTML += /*html*/`
        <div class="assignedContact">
            <div class="avatar">${firstNameCharacter}${secondNameCharacter}</div> 
        </div>`
    }
}



