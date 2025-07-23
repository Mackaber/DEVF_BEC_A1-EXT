import { createContext, useState } from "react";


const ConversationContext = createContext()

function ConversationProvider({ children }) {
    const [messages, setMessages] = useState([])

    function loadMessages() {
        const storedMessages = localStorage.getItem('conversation')
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages))
        }
    }

    // Guardar mensajes cada vez que cambian
    function updateMessages() {
        localStorage.setItem('conversation', JSON.stringify(messages))
    }

    return (
        <ConversationContext.Provider value={{ messages, setMessages, loadMessages, updateMessages }} >
            {children}
        </ConversationContext.Provider>
    )
}

export { ConversationContext, ConversationProvider }