// Binary Search

// target -> Valor a buscar 

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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(binarySearch(arr, 19, 0, arr.length - 1))