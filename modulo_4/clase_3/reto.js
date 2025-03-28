let grupo_a = {
    nombre: "A",
    materia: "Quimica",
    alumnos: [
        {
            nombre: "Mackaber",
            calificacion: 9.0
        },
        {
            nombre: "Ana",
            calificacion: 10
        },
        {
            nombre: "Luis",
            calificacion: 7.5
        }
    ],
}

let grupo_b = {
    nombre: "B",
    materia: "Fisica",
    alumnos: [
        {
            nombre: "Mackaber",
            calificacion: 5.0
        },
        {
            nombre: "Ana",
            calificacion: 8.5
        },
        {
            nombre: "Javier",
            calificacion: 5.0
        }
    ]
}

let grupo_c = {
    nombre: "C",
    materia: "Matematicas",
    alumnos: [
        {
            nombre: "Mackaber",
            calificacion: 4.0
        },
        {
            nombre: "Hugo",
            calificacion: 10
        },
        {
            nombre: "Luis",
            calificacion: 6.5
        }
    ]   
}

let grupo_d = {
    nombre: "D",
    materia: "Filosofia",
    alumnos: [
        {
            nombre: "Mackaber",
            calificacion: 4.0
        },
        {
            nombre: "Hugo",
            calificacion: 1.0
        },
        {
            nombre: "Luis",
            calificacion: 5.0
        }
    ]   
}

let escuela =  {
    grupos: [grupo_a, grupo_b, grupo_c, grupo_d],

    // 1. Sacar el promedio más alto de todos los grupos, considerando todas las materias ()
    promedioMasAlto: function () {
        // 1.1 de grupoos... pasar a alumnos...

        // alumno = {
        //   materias: [
        //    { nombre: "Fisica", calificacion: 8.5}, ....
        //  ],
        //  promediar()
        // }


        // 1.2
        // 1.3

        // 1.* sort... 


        // 1.* reduce... 

        // .reduce((calificacion, suma) =>  ,0)




        // return //...

          // 1.1 de grupos... pasar a alumnos...
        // 1.1.1 Calcular la sumatoria de cada grupo
        const sumatorias = this.grupos.map(grupo => {
            return grupo.alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
        });

        // 1.1.2 Calcular el promedio de cada grupo
        const promedios = sumatorias.map((sumatoria, index) => {
            return sumatoria / this.grupos[index].alumnos.length;
        });

        // 1.2 Encontrar el promedio más alto
        const promedioMasAlto = Math.max(...promedios);

        return promedioMasAlto;
    },


    // 2. Ver si todos los alumnos pasaron todas sus materias ()
    todosPasaronTodo: function () {
        return //...
    },

    // 3. Ver si al menos un alumno paso cierta materia ("Física")
    alumnoPaso: function(nombre) {
        // let alumnoPaso = []
        let materia = this.grupos.find(grupo => grupo.materia === nombre) // ??? === "Fisica"

        // some
        let result = materia.alumnos.some(alumno => alumno.calificacion >= 6.0)
        return result
    },

    // 4. Ver si un alumno se encuentra en un grupo ("A","Mackaber")
    alumnoSeEncuentraEnGrupo(letra,nombre) {

        let materia = this.grupos.find(grupo => grupo.nombre === letra) // ??? === "A"

        // Opcion 1. en vez de ocupar los objetos transformarlos en strings
        // includes
        let result = materia.alumnos.map(alumno => alumno.nombre).includes(nombre) // {} ===  "Mackaber"

        // Opcion 2. cambiar por find
        //let result = materia.alumnos.find(alumno => alumno.nombre === nombre)

        return result
    }
}

console.log(escuela.promedioMasAlto())
console.log(escuela.alumnoPaso("Filosofia"))
console.log(escuela.alumnoSeEncuentraEnGrupo("B", "Hugo"))