class Persona {

    static altura_promedio = 1.70

    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    nombre_en_mayusculas() {
        return this.nombre.toUpperCase()
    }

    static saludar() {
        console.log("hola")
    }

}

// Metodo estatico

let mackaber = new Persona("Mackaber", "Witckin", 1.80)

// Metodo regular
mackaber.nombre_en_mayusculas()

// Metodo estatico
Persona.saludar()

// Propiedad estatica
console.log(Persona.altura_promedio)