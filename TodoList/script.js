const taskField = document.querySelector('#taskField');
const taskButton = document.querySelector('#taskButton');
const taskTable = document.querySelector('#taskTable');
const taskTableBody = document.querySelector('#taskTable tbody');

var tasks = [];

taskButton.addEventListener('click', function(e) {
    addTask();
});

function addTask() {
    let taskValue = taskField.value;

    let task = { value: taskValue, status: 'status_done' }

    tasks.push(task);
    
    UpdateTaskTable();
}

function UpdateTaskTable() {
    // taskTable.innerHTML = null;
    // todo: see if we can update on change
    let tableCell1;
    let tableCell2;
    let tableCell3;
    taskTableBody.innerHTML = '';
    
    for (let i = 0; i < tasks.length; i++) {

        let tableRow = document.createElement('tr');
        tableCell1 = document.createElement('td');
        tableCell1.innerText = tasks[i].value;

        tableRow.addEventListener('click', function() {
            tableRow.classList.toggle('status_done');
        });
        
        tableRow.appendChild(tableCell1);
        
        tableCell2 = document.createElement('td');
        tableCell2.innerHTML = 'Active';
        tableRow.appendChild(tableCell2);

        tableCell3 = document.createElement('td');

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('btn');
        deleteButton.classList.add('btn-danger');
        
        deleteButton.addEventListener('click', function(e) {
            const deleteIndex = tasks.indexOf(tasks[i]);
            tasks.splice(deleteIndex,1);
            console.log(tableRow.remove());
        });
        tableCell3.appendChild(deleteButton);
        tableRow.appendChild(tableCell3);

        taskTableBody.appendChild(tableRow);
    }
}