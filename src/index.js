document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    let imput = document.querySelector("#new-task-description").value
    handle(imput)
  })
})

function handle(newTaskDescription){
  console.log(newTaskDescription)
  let li = document.createElement('li')
  li.textContent = newTaskDescription
  let list = document.querySelector("#tasks")
  list.appendChild(li)
  console.log(li)
}