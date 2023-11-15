const STORAGE_TOKEN = 'YZ5CGODYQCRAM4P0KHZT96QUOQQW8B2AZVAIDIP4';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';


async function setItem(key, value) {
    const payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload)})
    .then(res => res.json());
}

async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json());
}

//local saves

function saveCurrentUser(){
    let currentUserAsString = JSON.stringify(currentUser);
    localStorage.setItem('currentUser',currentUserAsString );
}

function save(){

    let taskAsString = JSON.stringify(task);
    localStorage.setItem('task',taskAsString);
}

function loadCurrentUser(){
    let currentUserAsString = localStorage.getItem('currentUser')
    currentUser = JSON.parse(currentUserAsString)
}

function load(){
    let taskAsString = localStorage.getItem('task')
    if(taskAsString){
        task = JSON.parse(taskAsString)
    }else(TASK_Template)
}

