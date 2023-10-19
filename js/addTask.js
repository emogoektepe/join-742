function renderAddTask() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <div class="addTaskContent">
            <h1>Add Task</h1>
            <div class="form">
                <div class="formLeftSide"></div>
                <div class="formSeparator"></div>
                <div class="formRightSide"></div>
            </div>
        </div>
    `;

}