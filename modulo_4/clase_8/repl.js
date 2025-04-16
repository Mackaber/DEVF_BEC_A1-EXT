const repl = require("repl")
const fs = require("node:fs/promises")


escribirArchivo = async function (texto) {
    await fs.appendFile("MiDiario.txt", `\n${texto}`)
}

leerArchivo = async function() {
    const fileContents = await fs.readFile("MiDiario.txt", "utf-8") 
    console.log(fileContents)
}

repl.start("( ☠️ )>")