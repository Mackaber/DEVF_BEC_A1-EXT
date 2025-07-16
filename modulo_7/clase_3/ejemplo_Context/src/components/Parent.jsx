import './Parent.css'

export default function Parent({ children }) {
    const { value } = useContext(AppContext)

    return (
    <>
        <h1>Parent {value}</h1>
        <div className='parent-container'>
            {children}
        </div>
    </>
    )
}