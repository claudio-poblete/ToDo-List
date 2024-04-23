document.addEventListener('DOMContentLoaded', ()=>{
  const addButton = document.querySelector('#btn-add-task')
  addButton.addEventListener('click', addTask)
})


let tasks = []
let totalTasks = 0
let completedTasks = 0

let counter = 1;
const generateId = () =>{
  return counter++
}

const addTask = () =>{
  const taskInput = document.querySelector('#new-task')
  const taskName = taskInput.value.trim()
  if(taskName !== ''){
    const taskId = generateId()
    const task = {
      id: taskId,
      taskName: taskName,
      completed: false
    }
    tasks.push(task)
    totalTasks++
    updateCompletedTasks()
    taskInput.value = ''
    renderTasks()
  }else{
    alert('Por favor, ingresa una tarea')
  }
}

const toggleTaskStatus = (taskId) =>{
  const taskIndex = tasks.findIndex(task => task.id === taskId)
  if(taskIndex !== -1){
    tasks[taskIndex].completed = !tasks[taskIndex].completed
    if(tasks[taskIndex].completed){
      completedTasks++
    }else{
      completedTasks--
    }
    renderTasks()
  }
}

const deleteTask = (taskId) =>{
  tasks = tasks.filter(task => task.id !== taskId)
  totalTasks--
  updateCompletedTasks()
  renderTasks()
}

const updateCompletedTasks = ()=>{
  completedTasks = tasks.filter(task => task.completed).length
}

let taskSection = document.querySelector('#task-section')
const renderTasks = () =>{
  let template = ''
  tasks.forEach((task =>{
    template += `
      <div class="task-section-container flex-row">
        <div class="task-title-container flex-row">
          <div class="id-title">
            <h3 id="task-id">${task.id}</h3>
          </div>
          <div id="task-name" class="task-title">
            <h3>${task.taskName}</h3>
          </div>
        </div>
        <div class="check flex-row">
          <div>
            <a id="done-button-${task.id}" class="check-button">Realizado</a>
          </div>
          <div>
            <a id="delete-button-${task.id}" class="delete-button">Borrar</a>
          </div>
        </div>
      </div>
      `
  }))
  taskSection.innerHTML = template

  tasks.forEach((task =>{
    const doneButton = document.querySelector(`#done-button-${task.id}`)
    doneButton.addEventListener('click', () => toggleTaskStatus(task.id))
  }))

  tasks.forEach(task =>{
    const deleteButton = document.querySelector(`#delete-button-${task.id}`)
    deleteButton.addEventListener('click', () => deleteTask(task.id))
  })
}