import { useContext } from "react"
import { CarritoContext } from "../context/CarritoProvider"

export default function Electronicos() {
    const { agregarAlaLista } = useContext(CarritoContext)

    return (
        <ul>
            <li>Telefono<button onClick={() => agregarAlaLista("Telefono")}>Agregar</button></li>
            <li>Tablet<button onClick={() => agregarAlaLista("Tablet")}>Agregar</button></li>
            <li>Computadora<button onClick={() => agregarAlaLista("Computadora")}>Agregar</button></li>
        </ul>
    )
}