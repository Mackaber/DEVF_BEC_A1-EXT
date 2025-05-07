const promesa = new Promise((resolve, reject) => {
    // Llamar al API
    // Llamar a la db
    // Leer Archivos...
    resolve("data")
    //reject("error")
})

// Usando then  

promesa.then((response) => {
    console.log(response)
    return response.substring(1)
}).then((response) => {
    return response.substring(1)
}).then((response) => {
    return response.substring(1)
}).then((response) => {
    console.log(`Response, pero en el 4to then: ${response}`)
}).catch((error) => {
    console.log(error)
})

// Usando Async/Await

let response = await promesa
console.log(response)