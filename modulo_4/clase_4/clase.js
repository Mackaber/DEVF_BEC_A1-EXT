// Algoritmo de los dos punteros


// Buscar pares de elementos que cumplan una condición:

// lista aleatoria de numeros ordenados



function buscarPares(valores, objetivo) {
    let izquierda = 0 // puntero_1
    let derecha = valores.length - 1// puntero_2

    while(izquierda<derecha) {
        let suma = valores[izquierda] + valores[derecha]
        if(suma === objetivo) {
            console.log(`Encontramos el par es: ${valores[izquierda]}, ${valores[derecha]}`)
            break
        } else if(suma < objetivo) {
            izquierda++ // izquierda+=1; izquierda = izquierda + 1
        } else {
            derecha--
        }
    }

    console.log("No se pudo encontrar ningun par")
}

// Objetivo 102
const valores = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const objetivo = 102

buscarPares(valores, objetivo)

console.log("---------------")
// Invertir un arreglo



function invertirArreglo(arreglo) {
    let izquierda = 0
    let derecha = arreglo.length - 1

    while(izquierda<derecha) {

        let aux_izquierda = arreglo[izquierda]
        let aux_derecha = arreglo[derecha]

        arreglo[izquierda] = aux_derecha
        arreglo[derecha] = aux_izquierda


        // Arreglo invertido = [valores[izquierda], valores[derecha]] = [valores[derecha], valores[izquierda]]

        izquierda++ // izquierda+=1; izquierda = izquierda + 1
        derecha--
    }

    console.log(arreglo)
}

const valores2 = [3, 4, 2, 1, 8, 7] // [7,8,1,2,4,3]
invertirArreglo(valores2)

