// Repaso divide and conquer

const binarySearch = (Array, target, low, high) => {
    if(low > high) { // Caso base // Detener la recursión
        return -1 // No se encontró el valor
    }

    let mid = Math.floor((low + high)/2)

    if(Array[mid] === target) { // Caso base
        return mid // Regresa la posicion // return Array[mid]
    } else if (Array[mid] > target) {
        return binarySearch(Array, target, low, mid - 1) // Recursión
    } else {
        return binarySearch(Array, target, mid + 1, high)
    }
}

// binarySearch(arr, 19, 0, arr.length - 1)

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let low = 0
let high = array.length - 1
let mid = Math.floor((low + high)/2)
let target = 19

while(true) {
    if(low > high) {
        console.log(-1)
        break 
    }

    mid = Math.floor((low + high)/2)

    if(array[mid] === target) {
        console.log("encontrado!")
        console.log(`Su posicion es ${mid}`)
        break
    }

    else if(array[mid] > target) {
        high = mid - 1
    } else {
        low = mid + 1
    }
}

