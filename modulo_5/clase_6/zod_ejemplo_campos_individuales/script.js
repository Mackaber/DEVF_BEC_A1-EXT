import { z } from 'https://unpkg.com/zod@3.22.4/lib/index.mjs';
const user_form = document.getElementById("user_form");

const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const email = document.getElementById("email")
const celular = document.getElementById("celular")

const nombre_error = document.getElementById("nombre_error")
const edad_error = document.getElementById("edad_error")
const email_error = document.getElementById("email_error")
const celular_error = document.getElementById("celular_error")


nombre.addEventListener("blur", () => {
    const result = z.string().min(1, "El nombre es obligatorio").safeParse(nombre.value)

    if (result.success) {
        nombre_error.style.display = "none"
    } else {
        nombre_error.innerHTML = result.error.issues[0].message
        nombre_error.style.display = "block"
    }
})


edad.addEventListener("blur", () => {
    const result = z.coerce.number("Se esperaba un número").int("Se esperaba un entero").min(1, "La edad es obligatoria").safeParse(edad.value)

    if (result.success) {
        edad_error.style.display = "none"
    } else {
        edad_error.innerHTML = result.error.issues[0].message
        edad_error.style.display = "block"
    }
})

email.addEventListener("blur", () => {
    const result = z.string().email().safeParse(email.value)

    if (result.success) {
        email_error.style.display = "none"
    } else {
        email_error.innerHTML = result.error.issues[0].message
        email_error.style.display = "block"
    }
})

celular.addEventListener("blur", () => {
    const result = z.string().length(10, "El celular debe tener exactamente 10 dígitos").safeParse(celular.value)

    if (result.success) {
        celular_error.style.display = "none"
    } else {
        celular_error.innerHTML = result.error.issues[0].message
        celular_error.style.display = "block"
    }
})


