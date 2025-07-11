import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // Paso 4. Declaramos un state para guardar los datos
  const [posts, setPosts] = useState([])


  // Paso 1. Poner el useEffect
  useEffect(() => {
    console.log("useEffect Ejecutado!")

    // Paso 1.1 Declarar función asíncrona 
    // (Porque useEffect no puede contener una función asíncrona por sí sola)
    async function fetchData() {
      // Paso 2. Cargar datos usando fetch o axios
      const json_data = await fetch("https://jsonplaceholder.typicode.com/posts") // Obtener el JSON
      const data = await json_data.json() // Extraer el json de data y parserarlo como Objeto
      console.log(data)

      // Paso 5. Cargar los datos a el state
      setPosts(data)
    }

    // Paso 3. Llamar la función
    fetchData()
  }, [])

  return (
    // Paso 6. Mostrarlos en la interfaz
    <>
      {posts.map((post) =>
        <p key={post.id} >{post.title}</p>  
      ) }
    </>
  )
}

export default App
