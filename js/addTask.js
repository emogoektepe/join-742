function renderAddTask() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <div class="addTaskContent">
            <h1>Add Task</h1>
            <div class="form">
                <div class="formLeftSide">
                    <span data-end="*">Title</span>
                    <input type="text" name="" id="" placeholder="Enter a title">
                </div>
                <div class="formSeparator"></div>
                <div class="formRightSide"></div>
            </div>
        </div>
    `;

}