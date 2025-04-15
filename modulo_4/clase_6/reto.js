// Fibonacci
function fibo(n) {
    // Caso(s) base
    if(n === 0) {
        return 0
    }

    if(n === 1) {
        return 1
    }

    /*
    if(n === 2) {
        return 1
    }

    if(n === 3) {
        return 2
    }

    if(n === 4) {
        return 3
    }

    if(n === 5) {
        return 5
    }

    if(n === 6) {
        return fibo(6-2) + fibo(6-1) 
    }

    if(n === 7) {
        return fibo(7-2) + fibo(7-1) 
    }
    */

    // Llamada recursiva
    return fibo(n-2) + fibo(n-1) /* */

}


// Primera llamada
// n representa el valor en la posicion de la secuencia
let result = fibo(7) // 21
console.log(result)