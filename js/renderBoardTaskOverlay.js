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
        <div id="subtask${task[i]['id']}" class="subtask">
           
        </div>

            
        <div class="closeSection">
            <div class="closeSectionItem filterBlue">Delete <img src="./img/delete.svg"></div>  
            <div class="closeSectionItem filterBlue">Edit <img src="./img/edit.svg"></div>    
        </div>
            

    </div>`
      renderAssignedTo(i,'assignedUser')
      renderSubtasks(i)
}

