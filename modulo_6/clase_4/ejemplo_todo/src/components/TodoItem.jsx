import './TodoItem.css'
export default function TodoItem({index, todo, handleDelete}) {
    return (
        <div className="todoitem">
            <span>{todo}</span>
            <button className="todoitem-delete" onClick={() => handleDelete(index)}>x</button>
        </div>
    )
}