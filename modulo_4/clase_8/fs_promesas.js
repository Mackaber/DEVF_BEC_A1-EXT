const fs = require('node:fs/promises');

const filePath = './example.txt' // .\example.txt

// 2.1.2 Con Promesas

fs.readFile(filePath, "utf-8").then((data) => {
    console.log(data)
})


async function leerArchivo() {
    const fileContents = await fs.readFile(filePath, "utf-8")
    console.log(fileContents)
}

async function escribirArchivo() {
    let result = await fs.writeFile(filePath, "Otra cosa")
    console.log(result)

    result = await fs.appendFile(filePath, "\nHaciendo Append")
    console.log(result)
}

leerArchivo()
escribirArchivo()
