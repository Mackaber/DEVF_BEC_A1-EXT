import { useState, useMemo, useCallback, useRef, useReducer } from 'react'
import './App.css'

function App() {
  const [stateCounter, setStateCounter] = useState(0)
  const [memoAux, setMemoAux] = useState(0)
  const [callBackAux, setCallBackAux] = useState(0)
  const refCounter = useRef(0)

  const memoCounter = useMemo(() => {
    // Operación costosa
    return stateCounter * memoAux// Aquí devuelve el valor que se queda en la memoria del navegador
  },[memoAux])

  const callbackCounter = useCallback((aux) => {
    return aux * callBackAux 
  }, [callBackAux])

  const reducerFn = (currentState, value) => {
    console.log(currentState)
    console.log(value)
    return currentState += value
  }

  const [stateReduce, dispatch] = useReducer(reducerFn, 0)

  return (<>
    <h2>useState: {stateCounter}</h2>
    <button onClick={() => { setStateCounter(stateCounter + 1)}}>Modificar state</button>Modifica un valor y actualiza la interfaz
    <h2>useMemo: {memoCounter}</h2>
    <button onClick={() => setMemoAux(memoAux + 1)}>Modificar memo</button>Nos regresa un valor (Resultado de una operación compleja)
    <h2>useCallback: {callbackCounter(stateCounter)}</h2>
    <button onClick={() => setCallBackAux(callBackAux + 1)}>Modificar callback</button>Nos regresa una función (Puede usarse para procesos complejos)
    (useMemo y useCallback usualmente se usan en conjunto)
    <h2>useRef: {refCounter.current}</h2>
    <button onClick={() => refCounter.current = refCounter.current + 1}>Modificar Ref</button>Modifica un valor, pero no actualiza la interfaz
    <h2>useReducer : {stateReduce}</h2>
    <button onClick={() => { dispatch(stateCounter) }}>Modificar Reducer</button>
   </>
  )
}

export default App
