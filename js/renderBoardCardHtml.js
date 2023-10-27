function renderCardHtml(todo,i){
    return /*html*/`

    <div class="card"  ondragstart="startDragging(${todo['id']})">
        <div onclick="renderBoardTaskOverlay(${i}); openDialog('dialogShowCard')">
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
                    <div class="avatars">
                        <img src="img/ellipse0.svg">
                        <img src="img/ellipse1.svg">
                        <img src="img/ellipse2.svg">
                    </div>
                    <div>
                        <img src="img/prio.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>`
}