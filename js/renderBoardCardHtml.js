function renderCardHtml(todo,i){

    document.getElementById(todo['status']).innerHTML+= /*html*/`

    <div class="card" id="${todo['id']}" ondragstart="startDragging(${todo['id']}); rotateCard(${todo['id']})">
        <div onclick="renderBoardTaskOverlay(${todo['id']}); openDialog('dialogShowCard')">
            <div draggable="true" class="cardContent">
                <div class="category">
                    Category
                </div>
                <h4>${todo['title']}</h4>
                <p>${todo['description']}</p>

                <div class="progressBar">
                    <progress id="file" max="100" value="50"></progress>
                    1/2 Subtasks
                </div>
                <div class="endSection">
                    <div id="assignedBox${todo['id']}" class="avatars">

                    </div>
                    <div>
                        <img src="img/prio.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>`
    renderCardAssignedTo(`assignedBox${todo['id']}`,todo);
}