const condicion = true

// If tradicional
if(condicion) {
    console.log("Imprime ésto si la condicion es verdadera")
} else {
    console.log("Imprime ésto si la condición es falsa")
}

// Operador ternario

condicion ? console.log("Imprime ésto si la condicion es verdadera") : console.log("Imprime ésto si la condición es falsa")

const texto = condicion ? "La condicion fue verdadera" : "La condición fue falsa"
console.log(texto)

let texto2 = "La condicion fue verdadera"
texto2 = condicion || "La condición fue falsa"
console.log(texto2)


const color = "blue"
switch(color) {
    case "black":
        console.log("Your picked color is black")
        break
    case "red":
        console.log("Your picked color is red")
        break
    case "blue":
        console.log("Your picked color is blue")
        break
    case "green":
        console.log("Your picked color is green")
        break
    default:
        console.log("Your picked color is unknown")
        break
}

// Lo mismo pero utilizando un objeto
const results = {
    "red": "Your picked color is red",
    "black": "Your picked color is black",
    "blue": "Your picked color is blue",
    "green": "Your picked color is green",
    "yellow": "Your picked color is yellow"
}

console.log(results[color])