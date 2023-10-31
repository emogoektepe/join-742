function renderCardHtml(todo){

    document.getElementById(todo['status']).innerHTML+= /*html*/`

    <div class="card" id="${todo['id']}" ondragstart="startDragging(${todo['id']}); rotateCard(${todo['id']})">
        <div onclick="renderBoardTaskOverlay(${todo['id']}); openDialog('dialogShowCard')">
            <div draggable="true" class="cardContent">
                <div class="category">
                    Category
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
    renderCardAssignedTo(`assignedBox${todo['id']}`,todo);
    renderProgressbar(todo,todo['id'])
}

function renderProgressbar(todo,id){

    let subtasks = todo['subtasks']

    let readySubtask = 0

    for (let l = 0; l < subtasks.length; l++) {

        let SbTask = subtasks[l]
        SbTask['done']? readySubtask++ : ''
        
    }
 
    let percent = subtasks.length / readySubtask 
    result = 100 / percent


    document.getElementById(`progressBar${id}`).innerHTML = /*html*/`
    
    <progress id="file" max="100" value="${result}"></progress>
    1/${todo['subtasks'].length} Subtasks`


}