import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import ComponentChild from './components/ComponentChild'

function App() {
  const [name, setName] = useState("Primero");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Se ejecutó el efecto!")
  }, [name, count]) 

  function handeClick() {
    setCount(count + 1)
    setName(`Tercero ${count}`)
  }

  return (
    <div>
      <h1>Hola {name}!</h1>
      <button onClick={handeClick}>Cambiar Nombre</button>
      <ComponentChild />
    </div>
  )
}

export default App
