import Electronicos from "./Electronicos"
import Ropa from "./Ropa"
import Muebles from "./Muebles"
import { useState } from "react"

export default function Container() {   
    const [ropaSelected, setRopaSelected] = useState(false)
    const [electronicosSelected, setElectronicosSelected] = useState(false)
    const [mueblesSelected, setMueblesSelected] = useState(false)

    function cambiarSeccion(seccion) {
        setRopaSelected(false);
        setElectronicosSelected(false);
        setMueblesSelected(false);

        switch(seccion) {
            case 'ropa':
                setRopaSelected(true);
                break;
            case 'electronicos':
                setElectronicosSelected(true);
                break;
            case 'muebles':
                setMueblesSelected(true);
                break; 
        }
    }

    return (
        <div className='container' style={{border: "1px solid black"}}>
            <button onClick={() => { cambiarSeccion('ropa')}}>Ropa</button>
            <button onClick={() => { cambiarSeccion('electronicos')}}>Electronicos</button>
            <button onClick={() => { cambiarSeccion('muebles')}}>Muebles</button>
            {ropaSelected && <Ropa />}
            {electronicosSelected && <Electronicos />}
            {mueblesSelected && <Muebles />}
        </div>
    )
}