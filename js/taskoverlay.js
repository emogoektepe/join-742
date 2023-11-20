/**
 * renders the whole taskoverlay
 * @param {string} array 
 * @param {integer} i 
 */
function renderBoardTaskOverlay(array,i){
 
    document.getElementById('dialogShowCard').innerHTML =  /*html*/ `${renderTaskOverlayHtml(array,i)}`
    renderCategory(array[i]['category'],`ctgry${i}`);
    renderAssignedTo(array,i,'assignedUser');
    renderSubtasks(array,i);
    renderPrio(array[i]['prio'],`prio${array[i]['id']}`,array,i);
}
/**
 * renders the contacts which are assigned to the task into the taskoverlay 
 * @param {Object} array 
 * @param {integer} i 
 * @param {string} idOfContainer 
 */
function renderAssignedTo(array,i,idOfContainer,avatarConti){
    
    let assigned = array[i]['assignedTo']

    for (let j = 0; j < assigned.length; j++) {
        const fullname = assigned[j]
        let names = fullname.split(" ")
        let firstNameCharacter = names[0].charAt(0)
        if(names.length > 1){
            renderDoubleName(names,idOfContainer,j,firstNameCharacter,fullname)
        }else{
            renderSingleName(idOfContainer,j,firstNameCharacter,fullname)
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
function renderDoubleName(names,idOfContainer,j,firstNameCharacter,fullname){
    let secondNameCharacter = names[1].charAt(0)
    document.getElementById(idOfContainer).innerHTML += /*html*/`
    <div class="assignedContact">
        <div id="assignedContact${j}" class="avatar">${firstNameCharacter}${secondNameCharacter}</div>${fullname} 
    </div>`
    renderCardContacts(fullname,`assignedContact${j}`);
}
/**
 *  renders the name of the contact to which the task is assigned, if the contact has got only one names
 * @param {string} idOfContainer 
 * @param {integer} j 
 * @param {string} firstNameCharacter 
 * @param {string} fullname 
 */
function renderSingleName(idOfContainer,j,firstNameCharacter,fullname){
    document.getElementById(idOfContainer).innerHTML += /*html*/ `
            <div class="assignedContact">
                <div id="assignedContact${j}" class="avatar">${firstNameCharacter}</div><span>${fullname}</span> 
            </div>`
            renderCardContacts(fullname,`assignedContact${j}`);
}
/**
 * renders the current subtaks into the taskoverlay
 * @param {Object} array 
 * @param {integer} i 
 */
function renderSubtasks(array,i){
    let subtasks = array[i]['subtasks']
    let id = array[i]['id']

    renderSubtaskArray(subtasks,i,id)
}
/**
 * renders the Subtaskarray from the current task
 * @param {Array} subtasks 
 * @param {integer} i
 * @param {string} id 
 */
function renderSubtaskArray(subtasks,i,id){
    if(subtasks.length == 0){
        document.getElementById(`subHeadline${i}`).classList.add('d-none')}
    else{
        for (let k = 0; k < subtasks.length; k++) {
        const subtask = subtasks[k];
        
            if(subtask['done'] == false){
                renderNotCheckedSubtask(id,k,subtask)
            }
            else{
                renderCheckedSubtask(id,k,subtask)
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
function renderNotCheckedSubtask(id,k,subtask){
    document.getElementById(`subtask${id}`).innerHTML += /*html*/` 
    <div id="box${id,k}" class="subConti">
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
function renderCheckedSubtask(id,k,subtask){
    document.getElementById(`subtask${id}`).innerHTML += /*html*/` 
    <div id="box${id,k}" class="subConti">
        <div class="checkBg"><img onclick="checkBox(${id},${k})" src="img/boxChecked.svg"></div>
        ${subtask['name']}
    </div>`
}

/**
 * renders the accordingly prio to the tasks
 * @param {string} prio
 * @param {string} id 
 * @param {Object} array 
 * @param {integer} i 
 */
function renderPrio(prio,id,array,i){

    let img;
    let string = array[i]['prio']

    switch (prio) {
        case 'Low':
            string 
            img = '<img src="img/prioLow.svg"></img>'
            break;
        
        case 'Medium': 
            string = array[i]['prio']
            img = '<img src="img/prioMid.svg"></img>'
            break;

        case 'Urgent':
            string = array[i]['prio']
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
function checkBox(id,k){

    let subtask = allTasks[id]['subtasks'][k]

    subtask['done'] = !subtask['done']
    save();
    changeBox(subtask,id,k);
}
/**
 * gets the status of the checkbox from the task array and renders the accordingly checkbox
 * @param {Object} subtask 
 * @param {integer} id 
 * @param {integer} k 
 */
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

function renderBoardEditForm(idFromTask) {
    document.getElementById('taskOverlay').innerHTML = /*html*/`

    <div class="headerEditForm">
        <img onclick="closeDialog('dialogShowCard','taskOverlay')" class="editCard" src="img/close.svg">    
    </div>


    <div class="editTemplate">
    <div class="addTaskContent">
    <h1>Add Task</h1>
    <div class="form">
        <div class="formLeftSide">
            <div class="firstBlock">
                <span data-end="*">Title</span>
                <input autocomplete="off" type="text" name="" id="addTaskInputTitleEdit" placeholder="Enter a title">
                <div id="addTaskInputTitleRequired" class="requiredFieldText">This field is required</div>
            </div>
            <div class="secondBlock">
                <span data-end="*">Description</span>
                <textarea id="addTaskTextAreaEdit" placeholder="Enter a Description"></textarea>
                <div id="addTaskTextAreaRequired" class="requiredFieldText">This field is required</div>
            </div>
            <div class="thirdBlock">
                <span>Assigned to</span>
                <div class="dropDownWithInput">
                    <div class="assignedTo">
                        <input type="text" onclick="openContactDropDown()" placeholder="Select contacts to assign" id="assignedToInputEdit" onkeyup="searchContactInDropDown()">
                        <div class="dropDownArrow" onclick="toggleDropDown()">
                            <img id="dropDownImage" src="./img/arrow_drop_down_down.svg" alt="">
                        </div>
                    </div>
                    <div id="imageFromDropDown"></div>
                    <div id="dropDownContact">
                    </div>
                </div>
            </div>
            <div class="bottomText" data-start="*">This field is required</div>
        </div>
        <div class="formSeparator"></div>
        <div class="formRightSide">
            <div class="dateBlock">
                <span data-end="*">Due Date</span>
                <input type="date" id="addTaskDateEdit" value="${todaysDate}">
                <span class="requiredFieldText">This field is required</span>
            </div>
            <div class="prioBlock">
                <span>Prio</span>
                <div class="prio">
                    <div onclick="changePrioColor(this, '#FF3D00'); getPrio(this)">Urgent<img src="./img/prioUp.svg" alt=""></div>
                    <div onclick="changePrioColor(this, '#FFA800'); getPrio(this)">Medium<img src="./img/prioMid.svg" alt=""></div>
                    <div onclick="changePrioColor(this, '#7AE229'); getPrio(this)">Low<img src="./img/prioLow.svg" alt=""></div>
                </div>
            </div>
            <div class="categoryBlock">
                <span data-end="*">Category</span>
                <div class="categoryBlockDropDown">
                    <div class="selectTaskCategory" id="selectTaskCategory" onclick="openCategoryDropDown()">
                        <span id="selectTaskCategorySpan">Select task category</span>
                        <div class="dropDownArrow mgTop0">
                            <img id="dropDownImageCategory" src="./img/arrow_drop_down_down.svg" alt="">
                        </div>
                    </div>
                    <div id="selectTaskCategoryRequired" class="requiredFieldText">This field is required</div>
                    <div class="categoryDropDown" id="categoryDropDown">
                        <div class="categorysInDropDown">
                            <div onclick="getCategory('Technical Task')">Technical Task</div>
                            <div onclick="getCategory('User Story')">User Story</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subtasksBlock">
                <span>Subtasks</span>
                <div class="taskSubtasksContainer" id="taskSubtasksContainer">
                    <input autocomplete="off" onclick="createSubTask()" type="text" name="" id="taskSubtasksInputEdit" class="taskSubtasks" placeholder="Add new subtask">
                    <div id="subtaskIcons">
                        ${renderSubtaskAddButton()}
                    </div>
                </div>
                <div class="newSubtaskAdded" id="newSubtaskAddedList"></div>
            </div>
            <div class="clearAndCreateButton">
                <div onclick="clearAddTask()" class="buttonUnfilled addTaskClearButton">Clear<img src="./img/del.svg" alt=""></div>
                <div onclick="createTask()" class="buttonFilled addTaskCreateButton">Create Task<img src="./img/check-white.svg" alt=""></div>
            </div>
        </div>
    </div>
</div>
</div>

<div class="editSubmitButton">
        <div class="buttonFilled saveEditButton">
            Ok <img src="./img/check-white.svg">
        <div>
    </div> `;

    renderEditContent(idFromTask);
}

function renderEditContent(idFromTask){

    let actuellyTask = allTasks[idFromTask]
    document.getElementById('addTaskInputTitleEdit').value =  `${actuellyTask['title']}`
    document.getElementById('addTaskTextAreaEdit').value = `${actuellyTask['description']}`
    document.getElementById('selectTaskCategorySpan').innerText = `${actuellyTask['category']}`
    document.getElementById('addTaskDateEdit').value = `${actuellyTask['dueDate']}`
}





