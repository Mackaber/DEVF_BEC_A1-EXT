import { useState } from "react"

export default function Input({ sendMessage }) {
    const [input, setInput] = useState("")

    return (<>
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => sendMessage(input) }>Enviar</button>
    </>)
}
