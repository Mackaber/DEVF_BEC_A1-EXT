let todo_form = document.getElementById("todo-form")

todo_form.addEventListener("submit", (e) => {  
    e.preventDefault()

    console.log("Tarea Agregada!")
})