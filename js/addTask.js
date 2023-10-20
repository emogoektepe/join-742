function renderAddTask() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <div class="addTaskContent">
            <h1>Add Task</h1>
            <div class="form">
                <div class="formLeftSide">
                    <div>
                        <span data-end="*">Title</span>
                        <input type="text" name="" id="" placeholder="Enter a title">
                        <span class="requiredFieldText">This field is required</span>
                    </div>
                    <div>
                        <span data-end="*">Description</span>
                        <textarea placeholder="Enter a Description"></textarea>
                        <span class="requiredFieldText">This field is required</span>
                    </div>
                    <div>
                        <span>Assigned to</span>
                        <input class="dropDown" type="text" name="" id="" placeholder="Select contacts to assign">
                    </div>
                </div>
                <div class="formSeparator"></div>
                <div class="formRightSide"></div>
            </div>
        </div>
    `;

}