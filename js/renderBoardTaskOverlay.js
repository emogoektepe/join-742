function renderBoardTaskOverlay(i){
    document.getElementById('dialogShowCard').innerHTML =  /*html*/ `
    
    
    <div class="dialogShowCard" onclick="doNotClose(event)">
    
        <div class="cardHead">
           <p class="category">Category</p> 
            <img onclick="closeDialog('dialogShowCard')" class="editCard" src="img/close.svg">
        </div>
        <h1 class="headline">${testTodos[i]['title']}</h1>
        <span>
            <p>${testTodos[i]['description']}</p>
        </span>
       
        <div class="dueDate"> 
            <span class="grey">Due date:</span>
            <span>DD/MM/YYYY</span>
        </div>


            
        <div class="dueDate">
           <span class="grey">Priority: </span>  
            <div class="cardPrio">Medium <img src="img/prio.svg"></div>
         </div>
           
           <p class="grey">Assigned to:</p> 
        <div class="cardContact">
            <img src="img/ellipse0.svg">Emmanuel Bauer
        </div>
        <div class="cardContact">
            <img src="img/ellipse1.svg">    Marcel Bauer   
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
}