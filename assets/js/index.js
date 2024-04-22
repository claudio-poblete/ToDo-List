import { tasks } from './data/tareas.js'

const addButton = document.querySelector('#btn-add-task')
let addTask = document.querySelector('#new-task')
let totalTask = document.querySelector('#total-task')
let taskSection = document.querySelector('#task-section')
const doneButton = document.querySelector('#done-button')
const deleteButton = document.querySelector('#delete-button')
//función para agregar objetos a la lista
let idNumber = 0
let count = 0
totalTask.innerHTML = 0


const addToList = () =>{
  let template = ''
  const newTask  = addTask.value
  if(newTask === ''){
    alert("Debes ingresar una tarea")
  }else{
    idNumber++
    count++
    tasks.push({id: idNumber, taskName: newTask, doneTask: false})
    for (let task of tasks){
      if(task.doneTask === false){
        if(tasks.length > 0){
          totalTask.innerHTML = count
        }
      }
    }
    tasks.forEach((test =>{
      template += `
      <div class="task-section-container flex-row">
        <div class="task-title">
          <h3>${test.taskName}</h3>
        </div>
        <div class="check flex-row">
          <div>
            <a id="done-button" class="check-button">Realizado</a>
          </div>
          <div>
            <a id="delete-button" class="delete-button">Borrar</a>
          </div>
        </div>
      </div>
      `
      taskSection.innerHTML = template
    }))
  }
}

addButton.addEventListener('click', addToList)




//funcion para contar elementos agregados y realizados de la lista


