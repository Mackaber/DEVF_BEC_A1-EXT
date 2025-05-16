const validEmail = (email) => {
    const incluye_arroba = email.includes("@") // Tiene que contener el @
    const incluye_punto = email.includes(".") // Tiene que tener un puntito .

    const pos_arroba = email.indexOf("@") // 1 (x@mackaber.me)
    const pos_punto = email.indexOf(".") // 10 (x@mackaber.me)

    /*if(incluye_arroba && incluye_punto) {
        return true
    } else {
        return false
    }*/

    return incluye_arroba && incluye_punto && pos_arroba < pos_punto
} // true sí es válido o false si no es válido

console.log(validEmail("x@mackaber.me")) // => true
console.log(validEmail("Algo")) // => false
console.log(validEmail("x.x.x@")) // => false
console.log(validEmail("@@@@.com")) // => false