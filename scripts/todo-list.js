//functions
const loadTasks = async () => {
    let tasks = await getData("");
    tasks.forEach(element => {
        addTaskToDom(element.description, element.done);
        addEventListenersToTask();
        addIdToTask(element._id);
    });
};

const addTask = async (event) => {
    let message = taskTekst.value;
    if (message) {
        let task = {
            description: message,
            done: false
        };
        addTaskToDom(task.description, task.done);
        resetSearchField();
        let response = await postItem(task);
        addEventListenersToTask();
        addIdToTask(response._id);
    };
};

const deleteTask = async (id) => {
    removeTaskFromDom(id);
    await deleteItem(id);
};

const markTask = async (id) => {
    let currentMark = markTaskInDom(id);
    if (currentMark) {
        await modifyItem(id, { done: true });
    } else {
        await modifyItem(id, { done: false });
    };
};

const editTask = async (id, text) => {
    let edittedTask = promptEdit(text);
    editTaskInDom(id, edittedTask)
    await modifyItem(id, { description: edittedTask });
};

//initial site load
loadTasks();