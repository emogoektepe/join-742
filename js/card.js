/**
 * renders the whole content of the todo cards
 * @param {Object} todo 
 * @param {string} array 
 * @param {integer} i 
 */
function renderCard(todo,array,i){

    document.getElementById(todo['status']).innerHTML+= /*html*/`
    ${renderCardHtml(todo,array,i)}
   `
    renderCategory(todo['category'],`category${todo['id']}`);
    renderCardAssignedTo(`assignedBox${todo['id']}`,todo);
    renderProgressbar(todo,todo['id']);
    renderCardPrio(todo['prio'],`cardPrio${todo['id']}`);
}
/**
 * checks the subtask array and renders the progress bar
 * @param {object} todo 
 * @param {integer} id 
 */
function renderProgressbar(todo,id){
    let subtasks = todo['subtasks']
    let readySubtask = 0
    for (let l = 0; l < subtasks.length; l++) {
        let SbTask = subtasks[l]
        SbTask['done']? readySubtask++ : ''
    }
    calculateProgress(subtasks,readySubtask,id,todo);
}
/**
 * caculates the progress and renders the bar
 * @param {array} subtasks 
 * @param {integer} readySubtask 
 * @param {integer} id 
 * @param {object} todo 
 */
function calculateProgress(subtasks,readySubtask,id,todo){
    let percent = subtasks.length / readySubtask 
    result = 100 / percent
    if(subtasks.length > 0){
        document.getElementById(`progressBar${id}`).innerHTML = /*html*/`
        <progress id="file" max="100" value="${result}"></progress>
        ${readySubtask}/${todo['subtasks'].length} Subtasks`
    }
}
/**
 * renders the accordingly prio to todo cards
 * @param {string} prio 
 * @param {string} id 
 */
function renderCardPrio(prio,id){

    let img;

    switch (prio) {
        case 'Low':
            img = '<img src="img/prioLow.svg"></img>'
            break;
        
        case 'Medium': 
            img = '<img src="img/prioMid.svg"></img>'
            break;

        case 'Urgent':
            img = '<img src="img/prioUp.svg"></img>'
            break;
    }
    document.getElementById(id).innerHTML = `${img}` 
}
/**
 * renders the contacts which are assigned to the task into the todo cards 
 * @param {string} idOfContainer 
 * @param {string} todo 
 */
function renderCardAssignedTo(idOfContainer,todo){
    let assigned = todo['assignedTo']
    let id = todo['id']

    for (let j = 0; j < assigned.length; j++) {
        const fullname = assigned[j]
        let names = fullname.split(" ")
        let firstNameCharacter = names[0].charAt(0)
        let avatarId = `avatar${id}pic${j}`
        renderCharacters(names,idOfContainer,avatarId,firstNameCharacter);
        renderCardContacts(fullname,avatarId);
    }    
}
/**
 * renders the the first characters of the names from the contact to which the task is assigned to into the avatar
 * @param {string} names 
 * @param {string} idOfContainer 
 * @param {string} avatarId 
 * @param {string} firstNameCharacter 
 */
function renderTwoCharacters(names,idOfContainer,avatarId,firstNameCharacter){
    
        let secondNameCharacter = names[1].charAt(0)
        document.getElementById(idOfContainer).innerHTML += /*html*/`
        <div class="assignedContact">
            <div id=${avatarId} class="avatar">${firstNameCharacter}${secondNameCharacter}</div>
        </div>`
}

/**
 * renders the first character of the name from the contact to which is the task assigned to, if the contact only has got one name
 * @param {string} idOfContainer 
 * @param {string} avatarId 
 * @param {string} firstNameCharacter 
 */
function renderOneCharacter(idOfContainer,avatarId,firstNameCharacter){
    document.getElementById(idOfContainer).innerHTML += /*html*/`
    <div class="assignedContact">
        <div id=${avatarId} class="avatar">${firstNameCharacter}</div>
    </div>`
}
/**
 * checks the length from the "names" array and renders the accordingly function for the contact names
 * @param {string} names 
 * @param {string} idOfContainer 
 * @param {string} avatarId 
 * @param {string} firstNameCharacter 
 */
function renderCharacters(names,idOfContainer,avatarId,firstNameCharacter){
    if(names.length > 1){
        renderTwoCharacters(names,idOfContainer,avatarId,firstNameCharacter)
    }else{
        renderOneCharacter(idOfContainer,avatarId,firstNameCharacter)
    }
}