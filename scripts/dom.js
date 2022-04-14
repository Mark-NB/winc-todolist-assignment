//dom constants
const taskForm = document.querySelector('.main__form');
const taskTekst = document.querySelector('.main__task-text');
const siteBtn = document.querySelector('.main__btn');
const siteList = document.querySelector('.main__list');

//functions
const resetSearchField = () => {
    taskTekst.value = '';
};

const addIdToTask = (id) => {
    let mostRecentTask = siteList.lastChild;
    mostRecentTask.id = id;
};

const removeTaskFromDom = (id) => {
    let taskToBeRemoved = document.getElementById(id);
    siteList.removeChild(taskToBeRemoved);
};

const markTaskInDom = (id) => {
    let taskToBeMarked = document.getElementById(id).firstElementChild;
    let taskText = document.getElementById(id).children[1];
    if (taskToBeMarked.src.includes('unchecked.png')) {
        taskToBeMarked.src = './icons/checked.png';
        taskText.classList.toggle('main__list-text--marked');
        return true;
    } else {
        taskToBeMarked.src = './icons/unchecked.png';
        taskText.classList.toggle('main__list-text--marked');
        return false;
    };
};

const editTaskInDom = (id, edittedTask) => {
    let taskToBeEditted = document.getElementById(id).children[1];
    taskToBeEditted.innerHTML = edittedTask;
};

const promptEdit = (text) => {
    return window.prompt('Please edit your task', text);
};

//adds task to the dom based on the description, creates li > img,span,img,img structure and adds approprate classes
const addTaskToDom = (descrption, done) => {
    let newLi = document.createElement('li');
    newLi.classList.add('main__list-item');
    let newMark = document.createElement('img')
    newMark.classList.add('main__list-mark');
    if (done == true) {
        newMark.src = "./icons/checked.png"
    } else {
        newMark.src = "./icons/unchecked.png"
    };
    let newText = document.createElement('span');
    newText.classList.add('main__list-text')
    newText.innerHTML = descrption;
    if (done == true) {
        newText.classList.toggle('main__list-text--marked');
    };
    let newEdit = document.createElement('img')
    newEdit.classList.add('main__list-edit');
    newEdit.src = "./icons/edit.png"
    let newDelete = document.createElement('img')
    newDelete.classList.add('main__list-delete');
    newDelete.src = "./icons/delete.png"
    newLi.appendChild(newMark);
    newLi.appendChild(newText);
    newLi.appendChild(newEdit);
    newLi.appendChild(newDelete);
    siteList.appendChild(newLi);
};

//adds listeners to buttons based on last added list item
const addEventListenersToTask = () => {
    let markArr = Array.from(document.querySelectorAll('.main__list-mark'));
    markArr[markArr.length - 1].addEventListener('click', (event) => {
        markTask(event.path[1].id);
    });
    let textArr = Array.from(document.querySelectorAll('.main__list-text'));
    textArr[textArr.length - 1].addEventListener('click', (event) => {
        markTask(event.path[1].id);
    });
    let editArr = Array.from(document.querySelectorAll('.main__list-edit'));
    editArr[editArr.length - 1].addEventListener('click', (event) => {
        editTask(event.path[1].id, event.path[1].children[1].innerHTML);
    });
    let deleteArr = Array.from(document.querySelectorAll('.main__list-delete'));
    deleteArr[deleteArr.length - 1].addEventListener('click', (event) => {
        deleteTask(event.path[1].id);
    });
};


//event listeners
taskForm.addEventListener('submit', (event) => {
    addTask(event);
});