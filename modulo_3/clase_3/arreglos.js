// Arreglos

let a = [1, 2, 3, 4, 5]

// push -> Agregar al final
a.push(6)
console.log(a)

// pop -> Eliminar al final

a.pop()
console.log(a)

// unshift -> Agregar al inicio

a.unshift(0)
console.log(a)

// shift -> Eliminar al inicio

a.shift()
console.log(a)

// sort -> Ordenar

let b = [4,1,6,8,2,5,3,7]
b.sort()
console.log(b)

// map -> Modificar todos los elementos

let c = [1,2,3,4,5]

funcion_de_mapear = function(elemento) {
    return elemento * 2
}

let d = c.map(funcion_de_mapear)

c.map(function(elemento) {
    return elemento * 2
})

console.log(d)