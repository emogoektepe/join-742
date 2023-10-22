function renderAddTask() {

    let content = document.getElementById('content');
    content.innerHTML = /*html*/ `
        <div class="addTaskContent">
            <h1>Add Task</h1>
            <div class="form">
                <div class="formLeftSide">
                    <div class="firstBlock">
                        <span data-end="*">Title</span>
                        <input type="text" name="" id="" placeholder="Enter a title">
                        <span class="requiredFieldText">This field is required</span>
                    </div>
                    <div class="secondBlock">
                        <span data-end="*">Description</span>
                        <textarea placeholder="Enter a Description"></textarea>
                        <span class="requiredFieldText">This field is required</span>
                    </div>
                    <div class="thirdBlock">
                        <span>Assigned to</span>
                        <input class="dropDown" type="text" name="" id="" placeholder="Select contacts to assign">
                    </div>
                </div>
                <div class="formSeparator"></div>
                <div class="formRightSide">
                    <div class="dateBlock">
                        <span data-end="*">Due Date</span>
                    </div>
                    <div class="prioBlock">
                        <span>Prio</span>
                        <div class="prio">
                            <div onclick="changePrioColor(this, '#FF3D00')">Urgent<img src="./img/prioUp.svg" alt=""></div>
                            <div onclick="changePrioColor(this, '#FFA800')">Medium<img src="./img/prioMid.svg" alt=""></div>
                            <div onclick="changePrioColor(this, '#7AE229')">Low<img src="./img/prioLow.svg" alt=""></div>
                        </div>
                    </div>
                    <div class="categoryBlock">
                        <span data-end="*">Category</span>
                        
                    </div>
                    <div class="subtasksBlock">
                        <span>Subtasks</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    setActiveNav("addTask"); //für Navbar
}

let selectedElement = false;
function changePrioColor(element, color) {
    if (selectedElement === element) {
        element.style = '';
        element.lastChild.style = '';
        selectedElement = false;
    } else {
        if (selectedElement) {
            selectedElement.style = '';
            selectedElement.lastChild.style = '';
        }
        element.style.backgroundColor = color;
        element.style.boxShadow = 'none';
        element.style.color = '#ffffff';
        element.lastChild.style.filter = "brightness(0) invert(1)";
        element.style.fontWeight = '700';
        element.style.fontSize = '21px';
        selectedElement = element;
    }
}