import { useEffect, useState } from 'react'
import Hijo from './Hijo'

export default function Padre() {
  const [montar, setMontar] = useState(false)
  const [textoPadre, setTextoPadre] = useState("")

  function handleMontar() {
    setMontar(true)
  }

  function handleActualizar() {
    setTextoPadre("Padre")
  }

  function handleDesmontar() {
    setMontar(false)
  }

  useEffect(() => {
    console.log("Terminaron efectos secundarios del Padre")
  },[textoPadre])

  return (
    <>
      <h1>Ejemplo de montaje y desmontaje</h1>
      <button onClick={handleMontar}>Montar</button>
      <button onClick={handleActualizar}>Actualizar</button>
      <button onClick={handleDesmontar}>Desmontar</button>
      <hr />
      {console.log("Termino rendering del Padre")}
      { montar && <Hijo {...{textoPadre}}/> }
    </>
  )
}