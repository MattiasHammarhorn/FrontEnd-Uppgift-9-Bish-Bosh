const taskField = document.querySelector('#taskField');
const taskButton = document.querySelector('#taskButton');
const taskTableBody = document.querySelector('#taskTable tbody');

taskButton.addEventListener('click', function(e) {
    addTask();
});

// Build up a table row with data cells containing info and add events there
function addTask() {
    let taskValue = taskField.value;

    let tableRow = document.createElement('tr');
    tableRow.addEventListener('click', function() {
        tableRow.classList.toggle('status_done');
    });
    
    tableCell1 = document.createElement('td');
    tableCell1.innerText = taskValue;
    tableRow.appendChild(tableCell1);

    tableCell2 = document.createElement('td');

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
        
    deleteButton.addEventListener('click', function(e) {
        console.log(tableRow.remove());
    });

    tableCell2.appendChild(deleteButton);
    tableRow.appendChild(tableCell2);

    taskTableBody.appendChild(tableRow);
}
