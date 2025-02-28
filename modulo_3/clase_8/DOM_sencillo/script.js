// Paso 1. Obtener elemento del input del DOM y agregarle un listener
let agregar_button = document.getElementById("agregar_button")

// Paso 2.1 Obtener el valor del input del DOM
let entry_input = document.getElementById("entry_input")

// Paso 3.2 Obtener el elemento del contenedor del DOM
let contenedor = document.getElementById("contenedor")

agregar_button.addEventListener("click", function (event) {
    console.log("Botón presionado!")

    // Paso 2.2 Obtener el valor del input
    console.log(entry_input.value)

    // Paso 3.3  Usar innerHTML
    //contenedor.innerHTML = entry_input.value

    // Paso 4. Usar createHTMLElement y appendChild
    let element = document.createElement("div")
    element.innerHTML = entry_input.value
    contenedor.appendChild(element)
    
})