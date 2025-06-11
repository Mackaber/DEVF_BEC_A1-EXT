# Uso de efectos secundarios y optimizaciones de rendimiento

- Comprender el uso de useEffect para efectos secundarios.

    ```jsx
    useEffect(() => {
        // Código que se ejecuta la primera vez, después de que se termina de renderizar los componentes
    }, [dependencia1, dependencia2, ...]) //
    
    ```
    Cuando hay dependencias en useEffect, éste se vuelve a ejecutar si hubo algún **cambio** en ellas

- Utilizar dependencias para controlar la ejecución.
- Aplicar useMemo para optimizar operaciones costosas.

    ```jsx
    const result = useMemo(() => {
        // Calculo costoso
        return //resultado 
    }, [dependencia1, dependencia2,...])


    - **useMemo:** Es un hook que se utiliza para guardar datos que pueden ser el resultado de operaciones costosas

- Distinguir entre efectos y renderizados.