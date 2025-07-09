import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const mock_messages = [
  { text: "Hola", sender: "user"},
  { text: "Hola, en que te puedo ayudar hoy?", sender: "LLM"},
  { text: "Quiero que me digas como programar mejor", sender: "user"},
  { text: "Claro, sigue éstos consejos: puedes usar JavaScript, Python o C++, dependiendo de tu nivel de programación", sender: "LLM"}
]
 

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(mock_messages)

  function sendMessage() {
    console.log("Enviando mensaje", input)

    /* Paso por paso...
    const new_messages = [...messages]
    const new_message = { text: input, sender: "user" }
    new_messages.push(new_message)
    setMessages(new_messages)
    */
    
    setMessages((prev) => [...prev, { text: input, sender: "user" }])

    // Simulando la respuesta
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Lo siento, hubo un problema con el servidor", sender: "LLM" }])
    },1000)
  }

  return (
    <>

      <div>
        {messages.map((message,i) => <p key={i} style={message.sender == 'user' ? {color: 'blue'} : {color: 'red'}}>{message.text}</p>)}
      </div>

      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Enviar</button>
    </>
  )
}

export default App
