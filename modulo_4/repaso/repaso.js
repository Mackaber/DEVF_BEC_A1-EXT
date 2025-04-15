/*
let i = 0
while(i < 10) { 
    console.log(i)
    i++
}
*/

let i = 0

while(true) {
    if(i >= 10) { // Caso base | Condición de parada
        break
    }
    console.log(i)
    i++
}

console.log("----------------------------")

function iterar(i) {
    if(i >= 10) { // Caso base | Condición de parada
        return
    }

    console.log(i)

    return iterar(i+1) // Hacer la recursión
}

iterar(0) // Primera llamada