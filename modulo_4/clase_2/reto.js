const estudiantes = 
[
    { nombre: "Mackaber", promedio: 8 },
    { nombre: "Ana", promedio: 7 },
    { nombre: "Luis", promedio: 1 },
    { nombre: "Luisa", promedio: 3 },
    { nombre: "Juan", promedio: 5 },
    { nombre: "Pedro", promedio: 6 },
    { nombre: "Maria", promedio: 8 },
    { nombre: "Jorge", promedio: 7 },
    { nombre: "Sofia", promedio: 7 },
    { nombre: "Javier", promedio: 4 }
]


// 1. Sacar la lista de estuidantes que aprobaron (promedio para pasar es 6)
let aprobados = estudiantes.filter( estudiante => estudiante.promedio >= 6)
console.log(aprobados)

// 1.1 De los que pasaron únicamente imprima los nombres
aprobados.forEach(estudiante => console.log(estudiante.nombre))

estudiantes
    .filter(estudiante => estudiante.promedio >= 6)
    .forEach(estudiante => console.log(estudiante.nombre))

// 2. Sacar el promedio más alto
estudiantes.sort((estudiante_a, estudiante_b) => estudiante_b.promedio - estudiante_a.promedio)
// versión avanzada
// estudiantes.sort(({promedio:promedio_a}, {promedio:promedio_b}) => promedio_a - promedio_b)
console.log(estudiantes)
let promedio_mas_alto = estudiantes[0].promedio

console.log(estudiantes.filter(estudiante => estudiante.promedio >= promedio_mas_alto))

// 3. De los que no pasaron... Cuanto les falto para pasar?
let reprobados = estudiantes.filter(estudiante => estudiante.promedio < 6 )
console.log(reprobados)

console.log(reprobados.map(estudiante => (6 - estudiante.promedio)))