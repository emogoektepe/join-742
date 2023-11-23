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
}

function renderDropDownEditContacts() {
    let dropDownSection = document.getElementById('editDropDownSection');
    dropDownSection.innerHTML = '';
    for (let i = 0; i < contactsJson.length; i++) {
        if (contactsJson[i].fullName.toLowerCase().includes(searchValue.toLowerCase())) {
            dropDownSection.innerHTML += /*html*/ `
            <div class="contactsInMenu" id="contactsInMenu${i}" onclick="selectContactInDropDown(${i})">
                <div class="imgAndName">
                    <div class="contactsInMenuimg" id="contactInListImg${i}">
                        ${getInitials(i)}
                    </div>
                    <p>${contactsJson[i].fullName}</p>
                </div>
                <img src="./img/checkboxEmpty.svg" alt="checkbox">
            </div>
        `;
            let contactsInMenu = document.getElementById(`contactsInMenu${i}`);
            if (selectedContacts.indexOf(contactsInMenu.children[0].children[1].innerHTML) > -1) {
                selectContactInDropDown(i);
            }
            setContactListImgColor(i);
        }
    }
}

function renderEditContent(idFromTask) {

    let actuellyTask = allTasks[idFromTask]
    let editPrio = actuellyTask['prio']
    document.getElementById('addTaskInputTitleEdit').value = `${actuellyTask['title']}`
    document.getElementById('addTaskTextAreaEdit').value = `${actuellyTask['description']}`
    document.getElementById('selectTaskCategorySpan').innerText = `${actuellyTask['category']}`
    document.getElementById('addTaskDateEdit').value = `${actuellyTask['dueDate']}`
    renderEditPrio(editPrio, idFromTask);
    renderEditSubtasksInTask(actuellyTask, idFromTask);
}

function closeEditContent(idFromTask) {
    saveInputChanges(idFromTask);
    openDialog('dialogShowCard', 'taskOverlay');
    loadTasksFromStorage();
    renderBoardTaskOverlay(idFromTask);
}

function getEditPrio(selectedPrio, idFromTask) {
    prioLabel = selectedPrio.innerText;
    saveEditChanges(idFromTask)
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
    setTasksStorage();
}


function renderEditPrio(prio, idFromTask) {
    switch (prio) {
        case 'Urgent':
            changeEditPrioColor(editPrioUrgent, '#FF3D00', idFromTask)
            break;

        case 'Medium':
            changeEditPrioColor(editPrioMedium, '#FFA800', idFromTask)
            break;

        case 'Low':
            changeEditPrioColor(editPrioLow, '#7AE229', idFromTask)
            break;
    }
}

function changeEditPrioColor(element, color, idFromTask) {

    if (selectedElement === element) {
        element.style = '';
        element.lastChild.style = '';
        selectedElement = false;
    } else {
        if (selectedElement) {
            selectedElement.style = '';
            selectedElement.lastChild.style = '';
        }
        element.style.backgroundColor = color;
        element.style.boxShadow = 'none';
        element.style.color = '#ffffff';
        element.lastChild.style.filter = "brightness(0) invert(1)";
        element.style.fontWeight = '700';
        element.style.fontSize = '21px';
        selectedElement = element;
    }

}

//überarbeiten mit Emre || Code Sparen

function renderEditSubtasksInTask(actuellyTask, idFromTask) {
    let subtasks = actuellyTask['subtasks']
    let subtaskList = document.getElementById('newSubtaskAddedListEdit');
    subtaskList.innerHTML = "";
    for (let i = 0; i < subtasks.length; i++) {
        subtaskList.innerHTML +=/*html*/`
            <div class="liContainer liContainerHover" ondblclick="editSubtasks(${i})"><li class="subtaskLi" id="editLi${i}">${subtasks[i]["name"]}</li><div>
            <div class="deleteAndCheck dNoneDnC" id="editDeleteContainer${i}">
                <div onclick="editBoardSubtasks(${i},${idFromTask})">
                    <img class="delNCheckHover" style="margin-right: 4px" src="./img/edit.svg" alt="">
                </div>
                <div>
                    <img style="height: 24px" src="./img/borderdash.svg" alt="">
                </div>
                <div onclick="deleteBoardSubtask(${i},${idFromTask})">
                    <img class="delNCheckHover" style="margin-left: 4px" src="./img/delete.svg" alt="">
                </div>
            </div>
        `;
    }
}

function editBoardSubtasks(position, idFromTask) {
    let li = document.getElementById(`editLi${position}`);
    let editDeleteContainer = document.getElementById(`editDeleteContainer${position}`);
    if (li) {
        li.parentElement.classList.remove('liContainerHover')
        li.parentElement.style.backgroundColor = 'white';
        li.parentElement.style.borderBottom = '1px solid #005DFF';
        li.style.display = "flex";
        li.style.paddingLeft = "16px !important";
        li.contentEditable = "true";
        li.outline = "none";
        li.focus();
        getCursorToEndEdittable(li)
        editDeleteContainer.classList.remove('dNoneDnC');
        editDeleteContainer.innerHTML =/*html*/`
            <div onclick="deleteBoardSubtask(${position},${idFromTask})">
                <img class="delNCheckHover" style="margin-right: 4px" src="./img/delete.svg" alt="">
            </div>
            <div>
                <img style="height: 24px" src="./img/borderdash.svg" alt="">
            </div>
            <div onclick="confirmEditBoardSubtask(${position},${idFromTask})">
                <img class="delNCheckHover" style="margin-left: 4px" src="./img/check.svg" alt="">
            </div>
        `;
    }
}

function confirmEditBoardSubtask(position, idFromTask) {
    let actuellyTask = allTasks[idFromTask]
    let li = document.getElementById(`editLi${position}`);
    actuellyTask['subtasks'][position]['name'] = li.innerText;
    renderEditSubtasksInTask(actuellyTask, idFromTask);
}

function deleteBoardSubtask(position, idFromTask) {
    let actuellyTask = allTasks[idFromTask]
    let subtasks = actuellyTask['subtasks']
    subtasks.splice(position, 1);
    renderEditSubtasksInTask(actuellyTask, idFromTask);
}

function createSubTaskAtEditBoard(idFromTask) {
    let subtaskIcons = document.getElementById('subtaskIconsEditBoard');
    subtaskIcons.innerHTML = /*html*/`
        <div class="deleteAndCheck">
            <div onclick="deleteTaskInInputEditBoard()">
                <img class="delNCheckHover" style="margin-right: 4px" src="./img/del.svg" alt="">
            </div>
            <div>
                <img style="height: 24px" src="./img/borderdash.svg" alt="">
            </div>
            <div onclick="addSubtaskToBoardList(${idFromTask})">
                <img class="delNCheckHover" style="margin-left: 4px" src="./img/check.svg" alt="">
            </div>
        </div>
    `;
}

function deleteTaskInInputEditBoard() {
    let subtaskIcons = document.getElementById('subtaskIconsEditBoard');
    let taskSubtasksInput = document.getElementById('taskSubtasksInputEdit');
    taskSubtasksInput.value = "";
    subtaskIcons.innerHTML = renderSubtaskAddButton();
}

function addSubtaskToBoardList(idFromTask) {
    let actuellyTask = allTasks[idFromTask]
    let subtasks = actuellyTask['subtasks']
    let taskSubtasksInput = document.getElementById('taskSubtasksInputEdit');
    taskSubtasksInput.focus();
    if (taskSubtasksInput.value.trim() !== "") {
        subtasks.push({ name: taskSubtasksInput.value, done: false });
        renderEditSubtasksInTask(actuellyTask, idFromTask);
        let subtaskIcons = document.getElementById('subtaskIconsEditBoard');
        subtaskIcons.innerHTML = renderSubtaskAddButton();
        taskSubtasksInput.value = "";
        taskSubtasksInput.blur();
    }
}




