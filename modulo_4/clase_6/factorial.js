// Factorial

// 5! = 5*4*3*2*1
// 9! = 9*8*7*6*5*4*3*2*1

function factorial(x) {
    debugger;
    if(x === 0) { // Condición de parada | caso base
        return 1;
    }
    return x * factorial(x - 1); // Se llama a si misma

}

let total = factorial(5); // Primera llamada
console.log(total)

/*
factorial(5)
//...
if() ///...
return 5 * 24

factorial(4)
//...
if()//...

return 4 * 6

factorial(3)
//...
if() //...

return 3 * 2

factorial(2)
// ...
if() //...

return 2 * 1

factorial(1)
//...
if() //...

return 1 * 1

factorial(0)
if(x === 0)
    return 1
*/