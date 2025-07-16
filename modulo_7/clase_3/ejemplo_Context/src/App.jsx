import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'
import Parent from './components/Parent'
import { AppContext } from './contexts/Provider'
import { Provider } from './contexts/Provider'

function App() {
  // Paso opcional, usarlo en otro lado
  const { value } = useContext(AppContext)

  return (
    <>
      <h1>El valor es {value}</h1>
      <Parent>
        <Parent>
          <Parent>
            <Parent>
                <Parent>
                  <Parent>
                    <Parent>
                      <Parent>
                        <Child />
                      </Parent>
                    </Parent>
                  </Parent>
                </Parent>
            </Parent>
          </Parent>
        </Parent>
      </Parent>
    </>
  )
}

export default App
