const { z } = require("zod");
const prompt = require("prompt-sync")();

/// console.log(z);


const formularioSchema = z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    edad: z.coerce.number("Se esperaba un número").int("Se esperaba un entero").min(1, "La edad es obligatoria"),
    email: z.string().email(),
    cellphone: z.string().length(10, "El celular debe tener exactamente 10 dígitos")
})

const nombre = prompt("Ingrese su nombre: ")
const edad = prompt("Ingrese su edad: ")
const email = prompt("Ingrese su email: ")
const cellphone = prompt("Ingrese su celular: ")

const formulario = {
    nombre: nombre,
    edad: edad,
    email: email,
    cellphone: cellphone
}

const resultado = formularioSchema.safeParse(formulario)

if(resultado.success) {
    console.log("Datos Validados!")
} else {
    console.log("Errores:")
    console.log(resultado.error)
}