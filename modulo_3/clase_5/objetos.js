// Creacion de objetos literales

// Sintaxis Creacion

let objeto = {
    propiedad: "valor"
}

// Ejemplos

let persona = {
    nombre: "Mackaber",
    apellido: "Witckin",
    edad: 33
}

let juan = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
}

let luis = {
    nombre: "Luis",
    apellido: "Lopez",
    edad: 31
}

// Acceso a propiedades

console.log(persona.edad)
console.log(juan.apellido)

// o

console.log(persona["edad"])
console.log(juan["apellido"])

// Ejemplo para usar [] para acceder a las propiedades
lista_de_propiedades = ["edad", "apellido"]
for(let i = 0; i < lista_de_propiedades.length; i++) {
    console.log(persona[lista_de_propiedades[i]])
}

// Modificacion de propiedades

// sintaxis

objeto.propiedad = "nuevo valor"

// Ejemplo

persona.edad = 34

// Métodos de objetos

// Sintaxis

/*let */ objeto = {
    metodo: function(parametros) {
        // Codigo
    }
}

// Ejemplo

persona = {
    saludar: function(nombre) {
        console.log("Hola " + nombre)
    }
}


// llamar a un metodo
persona.saludar("Juan")

luis = {
    saludar: function(nombre) {
        console.log("Quiubo " + nombre)
    }
}

luis.saludar("Carlos")

// Uso de this

// Sintaxis

/*let */ objeto = {
    propiedad: "valor",
    metodo: function() {
        console.log(this.propiedad)
    }
}

objeto.metodo()

// Ejemplo

/* let */ persona = { 
    nombre: "Mackaber",
    nombre_en_mayusculas: function() {
        // console.log(this.nombre.toUpperCase())  
        return this.nombre.toUpperCase()
    }
}

let result = persona.nombre_en_mayusculas()
console.log(result)

// Iterar propiedades de un objeto

// Sintaxis

/*let */ objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3",
}

let propiedades = Object.keys(objeto) // ["propiedad1", "propiedad2", "propiedad3"]

for(let i = 0; i < propiedades.length; i++) {
    console.log(objeto[propiedades[i]]) // objeto["propiedad1"]
}

// Ejemplo

/*let */ persona = {
    nombre: "Mackaber",
    apellido: "Witckin",
    edad: 33
}

/* let */ propiedades = Object.keys(persona) // ["nombre", "apellido", "edad"]

for(let i = 0; i < propiedades.length; i++) {
    console.log(persona[propiedades[i]]) // persona["nombre"]
}

// Objetos anidados

// Sintaxis

/*let */ objeto = {
    propiedad1: "valor1",
    propiedad2: {
        propiedad3: "valor3"
    }
}

let propiedad2 = objeto.propiedad2 // { propiedad3: "valor3" }
propiedad2.propiedad3 // "valor3"

// o 

objeto.propiedad2.propiedad3

// Ejemplo

/*let */ persona = {
    nombre: "Mackaber",
    calificaciones: {
        matematicas: 8,
        fisica: 9
    }
}

console.log(persona.calificaciones.matematicas) // 8

/* let */ luis = {
    nombre: "Luis",
    calificaciones: {
        matematicas: 6,
        fisica: 4
    }
}

console.log(luis.calificaciones.matematicas)

// Destructuracion de objetos

// Sintaxis

/*let */ objeto = {
    propiedad1: "valor1",
    propiedad2: {
        propiedad3: "valor3"
    }
    // propiedad4: "valor4"
    // propiedad5: "valor5"
    // ...
}

let { propiedad1 } = objeto
console.log(propiedad1)

let { propiedad2: { propiedad3 } } = objeto
console.log(propiedad3)
// btw
console.log(propiedad2)

// Ejemplo

/*let */ persona = {
    nombre: "Mackaber",
    calificaciones: {
        matematicas: 8,
        fisica: 9
    }
}

let { nombre } = persona
console.log(nombre)

let { calificaciones: { matematicas } } = persona
console.log(matematicas)
console.log(calificaciones)