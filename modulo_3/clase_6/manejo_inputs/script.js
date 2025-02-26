let button = document.getElementById("button")
let result = document.getElementById("result")

// Add event listener

button.addEventListener("click", () => {
    console.log("Boton presionado!")

    console.log("El nombre del usuario es: " + nombre.value)

    result.innerHTML = "Bienvenido " + nombre.value

    // Para poner HTML Debajo y de forma multiple
    //original_html = result.innerHTML
    // result.innerHTML += "<p>Hola " + nombre.value + "</p><br>"
})


// Acceder a los inputs

/*
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let telefono = document.getElementById("telefono")
let contraseña = document.getElementById("contraseña")
let fecha = document.getElementById("fecha")
let hora = document.getElementById("hora")
let numero = document.getElementById("numero")
let url = document.getElementById("url")
let color = document.getElementById("color")
let archivo = document.getElementById("archivo")
let genero = document.getElementById("genero")
let intereses = document.getElementById("intereses")
let terminos = document.getElementById("terminos")
*/

let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    let { nombre,
        apellido,
        email, 
        telefono, 
        contraseña, 
        fecha, 
        hora, 
        numero, 
        url, 
        color, 
        archivo, 
        genero, 
        intereses, 
        terminos 
    } = event.target

    console.log("El nombre del usuario es: " + nombre.value)
    console.log("El apellido del usuario es: " + apellido.value)
    console.log("El correo del usuario es: " + email.value)
    console.log("El telefono del usuario es: " + telefono.value)
    console.log("La contraseña del usuario es: " + contraseña.value)
    console.log("La fecha del usuario es: " + fecha.value)
    console.log("La hora del usuario es: " + hora.value)
    console.log("El numero del usuario es: " + numero.value)
    console.log("La url del usuario es: " + url.value)
    console.log("El color del usuario es: " + color.value)
    console.log("El archivo del usuario es: " + archivo.value)
    console.log("El genero del usuario es: " + genero.value)
    console.log("Los intereses del usuario son: " + intereses.value)
    console.log("Los terminos del usuario son: " + terminos.checked)


    // Con Object.values...

    console.log("Con Object.values...")
    let values = Object.values(event.target)
    for (let i = 0; i < values.length; i++) {
        console.log(event.target[i].name + "-> " + event.target[i].value)
    }

    // event.target.nombre
})