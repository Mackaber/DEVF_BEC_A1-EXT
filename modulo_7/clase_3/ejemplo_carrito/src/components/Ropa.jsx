import { useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider"
export default function Ropa() {

    const { agregarAlaLista } = useContext(CarritoContext)

    return (
    <>
        <ul>
            <li>Playera verde<button onClick={() => agregarAlaLista("Playera verde")}>Agregar</button></li>
            <li>Playera azul<button onClick={() => agregarAlaLista("Playera azul")}>Agregar</button></li>
            <li>Playera roja<button onClick={() => agregarAlaLista("Playera roja")}>Agregar</button></li>
            <li>Pantalon negro<button onClick={() => agregarAlaLista("Pantalon negro")}>Agregar</button></li>
            <li>Pantalon azul<button onClick={() => agregarAlaLista("Pantalon azul")}>Agregar</button></li>
            <li>Pantalon rojo<button onClick={() => agregarAlaLista("Pantalon rojo")}>Agregar</button></li>
        </ul>
    </>
    )
}