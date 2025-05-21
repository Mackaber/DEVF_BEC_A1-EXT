import { z } from 'https://unpkg.com/zod@3.22.4/lib/index.mjs';
const user_form = document.getElementById("user_form");

const error_campos = {
    nombre: document.getElementById("nombre_error"),
    edad: document.getElementById("edad_error"),
    email: document.getElementById("email_error"),
    celular: document.getElementById("celular_error")
}  

user_form.addEventListener("submit", (ev) => {
    ev.preventDefault()

    const formularioSchema = z.object({
        nombre: z.string().min(1, "El nombre es obligatorio"),
        edad: z.coerce.number("Se esperaba un número").int("Se esperaba un entero").min(1, "La edad es obligatoria"),
        email: z.string().email(),
        celular: z.string().length(10, "El celular debe tener exactamente 10 dígitos")
    })

    const user = {
        nombre: ev.target.nombre.value,
        edad: ev.target.edad.value,
        email: ev.target.email.value,
        celular: ev.target.celular.value
    }

    const resultado = formularioSchema.safeParse(user)

    // Volver a ocultar los errores
    error_campos.nombre.style = "display:none"
    error_campos.edad.style = "display:none"
    error_campos.email.style = "display:none"
    error_campos.celular.style = "display:none"

    if(resultado.success) {
        console.log("Datos Validados!")
    } else {
        console.log("Errores:")
        console.log(resultado.error)

        const errors = resultado.error.issues;

        for(let i = 0; i<errors.length; i++) {
            console.log(errors[i].path[0])
            const campo = errors[i].path[0]
            // debugger
            error_campos[campo].innerHTML = errors[i].message
            error_campos[campo].style = "display:block;color:red"
        }
    }
});
