calificaciones = [8,7,9.1,6,8.8]

function calcularPromedio(calificaciones) {
    let suma = 0
    calificaciones.forEach((calificacion) => {
        suma += calificacion
    })
    return suma/calificaciones.length
}

const promedioFn = calcularPromedio(calificaciones)

const promedioReduce = calificaciones.reduce((total, calificacion) => {
    return total += calificacion
},0)/calificaciones.length

console.log(promedioFn)
console.log(promedioReduce)

// Mapear valores de un arreglo a un objeto con reduce

const alumnosArr = [
    {id: 1, name: "Mackaber"},
    {id: 2, name: "Ana"},
    {id: 3, name: "Luis"},
    {id: 4, name: "Juan"},
    {id: 5, name: "Pedro"},
    {id: 6, name: "Maria"}
]

const alumnosObj = alumnosArr.reduce((currentObj, alumno) => { currentObj[alumno.id] = alumno.name; return currentObj },{})
console.log(alumnosObj)