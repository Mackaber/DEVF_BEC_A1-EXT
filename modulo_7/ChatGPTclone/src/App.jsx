import { useCallback, useContext, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversation from './components/Conversation'
import Input from './components/Input'
import { ConversationContext } from './contexts/ConversationProvider'

const mock_messages = [
  { content: "Hola", role: "user" },
  { content: "Hola, en que te puedo ayudar hoy?", role: "assistant" },
  { content: "Quiero que me digas como programar mejor", role: "user" },
  { content: "Claro, sigue éstos consejos: puedes usar JavaScript, Python o C++, dependiendo de tu nivel de programación", role: "assistant" }
]


function App() {
  const { messages, dispatch } = useContext(ConversationContext)

  async function sendMessage(input) {
    console.log("Enviando mensaje", input)

    /* Paso por paso...
    const new_messages = [...messages]
    const new_message = { text: input, sender: "user" }
    new_messages.push(new_message)
    setMessages(new_messages)
    */

    dispatch([...messages, { content: input, role: "user" }])

    // fetch

    // axios

    const data = {
      "model": "deepseek-r1:1.5b",
      "stream": false,
      "think": false,
      "raw": true,
      "messages": [
        {
          "role": "user",
          "content": input
        }
      ]
    };

    const respuesta = await axios.post("http://localhost:11434/api/chat", data)

    console.log(respuesta.data.message)

    dispatch([...messages, respuesta.data.message])
  }

  return (
    <>
      <Conversation messages={messages}/>
      <Input sendMessage={sendMessage} />
    </>
  )
}

export default App
