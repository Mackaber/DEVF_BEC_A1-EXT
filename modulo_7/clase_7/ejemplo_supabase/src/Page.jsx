
import { useState, useEffect } from 'react'
import supabase from '../utils/supabase'

function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const response = await supabase.from('todos').select("*")

      console.log(response.data.length)

      if (response.data.length >= 1) {
        setTodos(response.data)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      <h1>Ejemplo Supabase</h1>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  )
}

export default Page
