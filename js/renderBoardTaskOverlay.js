function renderBoardTaskOverlay(i){
    document.getElementById('dialogShowCard').innerHTML =  /*html*/ `
    
    
    <div class="dialogShowCard" onclick="doNotClose(event)">
    
        <div class="cardHead">
           <p class="category">Category</p> 
            <img onclick="closeDialog('dialogShowCard')" class="editCard" src="img/close.svg">
        </div>
        <h1 class="headline">${task[i]['title']}</h1>
        <span>
            <p>${task[i]['description']}</p>
        </span>
       
        <div class="dueDate"> 
            <span class="grey">Due date:</span>
            <span>${task[i]['dueDate']}</span>
        </div>


            
        <div class="dueDate">
           <span class="grey">Priority: </span>  
            <div class="cardPrio">${task[i]['prio'][0]} ${task[i]['prio'][1]}</div>
         </div>
           
           <p class="grey">Assigned to:</p> 
         
        
        <div id="assignedUser" class="cardContact">
         
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
      renderAssignedTo(i)
}

function renderAssignedTo(i){

    let assigned = task[i]['assignedTo']

    for (let j = 0; j < assigned.length; j++) {
        const assignedContact = assigned[j]

        let assignedCharcter = assignedContact.charAt()

        document.getElementById('assignedUser').innerHTML += /*html*/`
        <div class="assignedContact">
            <div class="avatar">${assignedCharcter}</div> ${assignedContact}
        </div>`
    }
}


