import { useState } from "react"
import ChildComponent from "./ChildComponent"

// Detalle, usamos deestructuración para obtener las propiedades del objeto user
export default function Content({user}) {
    // const [nombreDelEstado, MetodoParaModificarElEstado] = FunctionDeReact() "Hook"
    const [name, setName] = useState("")
    
    return (
        <main>
            <article>
                <h2>Información del usuario</h2>

                <p>Nombre: {user.name}</p>
                <p>Edad: {user.age}</p>
                <p>Profesión: {user.profession}</p>
            </article>
            <ChildComponent val={name} />
            <form>
                <p>Hola {name}</p>
                <input type="text" placeholder="Ingrese su nombre" onChange={(e) => setName(e.target.value)} />
            </form>
        </main>
    )
}