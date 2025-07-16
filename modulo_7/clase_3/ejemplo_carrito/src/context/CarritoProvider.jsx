import { useState } from "react";
import { createContext } from "react";

const CarritoContext = createContext()


function CarritoProvider({ children }) {
    const [lista, setLista] = useState([])

    function agregarAlaLista(producto) {
        const newLista = [...lista]
        newLista.push(producto)
        setLista(newLista)
    }


    return (
        <CarritoContext.Provider value={{ lista, agregarAlaLista }}>
            {children}
        </CarritoContext.Provider>
    )
}

export { CarritoContext, CarritoProvider }
