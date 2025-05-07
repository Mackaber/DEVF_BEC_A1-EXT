// Callbacks

// Settimeout
const callback = saludar = () => {
    console.log("Hola!")
}
const tiempo_en_milisegundos = 3000

setTimeout(callback, tiempo_en_milisegundos)


// Saludos con estilo


const saludoFormal = (mensaje) => {
    return `Buenas tardes ${mensaje}`
}

const saludoCasual = (mensaje) => {
    return `Que onda ${mensaje}`
}

const saludarFn = (tipoSaludo, nombre) => {
    console.log(`saludando a ${nombre} con tipo de saludo ${tipoSaludo}`)
    return tipoSaludo(nombre)
}

console.log(saludarFn(saludoCasual, "Mackaber"))
console.log(saludarFn(saludoFormal, "Mackaber"))
console.log(saludarFn((mensaje) => `Hola, que tal ${mensaje}`, "Mackaber"))
console.log(saludarFn(function(mensaje) { return `Hola, que tal ${mensaje}` } , "Mackaber"))

// Uso de callbacks en los API's