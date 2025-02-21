let button = document.getElementById("button")
let result = document.getElementById("result")

// Add event listener

button.addEventListener("click", () => {
    console.log("Boton presionado!")

    console.log("El nombre del usuario es: "  + nombre.value)

    result.innerHTML = "Bienvenido " + nombre.value
})


// Acceder a los inputs

let nombre = document.getElementById("nombre")
let email = document.getElementById("email")

