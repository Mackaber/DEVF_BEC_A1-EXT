// Métodos adicionales de Arreglos

// Reduce

const numeros = [1, 2, 3, 4]
// const fn = (acumulador, elemento) => acumulador + elemento
const suma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)
console.log(suma);

// numero máximo
const numeros2 = [3, 5, 66, 2, 8, 27, 3, 1]
const max = numeros2.reduce((current_max, elemento) => {
    if(elemento > current_max) // 2 > 66
        return elemento
    else 
        return current_max
}, 0) // current_max = 66

// const max = numeros2.reduce((current_max, elemento) => elemento > current_max ? elemento : current_max, 0)
console.log(max)

console.log("---------------------")
// Every

const numeros3 = [2, 4, 6, 8]
const todosPares = numeros3.every(elemento => elemento % 2 === 0)
console.log(todosPares)
console.log(numeros3[0] % 2 === 0 && numeros3[1] % 2 === 0 && numeros3[2] % 2 === 0 && numeros3[3] % 2 === 0)


console.log("----------------")
// Some

const numeros4 = [1, 2, 3, 4, 5]
const hayPares = numeros4.some(elemento => elemento % 2 === 0)
console.log(hayPares)
console.log(numeros4[0] % 2 === 0 || numeros4[1] % 2 === 0 || numeros4[2] % 2 === 0 || numeros4[3] % 2 === 0)


console.log("-----------------")

// Includes

const nombres = ["Ana", "Juan", "Pedro"]
const incluyeJuan = nombres.includes("Mackaber")
console.log(incluyeJuan)

/*
let estudiante = {
    nombre: "Ana",
    materias_calificaciones: [
        {"Matematicas": 90}, {"Historia": 85}, {"Ciencias": 92}
    ]
}

let estudiante = {
    nombre: "Ana",
    materias: [
        {
            nombre: "Matemáticas",
            calificacion: 90
        },
        {
            nombre: "Historia",
            calificacion: 85
        },
        {
            nombre: "Ciencias",
            calificacion: 92
        }
    ]
}*/

console.log("---------------")

let carritoCompras = {
    productos: [],
    agregarProducto: function(producto) {
        this.productos.push(producto)
    },
    eliminarProducto: function (indice) {
        this.productos.splice(indice, 1)
    },
    this_en_objeto: function() {
        return this
    },
    this_en_arrow_function: () => {
        return this
    }
}

carritoCompras.agregarProducto("Manzanas")
carritoCompras.agregarProducto("Plátanos")
carritoCompras.agregarProducto("Uvas")
console.log(carritoCompras.productos)

carritoCompras.eliminarProducto(0)
console.log(carritoCompras.productos)

console.log(carritoCompras.this_en_objeto())
console.log(carritoCompras.this_en_arrow_function())