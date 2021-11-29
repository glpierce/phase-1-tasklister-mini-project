document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById(`create-task-form`)
  const submitButton = document.getElementById(`submit-button`)
  submitButton.addEventListener(`click`, addTask)
  const taskArray = []

  function  addTask(e) {
    e.preventDefault()
    const li = document.createElement(`li`)
    const textInput = document.getElementById(`new-task-description`).value
    li.textContent = `${textInput} `
    const button = document.createElement(`button`)
    button.addEventListener(`click`, removeTask)
    button.textContent = `x`
    li.appendChild(button)
    document.getElementById(`tasks`).appendChild(li)
    taskArray.push(li)
  }

  function removeTask(e) {
    e.target.parentNode.remove()
    taskArray.splice(taskArray.indexOf(e.target), 1)
  }

});


