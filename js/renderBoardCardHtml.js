function renderCardHtml(todo){

    document.getElementById(todo['status']).innerHTML+= /*html*/`

    <div class="card" id="${todo['id']}" ondragstart="startDragging(${todo['id']}); rotateCard(${todo['id']})">
        <div onclick="renderBoardTaskOverlay(${todo['id']}); openDialog('dialogShowCard')">
            <div draggable="true" class="cardContent">
                <div id="category${todo['id']}" class="category">
                    ${todo['category'][0]['name']}
                </div>
                <h4>${todo['title']}</h4>
                <p>${todo['description']}</p>

                <div id="progressBar${todo['id']}" class="progressBar">
                   
                </div>
                <div class="endSection">
                    <div id="assignedBox${todo['id']}" class="avatars">

                    </div>
                    <div>
                        ${todo['prio'][1]}
                    </div>
                </div>
            </div>
        </div>
    </div>`
    renderCategory(todo);
    renderCardAssignedTo(`assignedBox${todo['id']}`,todo);
    renderProgressbar(todo,todo['id']);
}
