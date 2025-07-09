import { useState } from "react"

export default function FormularioTradicional() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

 function handleSubmit(e) {

    console.log(`Usando state: ${name}`)
    console.log(`Usando state: ${lastName}`)

    // o...

    console.log(`Usando target: ${e.target.name.value}`)
    console.log(`Usando target: ${e.target.lastName.value}`)

    e.preventDefault()
  }

    return (
        <>
            <h2>Formulario normal:</h2>
            <form onSubmit={handleSubmit}>
                Name: <input name='name' onChange={(e) => setName(e.target.value)} /><br />
                Last Name:<input name='lastName' onChange={(e) => setLastName(e.target.value)} /><br />
                <input type='submit' value='enviar' />
            </form>
        </>

    )
}