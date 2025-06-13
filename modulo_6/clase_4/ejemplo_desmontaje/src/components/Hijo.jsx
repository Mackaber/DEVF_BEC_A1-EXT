import { useState, useEffect } from "react"
export default function Hijo({ textoPadre }) {
    const [textoHijo, setTextoHijo] = useState("")

    useEffect(() => {
        console.log("Terminaron efectos secundarios del Hijo")
    },[textoHijo])

    function handleActualizarHijo() {
        setTextoHijo("Hijo")
    }

    return (
        <>
            <h1>Mostrando hijo</h1>
            <p>P: {textoPadre}</p>    
            <p>H: {textoHijo}</p>        
            <button onClick={handleActualizarHijo}>Actualizar Hijo</button>
            {console.log("Termino el rendering del hijo")}
        </>
    )
}