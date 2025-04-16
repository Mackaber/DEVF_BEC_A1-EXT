const repl = require("repl")
const fs = require("node:fs/promises")

const alumnos_db = "./alumnos.json"

leerBasedeDatos = async function() {
    const fileContents = await fs.readFile(alumnos_db, "utf-8")
    console.log(fileContents)
    return JSON.parse(fileContents)
}

agregarAlumno = async function(nombre, curso) {
    db.push({
        nombre,
        curso
    })

    await fs.writeFile(alumnos_db, JSON.stringify(db))
}

checarExistenciaArchivo = async function() {
    try {
        await fs.access(alumnos_db)
    } catch (error) {
        // Crear el archivo
        await fs.writeFile(alumnos_db, "[]", "utf-8")
    }
}

async function main() {
    await checarExistenciaArchivo()
    db = await leerBasedeDatos()
    repl.start("( 🧑‍🎓 )>")
}

main()