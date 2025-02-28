// Paso 1. Obtener elemento del input del DOM y agregarle un listener
let agregar_button = document.getElementById("agregar_button")

// Paso 2.1 Obtener el valor del input del DOM
let entry_input = document.getElementById("entry_input")

// Paso 3.2 Obtener el elemento del contenedor del DOM
let contenedor = document.getElementById("contenedor")

// Paso 6. (extra) Declaramos una variable para guardar las entradas
let entries = { contents: [] }

// Paso 9. (extra) Sacar los entries de localStorage
if(localStorage.getItem("entries")) { // Me aseguro que si exista entries
    // Paso 10. (extra) pasar el JSON de entries a objeto literal
    let entries_JSON = localStorage.getItem("entries")
    entries = JSON.parse(entries_JSON)

    for(let i = 0;i<entries.contents.length;i++) {
        agregar_entry_a_la_interfaz(entries.contents[i])
    }

}

function agregar_entry_a_la_interfaz(entry) {
    // Paso 3.3  Usar innerHTML
    //contenedor.innerHTML = entry

    // Paso 4. Usar createHTMLElement y appendChild
    let element = document.createElement("div")
    element.innerHTML = entry

    // Paso 5. Crear elemento de botón de eliminar
    let delete_button = document.createElement("button")
    delete_button.innerHTML = "x"
    delete_button.addEventListener("click", function(event) {
        contenedor.removeChild(element)

        //??? entries.contents...
    })
    element.appendChild(delete_button)

    // Paso 4. cont...
    contenedor.appendChild(element)
}

agregar_button.addEventListener("click", function (event) {
    console.log("Botón presionado!")

    // Paso 2.2 Obtener el valor del input
    console.log(entry_input.value)

    agregar_entry_a_la_interfaz(entry_input.value)

    // Paso 6. (extra) cont...
    entries.contents.push(entry_input.value)

    // Paso 7. (extra) Pasarlo a string
    let entries_JSON = JSON.stringify(entries)

    // Paso 8. (extra) Pasarlo a localStorage
    localStorage.setItem("entries",entries_JSON)
})