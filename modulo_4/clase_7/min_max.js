const MinMax = (Array, startIndex, lastIndex) => {
    if(startIndex == lastIndex) { // Caso base, el valor minimo y el valor maximo son el mismo
        return [Array[startIndex], Array[startIndex]] // [3, 3]
    }

    if((lastIndex - startIndex) == 1) { // Caso base
        if(Array[startIndex] > Array[lastIndex]) {
            return [Array[lastIndex], Array[startIndex]]
        } else {
            return [Array[startIndex], Array[lastIndex]] // [2, 8]
        }
    }

    else {
        let mid = Math.floor((startIndex + lastIndex) / 2)
        let [leftMin, leftMax] = MinMax(Array, startIndex, mid) // Buscar del lado izquierdo
        let [rightMin, rightMax] = MinMax(Array, mid + 1, lastIndex) // Buscar del lado derecho
        return [Math.min(leftMin, rightMin), Math.max(leftMax, rightMax)] // Retornar el minimo y el maximo
    } // 

}

// Valores aleotorios

const arr = [4, 20, 1, 2, 8, 3, 5, 23, 12, 77, 9, 6]

// const arr = [4, 2]

console.log(MinMax(arr, 0, arr.length - 1))

