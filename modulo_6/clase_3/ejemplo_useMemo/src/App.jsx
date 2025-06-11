import { useMemo, useState } from 'react'
import './App.css'

function App() {
  // const num = 5;
  const [num, setNum] = useState(5)

  const result = useMemo(() => {
    console.log('Calculando...')
    return num * 10
  },[num])

  function handleInput(e) {
    setNum(e.target.value)
  }

  return (
    <div>
      <h1>
        <input onChange={handleInput} /><br />
        <p>Resultado: {result}</p>
      </h1>
    </div>
  )
}

export default App
