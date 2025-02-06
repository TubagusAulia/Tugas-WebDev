
function addTask() {
    const input = document.getElementById('tf-input').value;
    if (!input.trim()) return;

    const task = document.createElement('li');
    task.id =
        new Date().valueOf().toString() +
        Math.random().toString(36).substring(2, 7);
    task.classList.add('list-item');

    const taskName = document.createElement('span');
    taskName.textContent = input;
    taskName.classList.add('task-name');
    task.appendChild(taskName);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => editTask(task.id));
    task.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => deleteTask(task.id));
    task.appendChild(deleteButton);

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.classList.add('edit-input');
    editInput.style.display = 'none'; 
    task.appendChild(editInput);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('save-button');
    saveButton.style.display = 'none';
    saveButton.addEventListener('click', () => saveTask(task.id));
    task.appendChild(saveButton);

    document.getElementById('task-container').appendChild(task);
    document.getElementById('tf-input').value = '';
}

function editTask(id) {
    const task = document.getElementById(id);
    const taskName = task.querySelector('.task-name');
    const editInput = task.querySelector('.edit-input');
    const editButton = task.querySelector('.edit-button');
    const deleteButton = task.querySelector('.delete-button');
    const saveButton = task.querySelector('.save-button');

    editInput.value = taskName.textContent;

    taskName.style.display = 'none';
    editButton.style.display = 'none';
    deleteButton.style.display = 'none';

    editInput.style.display = 'inline-block';
    saveButton.style.display = 'inline-block';
}

function saveTask(id) {
    const task = document.getElementById(id);
    const taskName = task.querySelector('.task-name');
    const editInput = task.querySelector('.edit-input');
    const editButton = task.querySelector('.edit-button');
    const deleteButton = task.querySelector('.delete-button');
    const saveButton = task.querySelector('.save-button');

    if (!editInput.value.trim()) return; 

    taskName.textContent = editInput.value;

    editInput.style.display = 'none';
    saveButton.style.display = 'none';

    taskName.style.display = 'inline';
    editButton.style.display = 'inline-block';
    deleteButton.style.display = 'inline-block';
}

function deleteTask(id) {
    const task = document.getElementById(id);
    task.remove();
}

function initializeEditButtons() {
    const taskItems = document.querySelectorAll('.list-item');
    taskItems.forEach((task) => {
        const editButton = task.querySelector('.edit-button');
        if (editButton) {
            editButton.addEventListener('click', () => {
                const taskId = task.id;
                editTask(taskId);
            });
        }
    });
}
