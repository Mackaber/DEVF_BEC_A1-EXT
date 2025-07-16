import { useContext } from "react"
import { AppContext } from "../contexts/Provider"

export default function Child() {

    // Paso 4. Hacer uso del Context
    const { value, setValue } = useContext(AppContext)

    return (
        <input value={value} onChange={(e) => setValue(e.target.value)} />
    )
}