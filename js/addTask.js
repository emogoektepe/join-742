let selectedElement = false;
let searchValue = "";
let selectedContacts = [];
let subtasksList = [];
let prioLabel = "";
const todaysDate = new Date().toJSON().slice(0, 10);

let allTasks = [];

function renderAddTask() {
    let content = document.getElementById('content');
    selectedContacts = [];
    content.innerHTML = `<div class="addTaskContainer">${tempRenderAddTask()}</div>`;
    let date = document.getElementById('addTaskDate');
    date.min = new Date().toISOString().split("T")[0];
    date.max = "2099-01-01";
    setActiveNavItem("addTask");
}

let summaryNumbersUpdated = false;
async function loadTasksFromStorage() {
    let storageParseTasks = await getItem('tasks');
    allTasks = JSON.parse(storageParseTasks.data.value);
    if (!summaryNumbersUpdated) {
        updateSummaryNumbers();
        summaryNumbersUpdated = true;
    }
}

function setTasksStorage() {
    let allTasksAsString = JSON.stringify(allTasks);
    setItem('tasks', allTasksAsString);
}

/**
 * This function creates a Task and verifies the mandatory fields.
 */
function createTask() {
    const elements = {
        title: document.getElementById('addTaskInputTitle'),
        description: document.getElementById('addTaskTextArea'),
        date: document.getElementById('addTaskDate'),
        category: document.getElementById('selectTaskCategorySpan'),
        titleRequired: document.getElementById('addTaskInputTitleRequired'),
        descriptionRequired: document.getElementById('addTaskTextAreaRequired'),
        categoryRequired: document.getElementById('selectTaskCategoryRequired')
    };

    const isEmpty = (value) => value.trim() === '';
    const isCategoryNotSelected = elements.category.innerText === 'Select task category';

    elements.titleRequired.style.cssText = isEmpty(elements.title.value) ? 'display:block !important;' : '';
    elements.descriptionRequired.style.cssText = isEmpty(elements.description.value) ? 'display:block !important;' : '';
    elements.categoryRequired.style.cssText = isCategoryNotSelected ? 'display:block !important;' : '';

    if (!isEmpty(elements.title.value) && !isEmpty(elements.description.value) && !isCategoryNotSelected) {
        const newTask = {
            id: '',
            status: 'todo',
            title: elements.title.value,
            description: elements.description.value,
            assignedTo: selectedContacts,
            dueDate: elements.date.value,
            prio: prioLabel,
            category: elements.category.innerText,
            subtasks: subtasksList
        };
        allTasks.push(newTask);
        setTasksStorage();
        clearAddTask();
        renderBoard();
    }
}

function clearAddTask() {
    prioLabel = '';
    subtasksList = [];
    selectedElement = false;
    searchValue = "";
    selectedContacts = [];
    const addTaskInputTitle = document.getElementById('addTaskInputTitle');
    const addTaskTextArea = document.getElementById('addTaskTextArea');
    const selectTaskCategory = document.getElementById('selectTaskCategory');
    addTaskInputTitle.value = '';
    addTaskTextArea.value = '';
    selectTaskCategory.children[0].innerText = 'Select task category';
    clearPrioButtons();
    renderSubtasksInTask();
}

function clearPrioButtons() {
    const buttons = document.querySelectorAll('.prio div');
    buttons.forEach(button => {
        button.style.backgroundColor = '';
        button.style.boxShadow = '';
        button.style.color = '';
        button.lastChild.style.filter = '';
        button.style.fontWeight = '';
        button.style.fontSize = '';
    });
}

function getPrio(selectedPrio) {
    prioLabel = selectedPrio.innerText;
}

function focusSubtasksInput() {
    let taskSubtasksInput = document.getElementById('taskSubtasksInput');
    taskSubtasksInput.focus();
}

function createSubTask() {
    let subtaskIcons = document.getElementById('subtaskIcons');
    subtaskIcons.innerHTML = tempRenderCreateSubtask();
}

function addSubtaskToList() {
    let taskSubtasksInput = document.getElementById('taskSubtasksInput');
    taskSubtasksInput.focus();
    if (taskSubtasksInput.value.trim() !== "") {
        subtasksList.push({ name: taskSubtasksInput.value, done: false });
        renderSubtasksInTask();
        let subtaskIcons = document.getElementById('subtaskIcons');
        subtaskIcons.innerHTML = tempRenderSubtaskAddButton();
        taskSubtasksInput.value = "";
        taskSubtasksInput.blur();
    }
}

function renderSubtasksInTask() {
    let subtaskList = document.getElementById('newSubtaskAddedList');
    subtaskList.innerHTML = "";
    for (let i = 0; i < subtasksList.length; i++) {
        subtaskList.innerHTML += tempRenderSubtaskList(i);
    }
}

/**
 * This function enables editing a subtask.
 * 
 * @param {int} position - Position of the li element
 */
function editSubtasks(position) {
    let li = document.getElementById(`li${position}`);
    let editDeleteContainer = document.getElementById(`editDeleteContainer${position}`);
    if (li) {
        li.parentElement.classList.remove('liContainerHover')
        li.parentElement.style.backgroundColor = 'white';
        li.parentElement.style.borderBottom = '1px solid #005DFF';
        li.style.display = "flex";
        li.style.paddingLeft = "16px !important";
        li.contentEditable = "true";
        li.outline = "none";
        li.focus();
        getCursorToEndEdittable(li)
        editDeleteContainer.classList.remove('dNoneDnC');
        editDeleteContainer.innerHTML = tempRenderEditDeleteContainer(position);
    }
}

function confirmEditSubtask(position) {
    let li = document.getElementById(`li${position}`);
    subtasksList[position]['name'] = li.innerText;
    renderSubtasksInTask();
}

function getCursorToEndEdittable(li) {
    const range = document.createRange();
    range.selectNodeContents(li);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

function deleteSubtask(position) {
    subtasksList.splice(position, 1);
    renderSubtasksInTask();
}

function deleteTaskInInput() {
    let subtaskIcons = document.getElementById('subtaskIcons');
    let taskSubtasksInput = document.getElementById('taskSubtasksInput');
    taskSubtasksInput.value = "";
    subtaskIcons.innerHTML = tempRenderSubtaskAddButton();
}

/**
 * This function retrieves the clicked category.
 * 
 * @param {string} category - The category's name.
 */
function getCategory(category) {
    let selectTaskCategory = document.getElementById('selectTaskCategory');
    selectTaskCategory.children[0].innerText = category;
    closeCategoryDropDown();
}

function openCategoryDropDown() {
    let categoryDropDown = document.getElementById('categoryDropDown');
    let dropDownImageCategory = document.getElementById('dropDownImageCategory');
    let selectTaskCategory = document.getElementById('selectTaskCategory');
    if (dropDownImageCategory.src.includes('down_down')) {
        dropDownImageCategory.src = './img/arrow_drop_down_up.svg';
        categoryDropDown.style.display = 'block';
        selectTaskCategory.style.border = '1px solid #29ABE2';
    } else {
        closeCategoryDropDown()
    }
}

function closeCategoryDropDown() {
    let categoryDropDown = document.getElementById('categoryDropDown');
    let dropDownImageCategory = document.getElementById('dropDownImageCategory');
    let selectTaskCategory = document.getElementById('selectTaskCategory');
    dropDownImageCategory.src = './img/arrow_drop_down_down.svg';
    categoryDropDown.style.display = 'none';
    selectTaskCategory.style.border = '';
}

document.addEventListener('click', function (event) {
    const thirdBlock = document.querySelector('.dropDownWithInput');
    const categoryBlockDropDown = document.querySelector('.categoryBlockDropDown');
    if (thirdBlock && !thirdBlock.contains(event.target)) {
        closeDropDown();
    }
    if (categoryBlockDropDown && !categoryBlockDropDown.contains(event.target)) {
        closeCategoryDropDown();
    }
});

function toggleDropDown() {
    let dropDownImage = document.getElementById('dropDownImage');
    if (dropDownImage.src.includes('down_down')) {
        document.getElementById('assignedToInput').focus();
        openContactDropDown();
    } else {
        closeDropDown();
    }
}

/**
 * 
 * This function changes the priority buttons that are clicked and modifies their CSS.
 * 
 * @param {HTML element} element - The HTML element representing the priority button.
 * @param {hex} color - Setting the background color upon calling a function.
 */
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
        if (window.innerWidth <= 1050) {
            element.style.fontWeight = '400';
            element.style.fontSize = '14px';
        } else {
            element.style.fontWeight = '700';
            element.style.fontSize = '21px';
        }
        selectedElement = element;
    }
}

function openContactDropDown() {
    document.getElementById('assignedToInput').placeholder = "";
    let dropDownImage = document.getElementById('dropDownImage');
    let dropDownContact = document.getElementById('dropDownContact');
    if (dropDownImage.src.includes('down_down')) {
        dropDownImage.src = './img/arrow_drop_down_up.svg';
        dropDownContact.innerHTML = tempRenderOpenContactDropDownSection();
        renderDropDownContacts();
        dropDownContact.style.display = "block";
    }
}

function closeDropDown() {
    dropDownImage.src = './img/arrow_drop_down_down.svg';
    dropDownContact.style.display = "none";
    searchValue = "";
    document.getElementById('assignedToInput').value = '';
    document.getElementById('assignedToInput').placeholder = "Select contacts to assign";
    renderAssignedToImages();
}

function renderDropDownContacts() {
    let dropDownSection = document.getElementById('dropDownSection');
    dropDownSection.innerHTML = '';
    for (let i = 0; i < contactsJson.length; i++) {
        if (contactsJson[i].fullName.toLowerCase().includes(searchValue.toLowerCase())) {
            dropDownSection.innerHTML += tempRenderDopwDownContacts(i);
            let contactsInMenu = document.getElementById(`contactsInMenu${i}`);
            if (selectedContacts.indexOf(contactsInMenu.children[0].children[1].innerHTML) > -1) {
                selectContactInDropDown(i);
            }
            setContactListImgColor(i);
        }
    }
}

/**
 * This function modifies the checkboxes and the CSS of the selected contact in the dropdown when clicked.
 * 
 * @param {int} i - The position of the contact refers to where it's located within a list or display of contacts, indicating its order relative to other contacts.  
 */
function selectContactInDropDown(i) {
    let contactsInMenu = document.getElementById(`contactsInMenu${i}`);
    let isSelected = contactsInMenu.classList.contains('selected');

    if (isSelected) {
        selectedContacts.splice(selectedContacts.indexOf(contactsInMenu.children[0].children[1].innerHTML), 1);
        contactsInMenu.children[0].children[1].style.color = '';
        contactsInMenu.style.backgroundColor = '';
        contactsInMenu.lastElementChild.src = './img/checkboxEmpty.svg';
    } else {
        if (selectedContacts.indexOf(contactsInMenu.children[0].children[1].innerHTML) == -1) {
            selectedContacts.push(contactsInMenu.children[0].children[1].innerHTML);
        }
        contactsInMenu.children[0].children[1].style.color = '#fff';
        contactsInMenu.style.backgroundColor = '#2a3647';
        contactsInMenu.lastElementChild.src = './img/checkboxCheckedWhite.svg';
    }
    contactsInMenu.classList.toggle('selected');
}

function searchContactInDropDown() {
    searchValue = document.getElementById('assignedToInput').value;
    renderDropDownContacts();
}

function renderAssignedToImages() {
    let imageFromDropDown = document.getElementById('imageFromDropDown');
    imageFromDropDown.innerHTML = "";
    for (let i = 0; i < selectedContacts.length; i++) {
        let imgColor = contactColorsMap.get(selectedContacts[i]);
        if (imgColor) {
            imageFromDropDown.innerHTML += tempRenderAssignedToImages(i, imgColor);
        }
    }
}

function getInitialsTaskSection(i) {
    if (selectedContacts[i].split(' ').length > 1) {
        return selectedContacts[i].split(' ')[0].charAt(0).toUpperCase() + selectedContacts[i].split(' ')[1].charAt(0).toUpperCase();
    } else {
        return selectedContacts[i].split(' ')[0].charAt(0).toUpperCase();
    }
}