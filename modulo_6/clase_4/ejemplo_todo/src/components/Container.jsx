import { useState } from "react"
import NewTodo from './NewTodo'
import TodoList from './TodoList'

export default function Container() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleNewClick() {
        const copiaTodos = [...todos] // Hacemos una copia
        copiaTodos.push(input) // A la copia le añadimos el nuevo Todo
        setTodos(copiaTodos) // Ponemos ese valor como el nuevo todos

        //setTodos([...todos, input]) O en un sólo paso
        setInput("")
    }


    return (
        <div className="glass-container">
            <NewTodo {...{input, handleInput, handleNewClick}}/>
            <TodoList  {...{todos, setTodos}}/>
        </div>
    )
}