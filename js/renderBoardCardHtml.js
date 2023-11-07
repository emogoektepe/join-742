function renderCardHtml(todo,array,i){

    document.getElementById(todo['status']).innerHTML+= /*html*/`

    <div class="card" id="${todo['id']}" ondragstart="startDragging(${todo['id']}); rotateCard(${todo['id']})">
        <div onclick="renderBoardTaskOverlay(${array} ,${i}); openDialog('dialogShowCard')">
            <div draggable="true" class="cardContent">
                <div id="category${todo['id']}" class="category">
                    ${todo['category']}
                </div>
                <h4>${todo['title']}</h4>
                <p>${todo['description']}</p>

                <div id="progressBar${todo['id']}" class="progressBar">
                   
                </div>
                <div class="endSection">
                    <div id="assignedBox${todo['id']}" class="avatars">

                    </div>
                    <div id="cardPrio${todo['id']}">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>`
   
    renderCategory(todo['category'],`category${todo['id']}`);
    renderCardAssignedTo(`assignedBox${todo['id']}`,todo);
    renderProgressbar(todo,todo['id']);
    renderCardPrio(todo['prio'],`cardPrio${todo['id']}`);
}
