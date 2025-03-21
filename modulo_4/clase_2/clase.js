// Repaso de Arreglos

let mountains = ['Everest', 'Fuji', 'Nanga Parbat']

console.log(mountains[0])
console.log(mountains[1])
console.log(mountains[2])

console.log(mountains.push('Popocatepetl'))
console.log(mountains)
console.log(mountains.indexOf('Fuji'))


function count(a) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
        count = count + 1
    }
    return count
}

count(mountains)

// ar = [1, 2, 3, 4, 5]

//ar.length // JS
// len(ar) // Python

console.log("-----------------------")
// Métodos básicos de Arreglos

let frutas = ['Manzana', 'Pera', 'Naranja', 'Platano']

// unshift -> Agregar al inicio
frutas.unshift('Durazno')
console.log(frutas)

// shift -> Eliminar al inicio
frutas.shift()
console.log(frutas)

// push -> Agregar al final
frutas.push('Uva')
console.log(frutas)

// pop -> Eliminar al final
frutas.pop()
console.log(frutas)

// length (No es un metodo es una propiedad) -> Devuelve el tamaño del arreglo
console.log(frutas.length)

console.log("-----------------------")
// Metodos avanzados de Arreglos


// find
const numeros1 = [1, 5, 10, 15]
const encontrado = numeros1.find(elemento => elemento > 9)
console.log(encontrado)

// map 

const numeros2 = [1, 2, 3, 4]
const dobles = numeros2.map(elemento => elemento * 2)
console.log(dobles)

function mapear(arreglo, funcion) {
    let nuevo_arreglo = []
    for (let i = 0; i < arreglo.length; i++) {
        nuevo_arreglo.push(funcion(arreglo[i]))
    }
    return nuevo_arreglo
}

let result = mapear(numeros2, elemento => elemento * 2)
console.log(result)

// filter

const numeros3 = [1, 2, 3, 4, 5]
const pares = numeros3.filter(elemento => elemento % 2 == 0)
console.log(pares)

// forEach
const nombres = ['Mackaber', 'Luis', 'Ana', 'Pedro']
nombres.forEach(elemento => console.log(`Hola ${elemento}!`))

// sort -> Este metodo modifica el arreglo
const numeros4 = [1, 55, 11, 2, 33, 6, 88, 22]
numeros4.sort() // Ordena de forma alfabetica
console.log(numeros4)

numeros4.sort((a, b) => a - b) // Ordena de forma numerica
console.log(numeros4)

// Math.random()
numeros4.sort((a,b) => Math.random() - 0.5)
console.log(numeros4)