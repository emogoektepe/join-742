function renderBoardTaskOverlay(array,i){
 
    document.getElementById('dialogShowCard').innerHTML =  /*html*/ `
    
    <div id="taskOverlay" style="transform: translateX(200%);"  class="dialogShowCard" onclick="doNotClose(event);">
        <div class="cardHead">
            <p id="ctgry${i}" class="category">${array[i]['category']}</p> 
            <img onclick="closeDialog('dialogShowCard','taskOverlay')" class="editCard" src="img/close.svg">
        </div>
        <h1 class="headline">${array[i]['title']}</h1>
        <span>
            <p>${array[i]['description']}</p>
        </span>
       
        <div class="dueDate"> 
            <span class="grey">Due date:</span>
            <span>${array[i]['dueDate']}</span>
        </div>

        <div class="dueDate">
           <span class="grey">Priority:</span>  
            <div id="prio${array[i]['id']}" class="cardPrio">
        
            </div>
        </div>
           
        <p class="grey">Assigned to:</p> 
        <div id="assignedUser" class="cardContact">

        </div>
                     
        <h3 id="subHeadline${i}">Subtasks</h3>
        <div id="subtask${array[i]['id']}" class="subtask">
           
        </div>

        <div class="closeSection">
            <div onclick="deleteTask(${array[i]['id']})" class="closeSectionItem filterBlue">Delete <img src="./img/delete.svg"></div>  
            <div class="closeSectionItem filterBlue">Edit <img src="./img/edit.svg"></div>    
        </div>
    </div>`

    
    renderCategory(array[i]['category'],`ctgry${i}`);
    renderAssignedTo(array,i,'assignedUser');
    renderSubtasks(array,i);
    renderPrio(array[i]['prio'],`prio${array[i]['id']}`,array,i);
}

