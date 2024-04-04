const taskField = document.getElementById("taskField");
const taskButton = document.getElementById("taskButton");
const taskList = document.getElementById("taskList");
var tasks = [];

taskButton.addEventListener('click', function(e) {
    addTask();
});

function addTask() {
    let taskValue = taskField.value;

    let task = { value: taskValue, status: 'Active' }

    tasks.push(task);
    
    UpdateTaskList();
}

function UpdateTaskList() {
    taskList.innerHTML = null;
    // todo: see if we can update on change
    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerText = tasks[i].value;

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';

        listItem.addEventListener('click', function() {
            listItem.classList.toggle('inactive');
        });
        
        deleteButton.addEventListener('click', function(e) {
            console.log(e.target.parentElement.remove());
        });
        
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }
}