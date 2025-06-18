import { useState } from 'react'
import './App.css'
import Component from './components/Component'
import OpSingleLine from './components/OpSingleLine'
import Conditionalif from './components/Conditionalif'
import Switch from './components/Switch'

function App() {
  const [conditional, setConditional] = useState(true)
  const [color, setColor] = useState('')

  const colorMap = {
    "black": <Component renderType="Your picked color is black" />,
    "red": <Component renderType="Your picked color is red" />,
    "blue": <Component renderType="Your picked color is blue" />,
    "green": <Component renderType="Your picked color is green" />,
    "": <Component renderType="Your picked color is default" />
  }

  return (
    <>
      <OpSingleLine /> 
      <hr/>
      <input type='checkbox' value={conditional} onChange={(e) => setConditional(e.target.checked)} />
      Condicial con If<br />
      <Conditionalif {...{conditional}} />
      <hr/>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="">None</option>
      </select>
      <Switch {...{color}} />
      <hr />
      {}
    </>  
  )}

export default App
