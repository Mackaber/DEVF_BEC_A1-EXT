// Igualdad debil
let a = "palabra"
let b = "palabra"

console.log(a == b) // true

let x = 0
let y = "0"

console.log(x == y) // true

// Igualdad fuerte

console.log(a === b) // true
console.log(x === y) // false

// Desigualdad debil

console.log(a != b) // false

// Desigualdad fuerte

console.log(a !== b) // false

// Mayor que
let z = 10
let w = 5

console.log(z > w) // true

// Menor que
console.log(z < w) // false

// Mayor o igual que
console.log(z >= w) // true

// Menor o igual que
console.log(z <= w) // false


let edad_minima = 18
let edad = 18

console.log(edad >= edad_minima)