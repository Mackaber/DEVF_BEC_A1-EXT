// Repaso var, let, const

// For con let
console.log("Con let...")
for(let i = 0; i<10; i++) {
    //let i = i + 1
    console.log(i)
}

// For con var 
console.log("Con var...")
for(var i = 0; i<10; i++) {
    var i = i + 1
    console.log(i)
}


//String templates / literals

let mackaber = {
    nombre: "Mackaber",
    edad: 33,
    ciudad: "SLP"
}

let ana = {
    nombre: "Ana",
    edad: 28,
    ciudad: "CDMX"
}

let imprimir_persona = (persona) => {
    //console.log("El nombre de la persona es " + persona.nombre + ", su edad es " + persona.edad + " y vive en " + persona.ciudad)
    console.log(`
        El nombre de la persona es ${persona.nombre}, 
        su edad es ${persona.edad} 
        y vive en ${persona.ciudad}`)
}

imprimir_persona(mackaber)
imprimir_persona(ana)

/*
`<div>
    <h1>${mackaber.nombre}</h1>
</div>
`
*/

// Symbol

let nombre = Symbol("Nombre")

let roles = {
    admin: Symbol("admin"),
    user: Symbol("user"),
    superadmin: Symbol("superadmin")
}

let user = {
    role: roles.admin
}

console.log(user.role === roles.admin)


/*
let opciones_validas = [
    Symbol("casado"),
    Symbol("soltero"),
    Symbol("divorciado"),
    Symbol("otro")
]

if(opcion_seleccionada == opciones_validas[0]) {// casado
    // ...
} else if (opcion_seleccionada == opciones_validas[1]) {// soltero

}
*/

// Destructuración de objetos

let imprimir_persona_destructurada = ({nombre, edad, ciudad}) => {
    console.log(`
        El nombre de la persona es ${nombre}, 
        su edad es ${edad} 
        y vive en ${ciudad}`)
}

//let { nombre, edad, ciudad } = mackaber

imprimir_persona_destructurada(mackaber)
imprimir_persona_destructurada(ana)

// Destructuración de arreglos

let lista_de_alumnos = [
    "Mackaber",
    "Ana",
    "Luis",
    "Luisa",
    "Juan",
    "Pedro"
]

let primeros_tres_alumnos = ([alumno1, alumno2, alumno3]) => {
    console.log(alumno1)
    console.log(alumno2)
    console.log(alumno3)
}

//let [alumno1, alumno2, alumno3] = lista_de_alumnos

primeros_tres_alumnos(lista_de_alumnos)


// Ejemplo async/await

fetch("https://api.exchangerate-api.com/v4/latest/USD?symbols=MXN").then(response => {
    return response.json()
}).then(data => {
    console.log(data.rates.MXN)
}).then(() => {
    
})

let obtener_tipo_cambio = async () => {
    let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD?symbols=MXN")
    let data = await response.json()
    console.log(data.rates.MXN)
}

obtener_tipo_cambio()