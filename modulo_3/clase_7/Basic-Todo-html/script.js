let todo_form = document.getElementById("todo-form")
let todo_container = document.getElementById("todo-container")
let id = 1

todo_form.addEventListener("submit", (e) => {  
    e.preventDefault()
    // Añadir el listener al botón de borrar

    // 1. Por medio de class

    /*
    todo_container.innerHTML += `
    <div id="todo-elment-${id}">
        ${e.target.todo.value}
        <button id="todo-delete-${id}" class="button-delete">x</button>
    </div>
    `

    let buttons_delete = document.getElementsByClassName("button-delete")
    for(let i=0; i<buttons_delete.length;i++) {
        buttons_delete[i].addEventListener("click", (event) => {
            console.log(event)
        })
    }
    */
    

    // 2. Usando addNode
    let new_todo = document.createElement("div")
    new_todo.innerHTML = `
    <div id="todo-elment-${id}">
        ${e.target.todo.value}
        <button id="todo-delete-${id}" class="button-delete">x</button>
    </div>
    `
    todo_container.appendChild(new_todo)

    let delete_button = document.getElementById(`todo-delete-${id}`)
    delete_button.addEventListener("click", (e) => {
        let todo = e.target.parentElement.parentElement  // todo item
        // 1. display: none
        
        // todo.style.display = "none"
        
        // 2. removeChild

        todo_container.removeChild(todo)
    })

    id++

    console.log("Tarea Agregada!")
})

