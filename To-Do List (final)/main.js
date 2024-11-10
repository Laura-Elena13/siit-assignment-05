const todoForm = document.getElementById('todo-form');
const todoTasks = document.getElementById('todo-tasks');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const newTask = todoTasks.value;

  if (newTask === '') {
    return;
  }
  todoTasks.value = '';
  addTask(newTask);
});

function addTask(task) {
  const listItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('name', 'checkbox');
  listItem.appendChild(checkBox);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'del';
  listItem.appendChild(deleteBtn);

  todoList.appendChild(listItem);
  
  checkBox.addEventListener('change', function() {
    if (this.checked) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = 'none';
    }
  });
 
  deleteBtn.addEventListener('click', function() {
    if (deleteBtn.click) {
      alert('Are you sure you want to remove this item?');
      const listItem = this.parentElement;
      listItem.classList.add('deleted');
      
      setTimeout(() => {
        listItem.remove();
      }, 1500);
    }
  });
};
