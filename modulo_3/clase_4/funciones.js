// Sintaxis
function nombre_de_la_funcion(parametros) {


}

// Para llamarla
let parametros = null
nombre_de_la_funcion(parametros)


// Ejemplo

function saludar() {
    console.log("Hola")
}

saludar()
saludar()
saludar()
saludar()

// Ejemplo con parámetros

function saludar(nombre) {
    // let nombre = "Mackaber"
    console.log("Hola " + nombre)
}


saludar("Mackaber")


function multiplicar(a, b) {
    let c = a * b
    console.log(c)
}

multiplicar(2, 5)

// Return

function saludar(nombre) {
    console.log("Hola: " + nombre)
}

function pasar_a_mayusculas(nombre) {
    return nombre.toUpperCase()
}


let nombre_minusculas = "mackaber"

// pasar a mayúsculas
let nombre_mayusculas = pasar_a_mayusculas(nombre_minusculas)

saludar(nombre_mayusculas)

// Scope

let numero_cien = 100

function multiplicar_por_cien(x, numero_cien) {
    return x*numero_cien
}

let result = multiplicar_por_cien(5, 400)
console.log(result)

console.log("-----------------------")
// Ejemeplo


let persona_random = "Luis"
function escuela() {

    let padre_de_familia = "Jose"
    let alumno = "Javier"

    function patio() {
        let alumno = "Cesar"

        console.log(alumno)
        console.log(padre_de_familia)
        console.log(persona_random)
    }

    patio()

}

escuela()

// Funciones anónimas



// Usando funciones como parametros
function saludar_con_estilo(nombre, estilo) {
    return "Hola: " + estilo(nombre)
}

function formal(nombre) {
    return "Sr./Sra. " + nombre
}

function informal(nombre) {
    return "Compa " + nombre
}

result = formal("Luis")
console.log(result)

result = saludar_con_estilo("Mackaber", informal)
console.log(result)


// Usar funciones anonimas
let mi_nombre = "Mackaber"
result = saludar_con_estilo(mi_nombre, formal)
console.log(result)


result = saludar_con_estilo(mi_nombre, function(nombre) {
    return "Hace mucho que no te veía, como te ha ido? " + nombre
})
console.log(result)

// Funciones flecha

let mi_var = 5

/*function mi_func() {


}*/

/*
let mi_func = function() {

}

let mi_funct = () => {
    return 
}

let mi_funct = (a,b) => a*b
let mi_funct = a => a*a
*/

// Ejemplos de funciones flecha

let suma = function(a,b) {
    return a + b
}

let resta = (a,b) => {
    return a - b
}

let multiplicar = (a,b) => a*b

let al_cuadrado = a => a*a

let operarar = (op, val_a, val_b) => op(val_a, val_b)


operarar((a,b) => a + b, 5, 10)