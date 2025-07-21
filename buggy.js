// Hint: Bug 4
taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const totalTasksSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTasks');
const remainingTasksSpan = document.getElementById('remainingTasks');

let tasks = [];
let taskIdCounter = 0;

addBtn.addEventListener('click', addTask); //typo "Listner"

// Hint: Bug 6
taskInput.addEventListener('keypress', function(event) { //call "event" object
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    // Hint: Bug 7
    if (taskText === '') { //"===" is equalvilant to assigning
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: ++taskIdCounter,
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = '';
    renderTasks();
    updateStats();
}

function renderTasks() {
    taskList.innerHTML = '';
    
    // Hint: Bug 8
    for (let index of tasks) { //"let..in.." isn't used for looping through indicies
        const task = tasks[index];
        const taskItem = createTaskElement(task);
        taskList.appendChild(taskItem);
    }
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    
    // No bug 9 because it's too confusing but we encourage to try to understand this code
    li.innerHTML = `
        <span class="task-text ${task.completed ? 'task-completed' : ''}">${task.text}</span>
        <div class="task-actions">
            <button class="complete-btn" onclick="toggleTask(${task.id})">
                ${task.completed ? 'Undo' : 'Complete'}
            </button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </div>`
    
    return li;
}

function toggleTask(taskId) {
    // Hint: Bug 10
    const task = tasks.find(t => t.id === taskId); //need to compare t.id to taskId not assign
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        updateStats();
    }
}

function deleteTask(taskId) {
    // Hint: Bug 11
    tasks = tasks.filter(task => task.id !== taskId); //typo "filer"
    renderTasks();
    updateStats();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const remaining = total - completed;

    totalTasksSpan.textContent = total;
    completedTasksSpan.textContent = completed;
    remainingTasksSpan.textContent = remaining;
}

function clearAllTasks() {
    tasks = [];
    renderTasks();
    updateStats();
}

// Hint: Bug 13
document.addEventListener('DOMContentLoaded', function() {
    console.log('App loaded!');
    // Hint: Bug 14
    initializeApp(); //DON'T FORGET YOUR SEMICOLONS
});