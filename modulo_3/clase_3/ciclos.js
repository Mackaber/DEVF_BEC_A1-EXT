/* ciclo {
... dentro que se repite
}*/

let a = 5

// Multipicacion (no existe el *)

// res = 57283728 * 23923892382398

// 9 veces
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5
a = a + 5

console.log(a)

// numero de ciclos = 9

/* Mientras los ciclos/iteraciones sean menores a 10 {
    a = a + 5
}*/

let i = 10 // numero de iteraciones
let b = 0

while (i < 10) {
    b = b + 5
    i = i + 1
}

console.log(b)

// Es equivalente a

i = 0
b = 0

if(i < 10) {
    b = b + 5
    i = i + 1
}
if(i < 10) {
    b = b + 5
    i = i + 1
}
if(i < 10) {
    b = b + 5
    i = i + 1
}
if(i < 10) {
    b = b + 5
    i = i + 1
}
if(i < 10) {
    b = b + 5
    i = i + 1
}
if(i < 10) {
    b = b + 5
    i = i + 1
}
if(i < 10) {
    b = b + 5
    i = i + 1
}
if(i < 10) {
    b = b + 5
    i = i + 1
}
if(i < 10) {
    b = b + 5
    i = i + 1
}
if(i < 10) {
    b = b + 5
    i = i + 1
}

console.log(b)


// Ciclo For

//let c = 0
//let i = 0

//while (i < 10) {
//    c = c + 5
//    i = i + 1
//}
let c = 0
for(let i = 0; i < 10; i = i + 4) {
   c = c + 5
}

c = 0
for(let i = 0; i < 10; i++) {
    c = c + 5
}
console.log(c)

for(let i = 0; i < 10; i++) {
    

}

//for(;parar != true;) {

//}




// Reto
console.log("---Reto---")

console.log("--- Ciclo While ---")

i = 0
b = 0
while (i < 10) {
    i = i + 1
    b = b + 5
    console.log("Valor de i:")
    console.log(i)
}
console.log(b)

console.log("--- Ciclo For ---")

b = 0
for(let i = 0; i < 10; i++) {
    b = b + 5
    console.log("Valor de i:")
    console.log(i)
}
console.log(b)
