import Electronicos from "./Electronicos"
import Ropa from "./Ropa"
import Muebles from "./Muebles"
import { useState } from "react"

export default function Container() {   
    const [selected, setSelected] = useState("ropa")

    return (
        <div className='container' style={{border: "1px solid black"}}>
            <button onClick={() => { setSelected('ropa')}}>Ropa</button>
            <button onClick={() => { setSelected('electronicos')}}>Electronicos</button>
            <button onClick={() => { setSelected('muebles')}}>Muebles</button>
            {selected == "ropa" && <Ropa />}
            {selected == "electronicos" && <Electronicos />}
            {selected == "muebles" && <Muebles />}
        </div>
    )
}