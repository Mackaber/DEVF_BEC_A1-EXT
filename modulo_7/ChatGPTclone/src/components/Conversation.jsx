import { useContext } from "react"
import { ConversationContext } from "../contexts/ConversationProvider"

export default function Conversation() {
    const { messages } = useContext(ConversationContext)

    return (
        <div>
            {messages.map((message, i) => <p key={i} style={message.role == 'user' ? { color: 'blue' } : { color: 'red' }}>{message.content}</p>)}
        </div>
    )
}