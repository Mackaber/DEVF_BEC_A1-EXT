// Importar fs (file system)
const fs = require("fs");

const filePath = './example.txt' // .\example.txt

// 1. Revisar si el archivo existe.
console.log(fs.existsSync(filePath))

console.log("------------------")

// 2. Leer el archivo

// UTF-8 es el encoding del archivo, (Especificamos que se trate de un archivo de texto)

// 2.1 Lectura Asíncrona


// 2.1.1 Con callbacks
fs.readFile(filePath, "utf-8", (err, data) => {
    console.log(data)
})

fs.readFile("./no_existe", "utf-8", (err, data) => {

    if(err) {
        console.log(err)
    }

    console.log(data)
})


// 2.2 Lectura Síncrona 

const fileContent = fs.readFileSync(filePath, "utf-8")
console.log(`Datos del archivo ${fileContent.toString()}`)


// 3.0 Escribir el archivo

// Sobreescribe todo el archivo
/*
fs.writeFile(filePath, "Otra cosa", (err) => {
    if(err) {
        console.log(err)
    }
})
*/

// Agrega al final del archivo (Utilizando Append)
fs.appendFile(filePath, "\nOtra cosa", (err) => {
    if(err) {
        console.log(err)
    }
})

let un_texto = `

Un texto de ejemplo
Usando lineas multiples
Para demostrar que funciona
para escribir un archivo

`

fs.appendFile(filePath, un_texto, (err) => {
    if(err) {
        console.log(err)
    }
})

// 4. Borrar archivos

fs.unlink(filePath, (err) => {
    if(err) {
        console.log(err)
    }

    console.log("Borrado correctamente!")
})