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
 * loads and renders the content of the Board
 * 
 */
function renderBoard() {
    load();
    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `${renderBoardHtml()}`;
    generateIDs();
    setActiveNavItem("board");
    filterTodos();
    updateBoardHtml();

}

/**
 * generates id's for the task array 
 * 
 */
function generateIDs(){
   
    for (let x = 0; x < task.length; x++){
        const tsk = task[x];
        tsk['id'] = x
        save();  
    }
}
/**
 * upadtes the Content of the Board
 * 
 */
function updateBoardHtml(){
    
    renderTodoContent();
    renderInProgressContent();
    renderAwaitFeedbackContent();
    renderDoneContent();
    save();
}
/**
 * filters the tasks into the individually arrays
 * 
 */
function filterTodos(){
    todo = task.filter(t => t['status']== 'todo');
    inProgress = task.filter(p => p['status']== 'inProgress');
    awaitFeedback = task.filter(f => f['status']== 'awaitFeedback');
    done = task.filter(d => d['status'] == 'done');
}
/**
 * renders the todos with the status "todo" into the array 'todo' 
 * 
 */
function renderTodoContent(){
    let statusArray = todo;
    let array = 'todo'
    renderStatusArray(statusArray,array);
}
/**
 * renders the acccordingly content into the indivudually array
 * @param {Object} statusArray 
 * @param {string} array 
 */
function renderStatusArray(statusArray, array) {
    
    let foundMatchingElement = false;
    document.getElementById(array).innerHTML = '';

    if (statusArray.length !== 0) {
        for (let i = 0; i < statusArray.length; i++) {
            const todo = statusArray[i];
            if (searchTask(todo, array, i)) {
                foundMatchingElement = true;
            }
        }
    }
    emptyCategory(foundMatchingElement,array)
}
/**
 * renders the todos with the status "inProgress" into the array 'inProgress' 
 * 
 */
function renderInProgressContent(){
    let statusArray = inProgress
    let array = 'inProgress'
    renderStatusArray(statusArray,array);
}
/**
 * renders the todos with the status "awaitFeedback" into the array 'awaitFeedback' 
 * 
 */
function renderAwaitFeedbackContent(){
    let statusArray = awaitFeedback
    let array = 'awaitFeedback'
    renderStatusArray(statusArray,array);
}
/**
 * renders the todos with the status "done" into the array 'done' 
 * 
 */
function renderDoneContent(){
    let statusArray = done
    let array = 'done'
    renderStatusArray(statusArray,array);
}
/**
 * @returns the HTML if the filter array is empty
 */
function renderEmptyCategory(){
  return /*html*/`<div class="noTasks">No Tasks to do</div>` 
}
/**
 * renders the accordingly content if the boolean is true
 * @param {Boolean} foundMatchingElement 
 * @param {string} array 
 */
function emptyCategory(foundMatchingElement,array){
    if (!foundMatchingElement) {
        document.getElementById(array).innerHTML = renderEmptyCategory();
    }
}

/**
 * searchs for the value of the input field and renders the accordingly content
 * @param {Object} todo 
 * @param {string} serachCommand 
 * @param {Object} array 
 * @param {integer} i 
 */
function searchTask(todo, array, i) {
    let searchingFor = document.getElementById('searchBoard').value;
    let responsiveSearchingFor = document.getElementById('respSearchBoard').value;
    let searchCommand = window.innerWidth < 1000 ? responsiveSearchingFor : searchingFor;
    searchCommand = searchCommand.toLowerCase();
    if (serachCommandIsFound(todo,searchCommand)) {
        renderCard(todo, array, i);
        return true; 
    } else {
        return false; 
    }
}

function serachCommandIsFound(todo,searchCommand){
    return(todo.title.toLowerCase().includes(searchCommand) ||
    todo.description.toLowerCase().includes(searchCommand) ||
    todo.assignedTo.some((name) => name.toString().toLowerCase().includes(searchCommand)) ||
    todo.dueDate.toString().includes(searchCommand) ||
    todo.prio.toLowerCase().includes(searchCommand) ||
    todo.category.toString().toLowerCase().includes(searchCommand) ||
    todo.subtasks.some((subtask) => subtask.name.toLowerCase().includes(searchCommand)))
}

/**
 * changes the position of the taskoverlay with an animation at opening the overlay
 * @param {string} idOfSlideConti 
 */
function slideIn(idOfSlideConti){

    setTimeout( () => {
        document.getElementById(idOfSlideConti).style = 'transform: translateX(0%)';
    },5)
}
/**
 * changes the position of the taskoverlay with an animation at closing the overlay
 * @param {string} idOfSlideConti 
 */
function slideOut(idOfSlideConti){
    document.getElementById(idOfSlideConti).style = 'transform: translateX(200%)';
}
/**
 * highlights the container where the todo cards are dragged over
 * @param {string} id 
 */
function highlight(id){
    document.getElementById(id).classList.add('dragAreaHighlight')
}
/**
 * removes the highlight from container
 * @param {string} id 
 */
function removeHighlight(id){
    document.getElementById(id).classList.remove('dragAreaHighlight')
}
/**
 * opens the dialog window 
 * @param {string} id 
 * @param {string} idOfSlideConti 
 */
function openDialog(id,idOfSlideConti){
    document.getElementById(id).classList.remove('d-none');
    slideIn(idOfSlideConti);
}
/**
 * closes the dialog window
 * @param {string} id 
 * @param {string} idOfSlideConti 
 */
function closeDialog(id,idOfSlideConti){
    setTimeout(()=> {
        document.getElementById(id).classList.add('d-none')
    }, 225)
    slideOut(idOfSlideConti);
    updateBoardHtml();
}
/**
 * Prevents the event from being propagated in the event phase and stops propagation
 * @param {Event} event 
 */
function doNotClose(event){
    event.stopPropagation();
}
/**
 * gets the id of the dragged element
 * @param {integer} id 
 */
function startDragging(id){
       currentDraggedElement = id;
}
/**
 * changes the default behaivour of the browser for the drag and drop event
 * @param {Event} ev 
 */
function allowDrop(ev) {
    ev.preventDefault();
}
/**
 * changes the category of a task, so it can change the array 
 * @param {string} category 
 */
function moveTo(category){
    task[currentDraggedElement]['status'] = category
    save();
    renderBoard();
}
/**
 * at dragging the element, a class is added to the element so that the card rotates 
 * @param {integer} id 
 */
function rotateCard(id){
    document.getElementById(id).classList.remove('card');
    document.getElementById(id).classList.add('rotateCard');
}
/**
 * gets the right color for the avatars 
 * @param {string} name 
 * @param {string} idName 
 */
function renderCardContacts(name,idName){

    for (let i = 0; i < contactsJson.length; i++) {
        const color = ["#ff7a00", "#ff5eb3", "#6e52ff", "#9327ff", "#00bee8", "#1fd7c1", "#ff745e", "#ffa35e", "#fc71ff", "#ffc701", "#0038ff", "#c3ff2b", "#ffe62b", "#ff4646", "#ffbb2b"];
        i = i % color.length;
        const avatarBg = color[i]
        contactColorsMap.set(contactsJson[i].fullName, avatarBg);
    }

    let bgColor = contactColorsMap.get(name)
    document.getElementById(idName).style.backgroundColor = `${bgColor}`;
}  
/**
 * renders the right backgroundcolor for the category
 * @param {string} category 
 * @param {string} id 
 */
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
/**
 * deletes the current task
 * @param {integer} id 
 */
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




