import { useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider"

export default function Carrito() {
    const { lista } = useContext(CarritoContext)

    return (
        <div style={{ border: "solid 1px black"}}>
            <h3>Carrito</h3>
            <ul>
                {lista.map((producto, i) => <li key={i}>{producto}</li>)}
            </ul>
        </div>
    )
}