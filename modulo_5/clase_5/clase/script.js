const basic_input = document.getElementById("basic_input")
//const basic_input = document.querySelector("#basic_input")
const print_console_btn = document.getElementById("print_console_btn")
const basic_form = document.getElementById("basic_form")
const form_input = document.getElementById("form_input")
const calc_form = document.getElementById("calc_form")
const login_form = document.getElementById("login_form")
const email_error = document.getElementById("email_error")

const input_prueba = document.getElementById("input_prueba")

// x@mackabe.me
const validEmail = (email) => {
    const incluye_arroba = email.includes("@") 
    const incluye_punto = email.includes(".") 

    const pos_arroba = email.indexOf("@") 
    const pos_punto = email.indexOf(".") 

    return incluye_arroba && incluye_punto && pos_arroba < pos_punto
}

// Noten el evento que se utiliza
print_console_btn.addEventListener("click", () => {
    console.log("El botón ha sido presionado")

    console.log(basic_input.value)
})

basic_form.addEventListener("submit", (ev) => {

    // Evitar que se envíe el formulario
    ev.preventDefault()

    console.log("Se hizo submit del form")

    console.log(form_input.value) // Funciona, pero no es lo ideal

    // Evento (ev) -> Form (target) -> Input (nombre del input) -> value
    console.log(ev.target.form_input.value)
})

calc_form.addEventListener("submit", (ev) => {
    ev.preventDefault()

    const number_1_str = ev.target.number_1.value
    const number_2_str = ev.target.number_2.value

    const number_1 = Number(number_1_str)
    const number_2 = Number(number_2_str)


    console.log(typeof number_1)

    // debugger Detiene el código para diseccionarlo
    //debugger

    // Validar mis inputs

    // Si alguno de los inputs NO es un número, imprimir mensaje de error...
    // Else imprimir la suma...
    if( isNaN(number_1) || isNaN(number_2) ) {
        console.error("Input inválido")
    } else {
        //Para transformar un String a numero usamos: Number() 
        console.log(number_1 + number_2)
    }

})

login_form.addEventListener("submit",(ev) => {
    ev.preventDefault()

    const email = ev.target.email.value
    const password = ev.target.password.value


    // debugger

    // Validación
    if(validEmail(email)) {
        console.log("Bienvenido")
    } else {
        console.error("Correo inválido")

        email_error.style.display = "block"
        email_error.innerHTML = "Correo inválido"
    }
})

input_prueba.addEventListener("change", () => {
    console.log("El input de prueba tuvo el evento change")
})

input_prueba.addEventListener("keyup", () => {
    console.log("El input de prueba tuvo el evento keyup")
})

input_prueba.addEventListener("keydown", () => {
    console.log("El input de prueba tuvo el evento keydown")
})