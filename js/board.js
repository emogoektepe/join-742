let TASK_Template = [{   'id': '',
                'status': 'todo',
                'title': 'Build Drag and Drop',
                'description': 'using turtorial an js to build it',
                'assignedTo' : ['Johannes Braun','Emre','Simon','Jo'],
                'dueDate': 14.05,
                'prio': 'urgent',
                'category': 'User Story',
                'subtasks': [],
               },
                
                {'id': '',
                'status': 'todo',
                'title': 'Set variables',
                'description': 'gets the Html Code dynamic',
                'assignedTo' : ['Emre','Simon'],
                'dueDate': 15.05,
                'prio':'medium',
                'category': 'Technical Task',
                'subtasks': [{'name':'Aufgabe 1','done':false},{'name':'Aufgabe 2','done':false},{'name':'Aufgabe 3','done':false}],
                },
                
                {'id': '',
                'status': 'todo',
                'title': 'Ready CV',
                'description': 'write a CV an import projects',
                'assignedTo' : ['Emre','Jo'],
                'dueDate': 16.05,
                'prio': 'low', 
                'category': 'User Story',
                'subtasks': [{'name':'Aufgabe 1','done':false},{'name':'Aufgabe 2','done':false}],
                },

                {'id': '',
                'status': 'todo',
                'title': 'Layout',
                'description': 'use CSS to build a layout for the Project',
                'assignedTo' :['Simon','Jo'],
                'dueDate': 17.05,
                'prio': 'urgent',
                'category': 'Technical Task',
                'subtasks': [{'name':'Aufgabe 1','done':false}],
                }
]

let task = TASK_Template
let todo = []
let inProgress = []
let awaitFeedback = []
let done = []
let currentDraggedElement;

/**
 * render Board content
 */

load();

function renderBoard() {
 
    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `${renderBoardHtml()}`;
    generateIDs();
    setActiveNav("board"); //für Navbar
    filter();
    updateBoardHtml();

}

function generateIDs(){
    for (let x = 0; x < task.length; x++) {
        const tsk = task[x];

        tsk['id'] = x
        save();  
    }
}

function updateBoardHtml(){
    
    renderTodoContent();
    renderInProgressContent();
    renderAwaitFeedbackContent();
    renderDoneContent();
    save();
}

function filter(){
    todo = task.filter(t => t['status']== 'todo');
    inProgress = task.filter(p => p['status']== 'inProgress');
    awaitFeedback = task.filter(f => f['status']== 'awaitFeedback')
    done = task.filter(d => d['status'] == 'done')
}

function renderTodoContent(){
    let searchingFor = document.getElementById('searchBoard').value
    let array = 'todo'
    document.getElementById('todo').innerHTML = '';

    if (todo.length != 0) {
        for (let i = 0; i < todo.length; i++) {
            const todos = todo[i];
            searchTask(todos,searchingFor,array,i)
        }
    } else{
        document.getElementById('todo').innerHTML = `${renderEmptyCategory()}`
    } 
}

function renderInProgressContent(){
    let searchingFor = document.getElementById('searchBoard').value
    let array = 'inProgress'
    document.getElementById('inProgress').innerHTML = '';
    
    if(inProgress.length != 0){
        for (let i = 0; i < inProgress.length; i++) {
            const progressTodo = inProgress[i];
            searchTask(progressTodo,searchingFor,array,i)
        }
    }else{
        document.getElementById('inProgress').innerHTML = `${renderEmptyCategory()}`
    }
}

function renderAwaitFeedbackContent(){
    let searchingFor = document.getElementById('searchBoard').value
    let array = 'awaitFeedback'
    document.getElementById('awaitFeedback').innerHTML = '';

    if(awaitFeedback.length != 0){

        for (let i = 0; i < awaitFeedback.length; i++) {
            const feedbackTodo = awaitFeedback[i];
            searchTask(feedbackTodo,searchingFor,array,i)
            }
    } else{
        document.getElementById('awaitFeedback').innerHTML = `${renderEmptyCategory()}`
    }
}

function renderDoneContent(){
    let searchingFor = document.getElementById('searchBoard').value
    let array = 'done'
    document.getElementById('done').innerHTML = '';
    
    if (done.length != 0) {
        for (let i = 0; i < done.length; i++) {
            const doneTodo = done[i];
            searchTask(doneTodo,searchingFor,array,i)
        }
    }else{
        document.getElementById('done').innerHTML = `${renderEmptyCategory()}`
    } 
}

function renderEmptyCategory(){
  return /*html*/`<div class="noTasks">No Tasks to do</div>` 
}


function searchTask(todo,searchingFor,array,i){
    searchingFor.toLowerCase();

    if (
        todo.title.toLowerCase().includes(searchingFor) || 
        todo.description.toLowerCase().includes(searchingFor) ||
        todo.assignedTo.some(name => name.toString().toLowerCase().includes(searchingFor)) ||
        todo.dueDate.toString().includes(searchingFor) ||
        todo.prio.some(value => value.toLowerCase().includes(searchingFor)) ||
        todo.category.toString().toLowerCase().includes(searchingFor) ||
        todo.subtasks.some(subtask => subtask.name.toLowerCase().includes(searchingFor))
    ){
        renderCardHtml(todo,array,i)
    }
}

function slideIn(idOfSlideConti){

    setTimeout( () => {
        document.getElementById(idOfSlideConti).style = 'transform: translateX(0%)';
    },5)
    
}

function slideOut(idOfSlideConti){
    document.getElementById(idOfSlideConti).style = 'transform: translateX(200%)';
}

function highlight(id){
    document.getElementById(id).classList.add('dragAreaHighlight')
}

function removeHighlight(id){
    document.getElementById(id).classList.remove('dragAreaHighlight')
}


function openDialog(id,idOfSlideConti){
    document.getElementById(id).classList.remove('d-none');
    slideIn(idOfSlideConti);
}

function closeDialog(id,idOfSlideConti){
    setTimeout(()=> {
        document.getElementById(id).classList.add('d-none')
    }, 225)
    slideOut(idOfSlideConti);
    updateBoardHtml();
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
    save();
    renderBoard();
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
        if(names.length > 1){
            let secondNameCharacter = names[1].charAt(0)
            document.getElementById(idOfContainer).innerHTML += /*html*/`
            <div class="assignedContact">
                <div id="assignedContact${j}" class="avatar">${firstNameCharacter}${secondNameCharacter}</div>${fullname}
            </div>`
            renderCardContacts(fullname,`assignedContact${j}`);
        }else{
            document.getElementById(idOfContainer).innerHTML += /*html*/`
            <div class="assignedContact">
                <div id="assignedContact${j}" class="avatar">${firstNameCharacter}</div>${fullname}
            </div>`
            renderCardContacts(fullname,`assignedContact${j}`);
        }
    }
}


function renderCardContacts(name,idName){

    for (let i = 0; i < contactsJson.length; i++) {
        const color = ["#ff7a00", "#ff5eb3", "#6e52ff", "#9327ff", "#00bee8", "#1fd7c1", "#ff745e", "#ffa35e", "#fc71ff", "#ffc701", "#0038ff", "#c3ff2b", "#ffe62b", "#ff4646", "#ffbb2b"];
        i = i % color.length;
        const avatarBg = color[i]
        contactColorsMap.set(contactsJson[i].fullName, avatarBg);
    }

    let bgColor = contactColorsMap.get(name)

    document.getElementById(idName).style.backgroundColor = `${bgColor}`
    
}

function renderCardAssignedTo(idOfContainer,todo){
    let assigned = todo['assignedTo']
    let id = todo['id']

    for (let j = 0; j < assigned.length; j++) {
        const fullname = assigned[j]
        let names = fullname.split(" ")
        let firstNameCharacter = names[0].charAt(0)
        if(names.length > 1){
            let secondNameCharacter = names[1].charAt(0)
            document.getElementById(idOfContainer).innerHTML += /*html*/`
            <div class="assignedContact">
                <div id="avatar${id}pic${j}" class="avatar">${firstNameCharacter}${secondNameCharacter}</div> 
            </div>`
            renderCardContacts(fullname,`avatar${id}pic${j}`);
        }else{
            document.getElementById(idOfContainer).innerHTML += /*html*/`
            <div class="assignedContact">
                <div id="avatar${id}pic${j}" class="avatar">${firstNameCharacter}</div> 
            </div>`
            renderCardContacts(fullname,`avatar${id}pic${j}`);
        }
    }    
}

function renderSubtasks(array,i){
    let subtasks = array[i]['subtasks']
    let id = array[i]['id']


    if(subtasks.length == 0){
        document.getElementById(`subHeadline${i}`).classList.add('d-none')}
    
    else{

        for (let k = 0; k < subtasks.length; k++) {
        const subtask = subtasks[k];
        
        if(subtask['done'] == false){
        document.getElementById(`subtask${id}`).innerHTML += /*html*/` 
        <div id="box${id,k}" class="subConti">
            <div class="checkBg">
                <img onclick="checkBox(${id},${k})" class="notChecked" src="img/checkButton.svg">
            </div>
            ${subtask['name']}
        </div>`}
        else{
            document.getElementById(`subtask${id}`).innerHTML += /*html*/` 
            <div id="box${id,k}" class="subConti">
                <div class="checkBg"><img onclick="checkBox(${id},${k})" src="img/boxChecked.svg"></div>
                ${subtask['name']}
            </div>`
        }
    }


    }
}

function checkBox(id,k){

    let subtask = task[id]['subtasks'][k]

    subtask['done'] = !subtask['done']
    save();
    changeBox(subtask,id,k);
}
 

function changeBox(subtask,id,k){

    if(subtask['done']){
        document.getElementById(`box${id,k}`).innerHTML = /*html*/ `
        <div class="checkBg">
            <img onclick="checkBox(${id},${k})" src="img/boxChecked.svg">
        </div>
        ${subtask['name']}`  
    } else {
        document.getElementById(`box${id,k}`).innerHTML = /*html*/ `
            <div class="checkBg">
                <img class="notChecked" onclick="checkBox(${id},${k})" src="img/checkButton.svg">
            </div>    
            ${subtask['name']} `
    }
    updateBoardHtml();
}    

function renderCategory(category,id){

    switch (category) {
        case 'User Story':
        document.getElementById(id).style.backgroundColor = `#0938ff`
        break;
    
        case 'Technical Task': 
        document.getElementById(id).style.backgroundColor = `#1ed7c1`
        break;
    }
}

function renderPrio(prio,id,array,i){

    let img, string;

    switch (prio) {
        case 'low':
            string = array[i]['prio']
            img = '<img src="img/prioLow.svg"></img>'
            break;
        
        case 'medium': 
            string = array[i]['prio']
            img = '<img src="img/prioMid.svg"></img>'
            break;

        case 'urgent':
            string = array[i]['prio']
            img = '<img src="img/prioUp.svg"></img>'
            break;
    }
    document.getElementById(id).innerHTML = `${string} ${img}` 
}

function renderCardPrio(prio,id){

    let img;

    switch (prio) {
        case 'low':
            img = '<img src="img/prioLow.svg"></img>'
            break;
        
        case 'medium': 
            img = '<img src="img/prioMid.svg"></img>'
            break;

        case 'urgent':
            img = '<img src="img/prioUp.svg"></img>'
            break;
    }
    document.getElementById(id).innerHTML = `${img}` 
}

function renderProgressbar(todo,id){

    let subtasks = todo['subtasks']
    let readySubtask = 0

    for (let l = 0; l < subtasks.length; l++) {
        let SbTask = subtasks[l]
        SbTask['done']? readySubtask++ : ''
    }
 
    let percent = subtasks.length / readySubtask 
    result = 100 / percent

    if(subtasks.length > 0){
        document.getElementById(`progressBar${id}`).innerHTML = /*html*/`
        <progress id="file" max="100" value="${result}"></progress>
        ${readySubtask}/${todo['subtasks'].length} Subtasks`
    }
}

function deleteTask(id){
    task.splice(id,1);
    renderBoard();
}


//test functions

function save(){
    let taskAsString = JSON.stringify(task)
    localStorage.setItem('task',taskAsString);
}

function load(){
    let taskAsString = localStorage.getItem('task')
    if(taskAsString){
        task = JSON.parse(taskAsString)
    }else(TASK_Template)
}




