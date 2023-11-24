/**
 * renders the whole taskoverlay
 * @param {object} array 
 * @param {integer} i 
 */
function renderBoardTaskOverlay(idFromTask) {

    let actuellyTask = allTasks[idFromTask]

    document.getElementById('dialogShowCard').innerHTML =  /*html*/ `${renderTaskOverlayHtml(idFromTask, actuellyTask)}`
    renderCategory(actuellyTask['category'], `ctgry${idFromTask}`);
    renderAssignedTo(idFromTask, 'assignedUser');
    renderSubtasks(idFromTask);
    renderPrio(actuellyTask['prio'], `prio${idFromTask}`, actuellyTask);
}
/**
 * renders the contacts which are assigned to the task into the taskoverlay 
 * @param {Object} array 
 * @param {integer} i 
 * @param {string} idOfContainer 
 */
function renderAssignedTo(idFromTask, idOfContainer) {

    let assigned = allTasks[idFromTask]['assignedTo']

    for (let j = 0; j < assigned.length; j++) {
        const fullname = assigned[j]
        let names = fullname.split(" ")
        let firstNameCharacter = names[0].charAt(0)
        if (names.length > 1) {
            renderDoubleName(names, idOfContainer, j, firstNameCharacter, fullname)
        } else {
            renderSingleName(idOfContainer, j, firstNameCharacter, fullname)
        }
    }
}
/**
 * renders the name of the contact to which the task is assigned, if the contact has got two names
 * @param {array} names 
 * @param {string} idOfContainer 
 * @param {integer} j 
 * @param {string} firstNameCharacter 
 * @param {string} fullname 
 */
function renderDoubleName(names, idOfContainer, j, firstNameCharacter, fullname) {
    let secondNameCharacter = names[1].charAt(0)
    document.getElementById(idOfContainer).innerHTML += /*html*/`
    <div class="assignedContact">
        <div id="assignedContact${j}" class="avatar">${firstNameCharacter}${secondNameCharacter}</div>${fullname} 
    </div>`
    renderCardContacts(fullname, `assignedContact${j}`);
}
/**
 *  renders the name of the contact to which the task is assigned, if the contact has got only one names
 * @param {string} idOfContainer 
 * @param {integer} j 
 * @param {string} firstNameCharacter 
 * @param {string} fullname 
 */
function renderSingleName(idOfContainer, j, firstNameCharacter, fullname) {
    document.getElementById(idOfContainer).innerHTML += /*html*/ `
            <div class="assignedContact">
                <div id="assignedContact${j}" class="avatar">${firstNameCharacter}</div><span>${fullname}</span> 
            </div>`
    renderCardContacts(fullname, `assignedContact${j}`);
}
/**
 * renders the current subtaks into the taskoverlay
 * @param {Object} array 
 * @param {integer} i 
 */
function renderSubtasks(idFromTask) {
    let subtasks = allTasks[idFromTask]['subtasks']
    let id = idFromTask;

    renderSubtaskArray(subtasks, id)
}
/**
 * renders the Subtaskarray from the current task
 * @param {Array} subtasks 
 * @param {integer} id 
 */
function renderSubtaskArray(subtasks, id) {
    if (subtasks.length == 0) {
        document.getElementById(`subHeadline${id}`).classList.add('d-none')
    }
    else {
        for (let k = 0; k < subtasks.length; k++) {
            const subtask = subtasks[k];

            if (subtask['done'] == false) {
                renderNotCheckedSubtask(id, k, subtask)
            }
            else {
                renderCheckedSubtask(id, k, subtask)
            }
        }
    }
}
/**
 * if the subtask isn't checked, the right img will be renderd 
 * @param {integer} id 
 * @param {integer} k 
 * @param {array} subtask 
 */
function renderNotCheckedSubtask(id, k, subtask) {
    document.getElementById(`subtask${id}`).innerHTML += /*html*/` 
    <div id="box${id, k}" class="subConti">
        <div class="checkBg">
            <img onclick="checkBox(${id},${k})" class="notChecked" src="img/checkButton.svg">
        </div>
        ${subtask['name']}
    </div>`
}
/**
 * renders the accordingly img if the subtask is checked
 * @param {integer} id 
 * @param {integer} k 
 * @param {array} subtask 
 */
function renderCheckedSubtask(id, k, subtask) {
    document.getElementById(`subtask${id}`).innerHTML += /*html*/` 
    <div id="box${id, k}" class="subConti">
        <div class="checkBg"><img onclick="checkBox(${id},${k})" src="img/boxChecked.svg"></div>
        ${subtask['name']}
    </div>`
}

/**
 * renders the accordingly prio to the tasks
 * @param {string} prio
 * @param {string} id 
 * @param {Object} actuellyTask 
 */
function renderPrio(prio, id, actuellyTask) {

    let img;
    let string = actuellyTask['prio']

    switch (prio) {
        case 'Low':
            string
            img = '<img src="img/prioLow.svg"></img>'
            break;

        case 'Medium':
            string = actuellyTask['prio']
            img = '<img src="img/prioMid.svg"></img>'
            break;

        case 'Urgent':
            string = actuellyTask['prio']
            img = '<img src="img/prioUp.svg"></img>'
            break;
    }
    document.getElementById(id).innerHTML = `${string} ${img}`
}
/**
 * onlick the clicked checkbox changes its boolean and renders the accordingly checked box
 * @param {integer} id 
 * @param {integer} k 
 */
function checkBox(id, k) {

    let subtask = allTasks[id]['subtasks'][k]

    subtask['done'] = !subtask['done']
    changeBox(subtask, id, k);
}
/**
 * gets the status of the checkbox from the task array and renders the accordingly checkbox
 * @param {Object} subtask 
 * @param {integer} id 
 * @param {integer} k 
 */
function changeBox(subtask, id, k) {

    if (subtask['done']) {
        document.getElementById(`box${id, k}`).innerHTML = /*html*/ `
        <div class="checkBg">
            <img onclick="checkBox(${id},${k})" src="img/boxChecked.svg">
        </div>
        ${subtask['name']}`
    } else {
        document.getElementById(`box${id, k}`).innerHTML = /*html*/ `
            <div class="checkBg">
                <img class="notChecked" onclick="checkBox(${id},${k})" src="img/checkButton.svg">
            </div>    
            ${subtask['name']} `
    }
    updateBoardHtml();
}

function renderBoardEditForm(idFromTask) {
    let taskOverlay = document.getElementById('taskOverlay');
    let tempRenderAddTaskHTMLEdit = tempRenderAddTask();
    let tempRenderAddTaskDivEdit = document.createElement('div');
    tempRenderAddTaskDivEdit.innerHTML = tempRenderAddTaskHTMLEdit;
    tempRenderAddTaskDivEdit.id = 'tempRenderAddTaskDivEdit';
    taskOverlay.replaceChildren(tempRenderAddTaskDivEdit);
    renderEditContent(idFromTask);
    renderAssignedToEditBoard(idFromTask);
}

function renderEditContent(idFromTask) {

    let actuellyTask = allTasks[idFromTask]
    let editPrio = actuellyTask['prio']
    document.getElementById('addTaskInputTitle').value = `${actuellyTask['title']}`
    document.getElementById('addTaskTextArea').value = `${actuellyTask['description']}`
    document.getElementById('selectTaskCategorySpan').innerText = `${actuellyTask['category']}`
    document.getElementById('addTaskDate').value = `${actuellyTask['dueDate']}`
    renderEditPrio(editPrio, idFromTask);
    renderEditSubtasksInTask(actuellyTask, idFromTask);
}

function closeEditContent(idFromTask) {
    saveInputChanges(idFromTask);
    saveSubtaskChanges();
    openDialog('dialogShowCard', 'taskOverlay');
    loadTasksFromStorage();
    renderBoardTaskOverlay(idFromTask);
}

function saveEditChanges(idFromTask) {
    allTasks[idFromTask]['prio'] = prioLabel;
    setTasksStorage();
}

function saveInputChanges(idFromTask) {
    let actuellyTask = allTasks[idFromTask]
    actuellyTask['title'] = document.getElementById('addTaskInputTitleEdit').value
    actuellyTask['description'] = document.getElementById('addTaskTextAreaEdit').value
    actuellyTask['dueDate'] = document.getElementById('addTaskDateEdit').value
    actuellyTask['category'] = document.getElementById('selectTaskCategorySpan').innerText 
    setTasksStorage();
}

function saveSubtaskChanges(){
    pushEditSubtasks(idFromTask);
}

function renderAssignedToEditBoard(idFromTask){

    let assignedTo = allTasks[idFromTask]['assignedTo']

    for (let i = 0; i < assignedTo.length; i++) {

        const contact = assignedTo[i]
        selectedContacts.push(contact)

    }
    renderAssignedToImages();
}

function getEditPrio(selectedPrio, idFromTask) {
    prioLabel = selectedPrio.innerText;
    saveEditChanges(idFromTask)
}


function renderEditPrio(prio, idFromTask) {
    switch (prio) {
        case 'Urgent':
            changePrioColor(editPrioUrgent, '#FF3D00')
            break;

        case 'Medium':
            changePrioColor(editPrioMediun, '#FFA800')
            break;

        case 'Low':
            changePrioColor(editPrioLow, '#7AE229')
            break;
    }
}

function renderEditSubtasksInTask(actuellyTask, idFromTask) {
    let subtasks = actuellyTask['subtasks']
    let subtaskList = document.getElementById('newSubtaskAddedList');
    for (let i = 0; i < subtasks.length; i++) {
            const subtask = subtasks[i]
            subtasksList.push(subtask)
    }

    renderSubtasksInTask();
}

function pushEditSubtasks(idFromTask){
 
    let subtasks = allTasks[idFromTask]['subtasks']

    for (let i = 0; i < subtasksList.length; i++) {
        const subtask = subtasksList[i];
        subtasks.push(subtask)       
    }
}




