import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'

function App() {

  const user = {
    name: "Mackaber",
    age: 30,
    profession: "Programmer"
  }

  return (
    <>
      <Header name="Mackaber" color="red" />
      <Content user={user} />
    </>
  )
}

export default App
