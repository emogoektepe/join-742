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

let tasksToBoard = [];

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
            shouldRender(todo,searchingFor,i);
        }
    } else{
        document.getElementById('todo').innerHTML = `${renderEmptyCategory()}`
    } 
}

function renderInProgressContent(){
    let progressTodos = testTodos.filter(p => p['category']== 'inProgress');
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
    document.getElementById('awaitFeedback').innerHTML = '';
    let searchingFor = document.getElementById('searchBoard').value
    let feedbackTodos = testTodos.filter(f => f['category']== 'awaitFeedback')

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
    document.getElementById('done').innerHTML = '';
    let searchingFor = document.getElementById('searchBoard').value
    let doneTodos = testTodos.filter(d => d['category'] == 'done')

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
     document.getElementById(todo['category']).innerHTML+= shouldRender ? `${renderCardHtml(todo, i)} ` : ``
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
    testTodos[currentDraggedElement]['category'] = category
    renderBoard()
}