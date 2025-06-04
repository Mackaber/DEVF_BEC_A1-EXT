# Intraducción a React
 	
🎯 Objetivos de la clase

- Comprender qué es React y para qué se utiliza. 

    - "Reaccionar": 
        - Cuando mandamos un formulario.
        - Cuando hay nuevos datos.
        - Cuando hay alguna interacción del usuario

    - HTML vs JSX:
        - HTML: las etiquetas tienen atributos
        - JSX: las etiquetas tienen propiedades
        (En JSX podemos pasar información a través de las propiedades)

- Aprender a crear componentes funcionales.

    - Muy importante: Los componentes en React sólo regresan UN sólo componente (el componente padre, que puede tener a sus hijos)

    - Si queremos tener 2 o más componentes sin utitizar una etiqueta funcional como padre podemos ocupar Fragment 
    `<>  </>`

- Entender el uso básico de JSX.

- Introducción al uso de props/propiedads y estados.

```jsx
// Header.jsx
export default function Header(props) {
    return (
        <header>
            <h1>Bienvenido {props.name}!</h1>
        </header>
    )
}

// App.jsx
function App() {

  return (
    <Header name="Mackaber" />
  )
}
```

- State: un state (o estado) mantiene informado a la interfaz de que hubo algun cambio (la hace "reaccionar")