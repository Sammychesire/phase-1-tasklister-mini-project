document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo (form.querySelector('#new-task-description').value)
    form.reset()
  
  })
  
});

 function handleToDo(todo){
    let p = document.createElement('p');
  p.textContent = todo
   let button = document.createElement('button')
    button.textContent = ('x')
    p.appendChild(button)
   button.addEventListener('click', (e) => e.target.parentNode.remove())
    document.querySelector('#tasks').appendChild(p)
  }