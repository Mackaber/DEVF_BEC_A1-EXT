import { useCallback, useReducer } from "react";
import { createContext, useEffect, useState } from "react";


const ConversationContext = createContext()

function ConversationProvider({ children }) {

    // LocalStorage
    const [messages, dispatch] = useReducer(reducer, initialState, () => {
        const conversationJSON = localStorage.getItem('conversation')
        return conversationJSON ? JSON.parse(conversationJSON) : []
    })

    // Guardar mensajes cada vez que cambian
    useEffect(() => {
        localStorage.setItem('conversation', JSON.stringify(messages))
    }, [messages])

    return (
        <ConversationContext.Provider value={{ messages, dispatch }} >
            {children}
        </ConversationContext.Provider>
    )
}

export { ConversationContext, ConversationProvider }