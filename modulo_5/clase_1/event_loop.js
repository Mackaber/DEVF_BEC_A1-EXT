console.log("a")
console.log("b")
console.log("c")
setTimeout(() => { // Despues de 3000 milisegundos ejecuta la funcion
    console.log("d")
}, 3000)
for(let i = 0;i<3000000;i++) {}
console.log("e")