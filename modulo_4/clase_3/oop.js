// Abstracción

// Del mundo real, que tomamos (metodos, atributos) para diseñar nuestros objetos

// Coche en e-commerce
const coche_ec = {
    marca: "",
    año: "",
    precio: "",
    modelo: "",
    km: "",
    financiamiento: function(enganche) {
        this.precio = this.precio - enganche
        return this.precio
    }
}

// Coche en videojuego
const coche_vg = {
    color: "",
    aceleracion: "",
    peso: "",
    turbo: "",
    bloqueado: true,
    posicion: 0,
    avanzar: function(kms) {
        this.posicion += kms
    }
}

// Encapsulamiento

// Los atributos tienen que accederse por medio del objeto

let nombre = "Mackaber"
let edad = 33

let mackaber = {
    nombre: "Mackaber",
    edad: 33
}

mackaber.nombre
mackaber.edad

// Polimorfismo

// Un método en distintos objetos (de la misma clase padre) hace cosas distintas

const gato = {
    hablar: function() {
        console.log("Miauuu")
    }
}

const perro = {
    hablar: function() {
        console.log("Guauuu")
    }
}

// Herencia

class Animal { // Clase padre
    tamaño
    alimentacion // omnivoros, carnivoros, herbivoros
}

class Perro extends Animal {
    
    hablar() {
        return "guau"
    }
}

class Gato extends Animal {
    hablar() {
        return "miau"
    }
}

garfield = new Gato("garfield", "naranja")
garfield.hablar()