import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Navbar({ onSelect }) {
  return (
    <nav style={{ marginBottom: 20 }}>
      <button onClick={() => onSelect('profile')}>Profile</button>
      <button onClick={() => onSelect('visits')}>Visits</button>
      <button onClick={() => onSelect('configuration')}>Configuration</button>
    </nav>
  )
}

function Profile() {
  return <h1>Profile</h1>
}

function Visits() {
  return <h1>Visits</h1>
}

function Configuration() {
  return <h1>Configuration</h1>
}

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('profile')

  let content
  if (page === 'profile') content = <Profile />
  else if (page === 'visits') content = <Visits />
  else if (page === 'configuration') content = <Configuration />

  return (
    <>
      <Navbar onSelect={setPage} />
      {content}
    </>
  )
}

export default App
