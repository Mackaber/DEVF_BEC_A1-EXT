import { useContext } from "react"
import { CarritoContext } from "../context/CarritoProvider"
export default function Muebles() {
    const { agregarAlaLista } = useContext(CarritoContext)

    return (
        <ul>
            <li>Mesa<button onClick={() => agregarAlaLista("Mesa")}>Agregar</button></li>
            <li>Silla<button onClick={() => agregarAlaLista("Silla")}>Agregar</button></li>
            <li>Estanteria<button onClick={() => agregarAlaLista("Estanteria")}>Agregar</button></li>
        </ul>
    )
}