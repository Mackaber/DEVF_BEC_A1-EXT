//- Comprender qué es una promesa y sus tres estados.

const promise = new Promise((resolve, reject) => {

    // Fallar de forma aleatoria 1/5
    const sucess = Math.random() < 0.80

    if(sucess) {
        resolve({
            created: 1
        })
    } else {
        reject({
            error: "There was an error"
        })
    }

})

//- Aplicar .then y .catch para manejar resultados.

promise.then((response) =>{
    console.log(`Funciono! ${JSON.stringify(response)}`);
}).catch((response) => {
    console.log(`No jalo :( ${JSON.stringify(response)}`);
})

//- Convertir promesas a async/await.

try {
    const response = await promise
    console.log(`Funciono (con ASYNC/AWAIT)! ${JSON.stringify(response)}`)
} catch(error) {
    console.log(`No jalo :( ${JSON.stringify(error)}`);
} 

//- Manejar errores con try/catch.