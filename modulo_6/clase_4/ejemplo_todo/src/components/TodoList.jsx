import TodoItem from './TodoItem'
import './TodoList.css'
export default function TodoList({ todos, setTodos }) {

    function handleDelete(index) {
         const copiaTodos = [...todos] // Hacemos una copia
         copiaTodos.splice(index, 1) // Elimina la tare en ese index
         setTodos(copiaTodos)
    }

    return(
        <div className="todolist-wrapper">
            {todos.map((todo, index) => <TodoItem key={index} {...{index, todo, handleDelete}} />)}
        </div>
    )
}