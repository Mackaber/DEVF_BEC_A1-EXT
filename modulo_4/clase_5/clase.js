// Estructuras de datos

// Pila

// Implementación

const pila = {
    elementos: [],
    push: function(elemento) {
      this.elementos.push(elemento);
    },
    pop: function() {
      if (!this.estaVacia()) {
        return this.elementos.pop();
      } else {
        throw new Error("La pila está vacía");
      }
    },
    estaVacia: function() {
      return this.elementos.length === 0;
    },
    tamaño: function() {
      return this.elementos.length;
    },
    tope: function() {
      if (!this.estaVacia()) {
        return this.elementos[this.elementos.length - 1];
      } else {
        throw new Error("La pila está vacía");
      }
    }
  };

// Uso

// Pila inicial ["Wikipedia", "Love Me like You Do", "Cincuenta sombras de Grey (película)", "Jamie Dornan", "Calvin Klein"]

pila.push("Wikipedia");
pila.push("Love Me like You Do");
pila.push("Cincuenta sombras de Grey (película)");
pila.push("Jamie Dornan");
pila.push("Calvin Klein"); 

console.log(pila.tope()) // peek

console.log("----------------------")
// Regresar hasta el último elemento
function base_de_la_pila(pila) {

    let tope

    while(true) {

        tope = pila.pop()

        if(pila.estaVacia()) { // Comprobar si no esta vacia

            break
        } 

    }

    return tope// "Wikipedia"
}

console.log(base_de_la_pila(pila))