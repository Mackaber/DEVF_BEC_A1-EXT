import { useState } from "react"
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function Input({ sendMessage }) {
    const [input, setInput] = useState("")

    return (
        <div className="flex flex-row border border-black rounded-md p-5">
            <input placeholder="Escribe tu mensaje" onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => sendMessage(input) }>
                <PaperAirplaneIcon className="w-6 h-6" />
            </button>
        </div>
    )
}
