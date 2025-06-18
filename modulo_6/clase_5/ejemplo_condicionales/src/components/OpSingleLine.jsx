import Component from "./Component";
import { useState } from 'react'

export default function OpSingleLine() {
    const [conditionalAnd, setConditionalAnd] = useState(false)
    const [conditionalOr, setConditionalOr] = useState(false)
    const [conditionalOp, setConditionalOp] = useState(false)

    return (
        <>
            <input type='checkbox' value={conditionalAnd} onChange={(e) => setConditionalAnd(e.target.checked)} />
            Condicial con operadores lógios &&<br />
            <input type='checkbox' value={conditionalOr} onChange={(e) => setConditionalOr(e.target.checked)} />
            Condicial con operadores lógios ||<br />
            <input type='checkbox' value={conditionalOp} onChange={(e) => setConditionalOp(e.target.checked)} />
            Condicial con operador ternario ? :

            {/* Condicial con operadores lógios && (AND), || (OR) */}
            {conditionalAnd && <Component renderType="Operador AND" />}
            {conditionalOr || <Component renderType="Operador OR" />}
            {<Component renderType="(OR) Lado Izquierdo" /> || <Component renderType="(OR) Lado Derecho" />}

            {/* Operador ternario */}
            {conditionalOp ?
                <Component renderType="El condicional está como true" /> :
                <Component renderType="El condicional está como false" />
            }
        </>
    )
}
