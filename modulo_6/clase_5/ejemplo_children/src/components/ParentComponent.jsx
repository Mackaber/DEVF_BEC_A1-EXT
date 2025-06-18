export default function ParentComponent({ children }) {
    return (
        <div style={{border: '1px solid red'}}>
            { children }
        </div>
    )
}