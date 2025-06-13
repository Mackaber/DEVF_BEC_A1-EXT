import './NewTodo.css'

export default function NewTodo({input, handleInput, handleNewClick}) {

    return (
        <div className="newtodo-wrapper">
            <input
                className="newtodo-input"
                value={input}
                onChange={handleInput}
                placeholder="Nueva tarea..."
            />
            <button
                className="newtodo-btn"
                onClick={handleNewClick}
                title="Agregar tarea"
            >+</button>
        </div>
    )
}