import { useState, useEffect } from 'react'
import firebaseApp from '../utils/firebase'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'

function Page() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    getTodos()
  }, [])

  async function getTodos() {
    const db = getFirestore(firebaseApp)
    const todosCol = collection(db, 'todos')
    const todosSnapshot = await getDocs(todosCol)
    const todosList = todosSnapshot.docs.map(doc => ({
      id: doc.id,
      // ...doc.data(),
      title: doc.data().title
    }))
    setTodos(todosList)
  }

  async function handleAdd() {
    const db = getFirestore(firebaseApp)
    const todosCol = collection(db, 'todos')

    await addDoc(todosCol, {
      title: newTodo,
      anidado: {
        fecha: new Date()
      },
      otro: {
        fecha: new Date()
      },
      otro2: {
        fecha: new Date()
      }
    })

    getTodos()
  }

  return (
    <div>
      <h1>Ejemplo Firebase</h1>

      <input onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAdd}>Agregar</button>

      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  )
}

export default Page
