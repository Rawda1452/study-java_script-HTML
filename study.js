function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (!taskText) return;

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskItem.addEventListener('click', function() {
        taskList.removeChild(taskItem);
        const completedList = document.getElementById('completedList');
        taskItem.classList.add('completed');
        completedList.appendChild(taskItem);

        taskItem.removeEventListener('click', arguments.callee);
    });
    taskList.appendChild(taskItem);
    taskInput.value = '';
}