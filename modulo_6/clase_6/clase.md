# Uso de Hooks avanzados: useRef, useCallback y useReducer 

- Entender useRef para referencias a elementos o valores.
- Evitar renders innecesarios con useCallback.
- Manejar estados complejos con useReducer.
- Comparar y elegir el hook adecuado según el caso.


    useState, useRef, useCallback, useReducer, useMemo

## useReducer

``` js
    .forEach
    .map
    .filter
    .reducer: teniendo un arreglo, regrsa un valor [] -> valor 


    calificaciones = [8,7,9.1,6,8.8]

    function calcularPromedio(calificaciones) {
        let suma = 0
        calificaciones.forEach((calificacion) => {
            suma += calificacion
        })
        return suma/calificaciones.legth
    }

    calificaciones.reduce((total, calificacion) => {
        total += calificacion
    },0)/calificaciones.length

```

